using BGC_DataAccess.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BGC_BusinessLogic.Models;
public class MemberModel
{
    public int MemberId { get; set; }
    public string Name { get; set; }
    public string Email { get; set; }
    public string Password { get; set; }
    public string Role { get; set; } 

    public ICollection<RpgCampaign> RpgCampaigns { get; set; }
    public ICollection<GameSession> GameSessions { get; set; }

    public ICollection<RpgCampaignRegistration> RpgCampaignRegistrations { get; set; }
    public ICollection<GameSessionRegistration> GameSessionRegistrations { get; set; }
}
