using Microsoft.EntityFrameworkCore.ChangeTracking;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;

namespace BerardAutomotive.Features.Appointment
{
    public class AppointmentDto
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Phone { get; set; }
        public DateTimeOffset Time { get; set; }
        public string Email { get; set; }
        public string Note { get; set; }


    }
}
