using Microsoft.EntityFrameworkCore;
using smallCrud.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace smallCrud.Repo.CarRepo
{
    public class CarService : ICar
    {
        private DataContext _context;
        public CarService(DataContext context)
        {
            _context = context;
        }

        public async Task<bool> Delete(int id)
        {
            var car = await _context.Cars.FirstOrDefaultAsync(x => x.id == id);
            _context.Cars.Remove(car);

            await _context.SaveChangesAsync();
            return true;
        }

        public async Task<Cars> Get(int id)
        {
            var car = await _context.Cars.FirstOrDefaultAsync(x => x.id == id);
            return car;
        }

        public async Task<List<Cars>> GetAll()
        {
            var cars = await _context.Cars.ToListAsync();
            return cars;
        }

        //it's not the right way to use entity direct it's just for exapmle the right way is use viewModel (MVVM)
        public async Task<bool> Save(Cars cars)
        {
            if (cars.id == 0)
            {
                _context.Add(cars);
            }
            else
            {
                var car = await _context.Cars.FirstOrDefaultAsync(x => x.id == cars.id);
                car.name = cars.name;
            }

            await _context.SaveChangesAsync();
            return true;
        }
    }
}
