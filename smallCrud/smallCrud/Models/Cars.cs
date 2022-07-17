using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace smallCrud.Models
{
    public class Cars
    {
        [Key]
        public int id { get; set; }
        public string name { get; set; }
    }
}
