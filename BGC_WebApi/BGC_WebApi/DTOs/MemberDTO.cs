using BGC_DataAccess.Entities;

namespace BGC_WebApi.DTOs;

public class MemberDTO
{
    public int MemberId { get; set; }
    public string Name { get; set; }
    public string Email { get; set; }
    public string Password { get; set; }
    public string Role { get; set; }  // TO DO : to change when adding Role&Permission 

    public ICollection<RpgCampaign> RpgCampaigns { get; set; }
    public ICollection<GameSession> GameSessions { get; set; }

    public ICollection<RpgCampaignRegistration> RpgCampaignRegistrations { get; set; }
    public ICollection<GameSessionRegistration> GameSessionRegistrations { get; set; }
}
