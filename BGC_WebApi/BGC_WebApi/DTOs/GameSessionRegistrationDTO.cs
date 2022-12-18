using BGC_DataAccess.Entities;

namespace BGC_WebApi.DTOs;
/// <summary>
/// DTO for game session registration
/// </summary>
public class GameSessionRegistrationDTO
{   
    /// <summary>
    /// Id
    /// </summary>
    public int GameSessionRegistrationId { get; set; }
    /// <summary>
    /// Id of the player
    /// </summary>
    public int MemberId { get; set; }
    /// <summary>
    /// Player
    /// </summary>
    public Member Player { get; set; }
    /// <summary>
    /// Id of the game session
    /// </summary>
    public int GameSessionId { get; set; }
    /// <summary>
    /// Game session
    /// </summary>
    public GameSession GameSession { get; set; }
}
