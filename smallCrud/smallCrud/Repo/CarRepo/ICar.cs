using smallCrud.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace smallCrud.Repo.CarRepo
{
    public interface ICar
    {
        Task<bool> Save(Cars cars);
        Task<bool> Delete(int id);
        Task<Cars> Get(int id);
        Task<List<Cars>> GetAll();
    }
}
