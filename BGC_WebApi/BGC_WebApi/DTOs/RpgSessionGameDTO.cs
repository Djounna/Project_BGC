using BGC_DataAccess.Entities;

namespace BGC_WebApi.DTOs;

public class RpgSessionGameDTO
{
    public int RpgSessionGameId { get; set; }

    public int RpgSessionId { get; set; }
    public RpgSession RpgSession { get; set; }

    public int GameVersionId { get; set; }
    public GameVersion GameVersion { get; set; }
}
