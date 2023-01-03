using BGC_DataAccess.Entities;

namespace BGC_WebApi.DTOs;
/// <summary>
/// DTO for game sessions games
/// </summary>
public class GameSessionGameDTO
{
    /// <summary>
    /// Id
    /// </summary>
    public int GameSessionGameId { get; set; }
    /// <summary>
    /// Id of the game session
    /// </summary>
    public int GameSessionId { get; set; }
    /// <summary>
    /// game session
    /// </summary>
    public GameSessionDTO GameSession { get; set; }
    /// <summary>
    /// id of the game version
    /// </summary>
    public int GameVersionId { get; set; }
    /// <summary>
    /// game version
    /// </summary>
    public GameVersionDTO GameVersion { get; set; }
}
