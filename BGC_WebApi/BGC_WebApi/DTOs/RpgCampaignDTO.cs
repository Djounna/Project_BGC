using BGC_DataAccess.Entities;

namespace BGC_WebApi.DTOs;

public class RpgCampaignDTO
{
    public int RpgCampaignId { get; set; }
    public string Name { get; set; }
    public string? Description { get; set; }

    public int? OrganizerId { get; set; }
    public Member Organizer { get; set; }

    //public ICollection<RpgSession> Sessions { get; set; }
    //public ICollection<RpgCampaignRegistration> RpgCampaignRegistrations { get; set; }
}
