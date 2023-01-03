using BGC_DataAccess.Entities;

namespace BGC_WebApi.DTOs;

/// <summary>
/// DTO for game version
/// </summary>
public class GameVersionDTO
{
    /// <summary>
    /// Id
    /// </summary>
    public int GameVersionId { get; set; }

    /// <summary>
    /// Id of the game
    /// </summary>
    public int GameId { get; set; }
    /// <summary>
    /// Game
    /// </summary>
    public GameDTO Game { get; set; }

    //public ICollection<GameSessionGame> GameSessionGames { get; set; }
    //public ICollection<RpgSessionGame> RpgSessionGames { get; set; }
}
