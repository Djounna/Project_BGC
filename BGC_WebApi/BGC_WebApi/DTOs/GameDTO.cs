using BGC_DataAccess.Entities;

namespace BGC_WebApi.DTOs;

/// <summary>
/// DTO for Games
/// </summary>
public class GameDTO
{
    /// <summary>
    /// Game Id
    /// </summary>
    public int GameId { get; set; }
    /// <summary>
    /// Game name
    /// </summary>
    public string Name { get; set; }
    /// <summary>
    /// Game description
    /// </summary>
    public string? Description { get; set; }
    /// <summary>
    /// Release Year
    /// </summary>
    public int? Year { get; set; }
    /// <summary>
    /// url of the Image
    /// </summary>
    public string? ImageLink { get; set; }
    /// <summary>
    /// Minimum number of players
    /// </summary>
    public int? MinNumberPlayers { get; set; }
    /// <summary>
    /// Maximum number of players
    /// </summary>
    public int? MaxNumberPlayers { get; set; }

    /// <summary>
    /// Game versions for this game
    /// </summary>
    public ICollection<GameVersionDTO> Versions { get; set; } = new List<GameVersionDTO>();
}
