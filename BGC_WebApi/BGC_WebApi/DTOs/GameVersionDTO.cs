using BGC_DataAccess.Entities;

namespace BGC_WebApi.DTOs;

public class GameVersionDTO
{

    public int GameVersionId { get; set; }

    public int GameId { get; set; }
    public Game Game { get; set; }

    //public ICollection<GameSessionGame> GameSessionGames { get; set; }
    //public ICollection<RpgSessionGame> RpgSessionGames { get; set; }
}
