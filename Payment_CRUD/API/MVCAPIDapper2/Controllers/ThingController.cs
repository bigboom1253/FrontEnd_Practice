using Dapper;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using MySql.Data.MySqlClient;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MVCAPIDapper2.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ThingController : ControllerBase
    {
        string _connection = @"Server=localhost; Database=w3schools; port=3306; Uid=root; Pwd=and1253";
        
        // GET: api/PaymentDetail
        [HttpGet]
        public IActionResult Get()
        {
            IEnumerable<Models.Thing> lst = null;
            using (var db = new MySqlConnection(_connection))
            {
                var sql = "select * from PaymentDetails;";

                lst = db.Query<Models.Thing>(sql);
            }

            return Ok(lst);
        }


        [HttpPost]
        public IActionResult Insert(Models.Thing model)
        {
            int result = 0;
            using (MySqlConnection db = new MySqlConnection(_connection))
            {
                var sql = "insert into PaymentDetails(CardOwnerName, CardNumber, ExpirationDate, SecurityCode)" +
                    " values(@CardOwnerName, @CardNumber, @ExpirationDate, @SecurityCode)";
                result = db.Execute(sql, model);

            }
            return Ok(result);
        }

        [HttpPut]
        public IActionResult Edit(Models.Thing model)
        {
            int result = 0;
            using (MySqlConnection db = new MySqlConnection(_connection))
            {
                var sql = "UPDATE PaymentDetails set CardOwnerName = @CardOwnerName, CardNumber=@CardNumber" +
                    ", ExpirationDate=@ExpirationDate, SecurityCode=@SecurityCode" +
                    " where PaymentDetailId=@PaymentDetailId";
                result = db.Execute(sql, model);

            }
            return Ok(result);
        }


        [HttpDelete]
        public IActionResult Delete(Models.Thing model)
        {
            int result = 0;
            using (MySqlConnection db = new MySqlConnection(_connection))
            {
                var sql = "delete from PaymentDetails where PaymentDetailId=@PaymentDetailId";
                result = db.Execute(sql, model);

            }
            return Ok(result);
        }


        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            int result = 0;
            using (MySqlConnection db = new MySqlConnection(_connection))
            {
                var sql = "delete from PaymentDetails where PaymentDetailId=@PaymentDetailId";
                result = db.Execute(sql, new { PaymentDetailId = id });

            }
            return Ok(result);
        }
    }
}
