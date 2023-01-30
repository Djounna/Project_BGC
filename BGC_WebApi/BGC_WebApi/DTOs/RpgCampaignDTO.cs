using BGC_DataAccess.Entities;

namespace BGC_WebApi.DTOs;

/// <summary>
/// DTO for RPG Campaign
/// </summary>
public class RpgCampaignDTO
{
    /// <summary>
    /// Id
    /// </summary>
    public int RpgCampaignId { get; set; }
    /// <summary>
    /// Name
    /// </summary>
    public string Name { get; set; }
    /// <summary>
    /// Description
    /// </summary>
    public string? Description { get; set; }
    /// <summary>
    /// Id of organizer
    /// </summary>
    public int? OrganizerId { get; set; }
    /// <summary>
    /// Organizer
    /// </summary>
    public MemberDTO? Organizer { get; set; }

    //public ICollection<RpgSession> Sessions { get; set; }
    //public ICollection<RpgCampaignRegistration> RpgCampaignRegistrations { get; set; }
}
