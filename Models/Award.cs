using System.Collections.Generic;

namespace titlesearch.Models {
    public class Awards
    {
        public bool AwardWon { get; set; }
        public int AwardYear { get; set; }
        public List<string> Participants { get; set; }
        public string Award { get; set; }
        public string AwardCompany { get; set; }
    }

}