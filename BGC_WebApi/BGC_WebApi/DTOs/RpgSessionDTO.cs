using BGC_DataAccess.Entities;
using BGC_DataAccess.Enums;

namespace BGC_WebApi.DTOs;

/// <summary>
/// DTO for RPG session
/// </summary>
public class RpgSessionDTO
{
    /// <summary>
    /// Id
    /// </summary>
    public int RpgSessionId { get; set; }
    /// <summary>
    /// Name
    /// </summary>
    public string Name { get; set; }
    /// <summary>
    /// Description
    /// </summary>
    public string? Description { get; set; }
    /// <summary>
    /// Day and time of the game
    /// </summary>
    public DateTime Schedule { get; set; }
    /// <summary>
    /// Status of the session
    /// </summary>
    public SessionStatus Status { get; set; }
    /// <summary>
    /// Id of the RPG campaign
    /// </summary>
    public int RpgCampaignId { get; set; }
    /// <summary>
    /// RPG campaign
    /// </summary>
    public RpgCampaignDTO Campaign { get; set; }
    /// <summary>
    /// Id of the game table
    /// </summary>
    public int? GameTableId { get; set; }
    /// <summary>
    /// Game table
    /// </summary>
    public GameTableDTO Table { get; set; }

    //public ICollection<RpgSessionGame> RpgSessionGames { get; set; }
}
