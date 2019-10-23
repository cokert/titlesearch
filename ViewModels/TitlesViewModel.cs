using System.Collections.Generic;

namespace titlesearch.ViewModels {
    public class TitlesViewModel {
        public IEnumerable<Models.Title> Titles {get; set;}
        public long TotalCount { get; set; }
    }
}