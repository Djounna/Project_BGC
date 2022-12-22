using AutoMapper;
using BGC_DataAccess.Entities;
using BGC_DataAccess.Interfaces;
using BGC_DataAccess.Services;
using BGC_WebApi.DTOs;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace BGC_WebApi.Controllers;

/// <summary>
/// Controller for RPG campaigns
/// </summary>
[Route("api/[controller]")]
[ApiController]
public class RpgCampaignController : BaseController
{
    private IRpgCampaignService rpgCampaignService;

    public RpgCampaignController(IRpgCampaignService rpgCampaignService, IMapper mapper) : base(mapper)
    {
        this.rpgCampaignService = rpgCampaignService;
    }

    /// <summary>
    /// Get All Rpg campaigns
    /// </summary>
    [HttpGet]

    public async Task<IActionResult> GetAll()
    {
        return Ok(mapper.Map<IEnumerable<RpgCampaignDTO>>(await rpgCampaignService.GetAll()));
    }

    /// <summary>
    /// Get RpgCampaign By Id
    /// </summary>
    /// <param name="id">Id</param>
    [HttpGet]
    [Route("{id}")]

    public async Task<IActionResult> GetById(int id)
    {
        return Ok(mapper.Map<RpgCampaignDTO>(await rpgCampaignService.GetById(id)));
    }

    /// <summary>
    /// Create a new RpgCampaign
    /// </summary>
    /// <param name="RpgCampaignDTO">Dto</param>
    [HttpPost]
    public async Task<IActionResult> Post([FromBody] RpgCampaignDTO RpgCampaignDTO)
    {
        await rpgCampaignService.Insert(mapper.Map<RpgCampaign>(RpgCampaignDTO));
        return Ok();
    }


    /// <summary>
    ///  Update a RpgCampaign
    /// </summary>
    /// <param name="id">Id</param>
    /// <param name="RpgCampaignDTO">Dto</param>
    [HttpPut]
    public async Task<IActionResult> Put(int id, [FromBody] RpgCampaignDTO RpgCampaignDTO)
    {
        await rpgCampaignService.Update(id, mapper.Map<RpgCampaign>(RpgCampaignDTO));
        return Ok();
    }

    /// <summary>
    /// Delete a RpgCampaign
    /// </summary>
    /// <param name="id">Id</param>
    [HttpDelete]
    public void Delete(int id)
    {
        // TO DO
    }
}
