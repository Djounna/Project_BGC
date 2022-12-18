using BGC_DataAccess.Entities;
using BGC_DataAccess.Enums;

namespace BGC_WebApi.DTOs;

/// <summary>
/// DTO for GameSessions
/// </summary>
public class GameSessionDTO
{
    /// <summary>
    /// Game session Id
    /// </summary>
    public int GameSessionId { get; set; }
    /// <summary>
    /// Game session name
    /// </summary>
    public string Name { get; set; }
    /// <summary>
    /// Game session description
    /// </summary>
    public string? Description { get; set; }
    /// <summary>
    /// Planned date
    /// </summary>
    public DateTime Schedule { get; set; }
    /// <summary>
    /// Mininmum number of players
    /// </summary>
    public int? MinNumberPlayers { get; set; }
    /// <summary>
    /// Maximum number of players
    /// </summary>
    public int? MaxNumberPlayers { get; set; }

    /// <summary>
    /// Session status
    /// </summary>
    public SessionStatus Status { get; set; }
    
    /// <summary>
    /// Length of the game, in Min
    /// </summary>
    public int? Length { get; set; }

    /// <summary>
    /// Organizer Id
    /// </summary>
    public int? OrganizerId { get; set; }
    /// <summary>
    /// Organizer of the session
    /// </summary>
    public Member Organizer { get; set; }
    
    /// <summary>
    /// Game table Id
    /// </summary>
    public int? GameTableId { get; set; }
    
    /// <summary>
    /// GameTable
    /// </summary>
    public GameTable Table { get; set; }
}
