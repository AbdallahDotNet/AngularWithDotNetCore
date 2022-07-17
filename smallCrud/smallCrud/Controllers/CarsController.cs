using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using smallCrud.Models;
using smallCrud.Repo.CarRepo;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace smallCrud.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [EnableCors("Cors")]
    [Authorize(Policy = "AdminRequire")]
    public class CarsController : ControllerBase
    {
        private ICar _repo;
        public CarsController(ICar repo)
        {
            _repo = repo;
        }

        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            var result = await _repo.GetAll();
            return Ok(result);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetAll(int id)
        {
            var result = await _repo.Get(id);
            return Ok(result);
        }

        [HttpPost]
        //it's not the right way to use entity direct it's just for exapmle the right way is use viewModel (MVVM)
        public async Task<IActionResult> Save(Cars cars)
        {
            var result = await _repo.Save(cars);
            return Ok(result);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            var result = await _repo.Delete(id);
            return Ok(result);
        }
    }
}
