using AutoMapper;
using BGC_DataAccess.Entities;
using BGC_DataAccess.Interfaces;
using BGC_WebApi.DTOs;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace BGC_WebApi.Controllers;

/// <summary>
/// Controller for RPG campaign registrations
/// </summary>
[Route("api/[controller]")]
[ApiController]
public class RpgCampaignRegistrationController : BaseController
{
    private IRpgCampaignRegistrationService RpgCampaignRegistrationService;

    public RpgCampaignRegistrationController(IRpgCampaignRegistrationService RpgCampaignRegistrationService, IMapper mapper) : base(mapper)
    {
        this.RpgCampaignRegistrationService = RpgCampaignRegistrationService;
    }

    /// <summary>
    /// Get All Rpg campaign registrations
    /// </summary>
    [HttpGet]

    public async Task<ActionResult<IEnumerable<RpgCampaignRegistrationDTO>>> GetAll()
    {
        return Ok(mapper.Map<IEnumerable<RpgCampaignRegistrationDTO>>(await RpgCampaignRegistrationService.GetAll()));
    }

    /// <summary>
    /// Get RpgCampaignRegistration By Id
    /// </summary>
    /// <param name="id">Id</param>
    [HttpGet]
    [Route("{id}")]

    public async Task<ActionResult<RpgCampaignRegistrationDTO>> GetById(int id)
    {
        return Ok(mapper.Map<RpgCampaignRegistrationDTO>(await RpgCampaignRegistrationService.GetById(id)));
    }

    /// <summary>
    /// Create a new RpgCampaign Registration
    /// </summary>
    /// <param name="RpgCampaignRegistrationDTO">Dto</param>
    [HttpPost]
    public async Task<ActionResult> Post([FromBody] RpgCampaignRegistrationDTO RpgCampaignRegistrationDTO)
    {
        await RpgCampaignRegistrationService.Insert(mapper.Map<RpgCampaignRegistration>(RpgCampaignRegistrationDTO));
        return Ok();
    }


    /// <summary>
    ///  Update a RpgCampaign Registration
    /// </summary>
    /// <param name="id">Id</param>
    /// <param name="RpgCampaignRegistrationDTO">Dto</param>
    [HttpPut]
    public async Task<ActionResult> Put(int id, [FromBody] RpgCampaignRegistrationDTO RpgCampaignRegistrationDTO)
    {
        await RpgCampaignRegistrationService.Update(id, mapper.Map<RpgCampaignRegistration>(RpgCampaignRegistrationDTO));
        return Ok();
    }

    /// <summary>
    /// Delete a RpgCampaign Registration
    /// </summary>
    /// <param name="id">Id</param>
    [HttpDelete]
    public void Delete(int id)
    {
        // TO DO
    }
}