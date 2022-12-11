using BGC_DataAccess.Entities;

namespace BGC_WebApi.DTOs;

public class GameDTO
{
    public int GameId { get; set; }
    public string Name { get; set; }
    public string? Description { get; set; }

    public int? MinNumberPlayers { get; set; }
    public int? MaxNumberPlayers { get; set; }

    //public ICollection<GameVersion> Versions { get; set; }
}
