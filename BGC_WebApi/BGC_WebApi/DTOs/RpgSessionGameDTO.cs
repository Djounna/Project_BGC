using BGC_DataAccess.Entities;

namespace BGC_WebApi.DTOs;

/// <summary>
/// DTO for RPG session game
/// </summary>
public class RpgSessionGameDTO
{
    /// <summary>
    /// ID
    /// </summary>
    public int RpgSessionGameId { get; set; }
    /// <summary>
    /// Id of the RPG session
    /// </summary>
    public int RpgSessionId { get; set; }
    /// <summary>
    /// RPG Session
    /// </summary>
    public RpgSessionDTO RpgSession { get; set; }
    /// <summary>
    /// Id of the game version
    /// </summary>
    public int GameVersionId { get; set; }
    /// <summary>
    /// Id of the game version
    /// </summary>
    public GameVersionDTO GameVersion { get; set; }
}
