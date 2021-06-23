using AngularDemo3.Model;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AngularDemo3.Controllers
{
    [Route("Todo")]
    [ApiController]
    public class TodoController : ControllerBase
    {
        [HttpGet("test")]
        public string test()
        {
            return "Hello from todo controller";
        }

        [HttpGet("test2")]
        public List<Todo> test2()
        {
            List<Todo> result = new List<Todo>();
            result.Add(new Todo() { task = "Buy groceries", complete = true });
            result.Add(new Todo() { task = "Vacuum house", complete = true });
            return result;
        }
    }
}
