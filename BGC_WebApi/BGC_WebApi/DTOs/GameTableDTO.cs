using BGC_DataAccess.Entities;

namespace BGC_WebApi.DTOs;

/// <summary>
/// DTO of the game table
/// </summary>
public class GameTableDTO
{
    /// <summary>
    /// Id
    /// </summary>
    public int GameTableId { get; set; }
    /// <summary>
    /// Number of seats available on this table
    /// </summary>
    public int Size { get; set; }

    //public ICollection<GameSession> GameSessions { get; set; }
    //public ICollection<RpgSession> RpgSessions { get; set; }
}
