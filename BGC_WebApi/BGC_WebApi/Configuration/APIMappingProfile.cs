using AutoMapper;
using BGC_BusinessLogic.Models;
using BGC_DataAccess.Entities;
using BGC_WebApi.DTOs;

namespace BGC_WebApi.Configuration;

public class APIMappingProfile : Profile
{
	public APIMappingProfile()
	{
		// BLL => DTO Mapping
		CreateMap<GameModel, GameDTO>().ReverseMap();
		CreateMap<GameVersionModel, GameVersionDTO>().ReverseMap();
		CreateMap<GameSessionModel, GameSessionDTO>().ReverseMap();
		CreateMap<GameSessionGameModel, GameSessionGameDTO>().ReverseMap();
		CreateMap<GameTableModel, GameTableDTO>().ReverseMap();
		CreateMap<RpgCampaignModel, RpgCampaignDTO>().ReverseMap();
		CreateMap<RpgSessionModel, RpgSessionDTO>().ReverseMap();
		CreateMap<GameSessionRegistrationModel, GameSessionRegistrationDTO>().ReverseMap();
		CreateMap<RpgCampaignRegistrationModel, RpgCampaignRegistrationDTO>().ReverseMap();
		CreateMap<RpgSessionGameModel, RpgSessionGameDTO>().ReverseMap();
		CreateMap<MemberModel, MemberDTO>().ReverseMap();

        // Entities => DTO Mapping  // TO DO : remove the mappings not used
        CreateMap<Game, GameDTO>().ReverseMap();
        CreateMap<GameVersion, GameVersionDTO>().ReverseMap();
        CreateMap<GameSession, GameSessionDTO>().ReverseMap();
        CreateMap<GameSessionGame, GameSessionGameDTO>().ReverseMap();
        CreateMap<GameTable, GameTableDTO>().ReverseMap();
        CreateMap<RpgCampaign, RpgCampaignDTO>().ReverseMap();
        CreateMap<RpgSession, RpgSessionDTO>().ReverseMap();
        CreateMap<GameSessionRegistration, GameSessionRegistrationDTO>().ReverseMap();
        CreateMap<RpgCampaignRegistration, RpgCampaignRegistrationDTO>().ReverseMap();
        CreateMap<RpgSessionGame, RpgSessionGameDTO>().ReverseMap();
        CreateMap<Member, MemberDTO>().ReverseMap();

    }
}
