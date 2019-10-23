using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using titlesearch.Models;
using titlesearch.ViewModels;

namespace titlesearch.Controllers
{
    [Route("api/[controller]")]
    public class TitlesController : Controller
    {
        MongoService _service;

        public TitlesController(MongoService Service) {
            _service = Service;
        }

        [HttpGet("[action]")]
        public TitlesViewModel Index(string Title = "", int Take = 10, int Skip = 0)
        {
            var titles = _service.GetTitles(Title, Take, Skip);
            var count = _service.Count(Title);
            return new TitlesViewModel() {
                Titles = titles,
                TotalCount = count
            };
        }
    }
}
