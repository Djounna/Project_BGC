using BGC_DataAccess.Entities;

namespace BGC_WebApi.DTOs;

/// <summary>
/// DTO for RPG campaign registration
/// </summary>
public class RpgCampaignRegistrationDTO
{
    /// <summary>
    /// Id
    /// </summary>
    public int RpgCampaignRegistrationId { get; set; }
    /// <summary>
    /// Id of the player
    /// </summary>
    public int MemberId { get; set; }
    /// <summary>
    /// Player
    /// </summary>
    public Member Player { get; set; }
    /// <summary>
    /// Id of the RPG campaign
    /// </summary>
    public int RpgCampaignId { get; set; }
    /// <summary>
    /// RPG campaign
    /// </summary>
    public RpgCampaign RpgCampaign { get; set; }
}
