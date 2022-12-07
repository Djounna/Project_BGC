using BGC_DataAccess.Entities;

namespace BGC_WebApi.DTOs;

public class GameSessionGameDTO
{

    public int GameSessionGameId { get; set; }

    public int GameSessionId { get; set; }
    public GameSession GameSession { get; set; }

    public int GameVersionId { get; set; }
    public GameVersion GameVersion { get; set; }
}
