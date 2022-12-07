using BGC_DataAccess.Entities;

namespace BGC_WebApi.DTOs;

public class GameSessionRegistrationDTO
{
    public int GameSessionRegistrationId { get; set; }

    public int MemberId { get; set; }
    public Member Player { get; set; }

    public int GameSessionId { get; set; }
    public GameSession GameSession { get; set; }
}
