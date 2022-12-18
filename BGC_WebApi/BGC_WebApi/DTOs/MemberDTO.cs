using BGC_DataAccess.Entities;

namespace BGC_WebApi.DTOs;

/// <summary>
/// DTO for member
/// </summary>
public class MemberDTO
{
    /// <summary>
    /// Id
    /// </summary>
    public int MemberId { get; set; }
    /// <summary>
    /// Name
    /// </summary>
    public string Name { get; set; }
    /// <summary>
    /// Email address
    /// </summary>
    public string Email { get; set; }
    /// <summary>
    /// Password
    /// </summary>
    public string Password { get; set; }
    /// <summary>
    /// Role
    /// </summary>
    public string Role { get; set; }  // TO DO : to change when adding Role&Permission 

    //public ICollection<RpgCampaign> RpgCampaigns { get; set; }
    //public ICollection<GameSession> GameSessions { get; set; }

    //public ICollection<RpgCampaignRegistration> RpgCampaignRegistrations { get; set; }
    //public ICollection<GameSessionRegistration> GameSessionRegistrations { get; set; }
}
