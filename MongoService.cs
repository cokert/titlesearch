using Microsoft.Extensions.Configuration;
using MongoDB.Bson;
using MongoDB.Driver;
using System.Collections.Generic;
using System.Linq;
using titlesearch.ViewModels;

namespace titlesearch {
    public class MongoService {
        IMongoDatabase _db;

        public MongoService(IConfiguration configuration) {
            var client = new MongoClient(
                configuration.GetConnectionString("MongoConnectionString")
            );
            _db = client.GetDatabase("dev-challenge");
        }

        public IEnumerable<Models.Title> GetTitles(string TitleFilter = "", int Take = 10, int Skip = 0) {
            IQueryable<Models.Title> titles = _db.GetCollection<Models.Title>("Titles").AsQueryable();
            if (!string.IsNullOrEmpty(TitleFilter)) {
                titles = titles.Where(x => x.TitleName.ToUpper().Contains(TitleFilter.ToUpper()));
            }
            return titles.Take(Take).Skip(Skip).ToList();
        }

        public long Count(string Filter) {
            return _db.GetCollection<Models.Title>("Titles").CountDocuments(x => true);
            
        }
    }
}
