using AutoMapper;
using BGC_BusinessLogic.Models;
using BGC_WebApi.DTOs;

namespace BGC_WebApi.Configuration;

public class APIMappingProfile : Profile
{
	public APIMappingProfile()
	{
		CreateMap<GameModel, GameDTO>();
		CreateMap<GameVersionModel, GameVersionDTO>();
		CreateMap<GameSessionModel, GameSessionDTO>();
		CreateMap<GameSessionGameModel, GameSessionGameDTO>();
		CreateMap<GameTableModel, GameTableDTO>();
		CreateMap<RpgCampaignModel, RpgCampaignDTO>();
		CreateMap<RpgSessionModel, RpgSessionDTO>();
		CreateMap<GameSessionRegistrationModel, GameSessionRegistrationDTO>();
		CreateMap<RpgCampaignRegistrationModel, RpgCampaignRegistrationDTO>();
		CreateMap<RpgSessionGameModel, RpgSessionGameDTO>();
		CreateMap<MemberModel, MemberDTO>();		

	}
}
