using BGC_DataAccess.Entities;
using BGC_DataAccess.Enums;

namespace BGC_WebApi.DTOs;

public class RpgSessionDTO
{
    public int RpgSessionId { get; set; }
    public string Name { get; set; }
    public string? Description { get; set; }
    public DateTime Schedule { get; set; }

    public SessionStatus Status { get; set; }

    public int RpgCampaignId { get; set; }
    public RpgCampaign Campaign { get; set; }

    public int? GameTableId { get; set; }
    public GameTable Table { get; set; }

    //public ICollection<RpgSessionGame> RpgSessionGames { get; set; }
}
