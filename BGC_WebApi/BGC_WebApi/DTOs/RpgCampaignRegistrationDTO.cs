using BGC_DataAccess.Entities;

namespace BGC_WebApi.DTOs;

public class RpgCampaignRegistrationDTO
{
    public int RpgCampaignRegistrationId { get; set; }

    public int MemberId { get; set; }
    public Member Player { get; set; }

    public int RpgCampaignId { get; set; }
    public RpgCampaign RpgCampaign { get; set; }
}
