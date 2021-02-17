using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;
using BerardAutomotive.Data;
using BerardAutomotive.Features.Events;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace BerardAutomotive.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EventController : ControllerBase
    {
        private readonly DataContext dataContext;
        public EventController(DataContext dataContext)
        {
            this.dataContext = dataContext;
        }

        private static Expression<Func<Event, EventDto>> Migrate()
        {
            return x => new EventDto
            {
                Id = x.Id,
                Note = x.Note,
            };
        }

        [HttpGet]
        public IEnumerable<EventDto> GetAll()
        {
            return dataContext.Set<Event>().Select(Migrate()).ToList();
        }

        [HttpPost]
        public ActionResult<EventDto> Create(EventDto targetValue)
        {
            var data = dataContext.Set<Event>().Add(new Event
            {
                Note = targetValue.Note,
            });
            targetValue.Id = data.Entity.Id;
            dataContext.SaveChanges();
            return Created(string.Empty, targetValue);
        }

        [HttpDelete]

        public ActionResult<EventDto> Name(int id)
        {
            var data = dataContext.Set<Event>().FirstOrDefault(x => x.Id == id);
            dataContext.Set<Event>().Remove(data);
            dataContext.SaveChanges();
            return Ok();
        }
    }
}
