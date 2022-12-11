using BGC_DataAccess.Entities;

namespace BGC_WebApi.DTOs;

public class GameTableDTO
{
    public int GameTableId { get; set; }
    public int Size { get; set; }

    //public ICollection<GameSession> GameSessions { get; set; }
    //public ICollection<RpgSession> RpgSessions { get; set; }
}
