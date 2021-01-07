'use static'
// 가져와야할 KEY목록
//0~
//아바타 이미지 -> avatar_url
//아이디 -> login

//user id ~ 
//아바타 이미지 avatar_url
// 이메일 email
//팔로워 followers
//팔로잉 following
//repos_url repos_url

//제이슨 파일 불러오기
function loadProfile(){
    return fetch('https://api.github.com/users?since=1000')
    .then(response => response.json())
};

//프로필 리스트 업데이트
function displayProfiles(profiles){
    const profileContainer = document.querySelector('.profile_ls');
    profileContainer.innerHTML = profiles.map(profile => createProfileList(profile)).join('');

}

//프로필 상세 리스트 업데이트
function displayDetailProfile(details){
    const detailContainer = document.querySelector('.profile_detail');
    detailContainer.innerHTML = createDetailList(details);

}

//프로필 상세 HTML 생성
function createDetailList(details){
    return `
    <li><img src ="${details.avatar_url}"/></li>
    <li><span><strong>이메일</strong> : ${details.email}</span></li>
    <li><span><strong>팔로워</strong> : ${details.followers}</span></li>
    <li><span><strong>팔로잉</strong> : ${details.following}</span></li>
    <li><span><strong>repos_url</strong> : ${details.repos_url}</span></li>
    `
}


//프로필 HTML 생성
function createProfileList(profile){
    return `
    <li class ='profile'>
        <button class="profile_btn" id="${profile.id}" onclick="onClickProfile(this.id)">
            <img src="${profile.avatar_url}" class="profile_img"/>
            <span class ="login">${profile.login}</span>
        </button>
    </li>
    `;
}

//프로필 클릭 이벤트
function onClickProfile(clicked_profile_id){
    // console.log(clicked_profile_id);
    return fetch(`https://api.github.com/user/${clicked_profile_id}`)
    .then(response => response.json())
    .then(details => {
        displayDetailProfile(details);
    })

}

loadProfile()
    .then(profiles => {
        console.log(profiles);
        displayProfiles(profiles);
    })
    .catch(console.log);