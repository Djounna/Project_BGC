using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace BGCDataAccess.Migrations
{
    /// <inheritdoc />
    public partial class DataModelCorrection : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_GameSessions_GameTables_TableGameTableId",
                table: "GameSessions");

            migrationBuilder.DropForeignKey(
                name: "FK_RpgSessions_GameTables_TableGameTableId",
                table: "RpgSessions");

            migrationBuilder.DropForeignKey(
                name: "FK_RpgSessions_RpgCampaigns_CampaignRpgCampaignId",
                table: "RpgSessions");

            migrationBuilder.DropIndex(
                name: "IX_RpgSessions_CampaignRpgCampaignId",
                table: "RpgSessions");

            migrationBuilder.DropIndex(
                name: "IX_RpgCampaignRegistrations_RpgCampaignId",
                table: "RpgCampaignRegistrations");

            migrationBuilder.DropIndex(
                name: "IX_GameSessions_TableGameTableId",
                table: "GameSessions");

            migrationBuilder.DropColumn(
                name: "CampaignRpgCampaignId",
                table: "RpgSessions");

            migrationBuilder.DropColumn(
                name: "TableGameTableId",
                table: "GameSessions");

            migrationBuilder.RenameColumn(
                name: "TableGameTableId",
                table: "RpgSessions",
                newName: "RpgCampaignId");

            migrationBuilder.RenameIndex(
                name: "IX_RpgSessions_TableGameTableId",
                table: "RpgSessions",
                newName: "IX_RpgSessions_RpgCampaignId");

            migrationBuilder.AddColumn<int>(
                name: "GameTableId",
                table: "RpgSessions",
                type: "int",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "GameTableId",
                table: "GameSessions",
                type: "int",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_RpgSessions_GameTableId",
                table: "RpgSessions",
                column: "GameTableId");

            migrationBuilder.CreateIndex(
                name: "IX_RpgCampaignRegistrations_RpgCampaignId",
                table: "RpgCampaignRegistrations",
                column: "RpgCampaignId");

            migrationBuilder.CreateIndex(
                name: "IX_GameSessions_GameTableId",
                table: "GameSessions",
                column: "GameTableId");

            migrationBuilder.AddForeignKey(
                name: "FK_GameSessions_GameTables_GameTableId",
                table: "GameSessions",
                column: "GameTableId",
                principalTable: "GameTables",
                principalColumn: "GameTableId");

            migrationBuilder.AddForeignKey(
                name: "FK_RpgSessions_GameTables_GameTableId",
                table: "RpgSessions",
                column: "GameTableId",
                principalTable: "GameTables",
                principalColumn: "GameTableId");

            migrationBuilder.AddForeignKey(
                name: "FK_RpgSessions_RpgCampaigns_RpgCampaignId",
                table: "RpgSessions",
                column: "RpgCampaignId",
                principalTable: "RpgCampaigns",
                principalColumn: "RpgCampaignId",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_GameSessions_GameTables_GameTableId",
                table: "GameSessions");

            migrationBuilder.DropForeignKey(
                name: "FK_RpgSessions_GameTables_GameTableId",
                table: "RpgSessions");

            migrationBuilder.DropForeignKey(
                name: "FK_RpgSessions_RpgCampaigns_RpgCampaignId",
                table: "RpgSessions");

            migrationBuilder.DropIndex(
                name: "IX_RpgSessions_GameTableId",
                table: "RpgSessions");

            migrationBuilder.DropIndex(
                name: "IX_RpgCampaignRegistrations_RpgCampaignId",
                table: "RpgCampaignRegistrations");

            migrationBuilder.DropIndex(
                name: "IX_GameSessions_GameTableId",
                table: "GameSessions");

            migrationBuilder.DropColumn(
                name: "GameTableId",
                table: "RpgSessions");

            migrationBuilder.DropColumn(
                name: "GameTableId",
                table: "GameSessions");

            migrationBuilder.RenameColumn(
                name: "RpgCampaignId",
                table: "RpgSessions",
                newName: "TableGameTableId");

            migrationBuilder.RenameIndex(
                name: "IX_RpgSessions_RpgCampaignId",
                table: "RpgSessions",
                newName: "IX_RpgSessions_TableGameTableId");

            migrationBuilder.AddColumn<int>(
                name: "CampaignRpgCampaignId",
                table: "RpgSessions",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "TableGameTableId",
                table: "GameSessions",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateIndex(
                name: "IX_RpgSessions_CampaignRpgCampaignId",
                table: "RpgSessions",
                column: "CampaignRpgCampaignId");

            migrationBuilder.CreateIndex(
                name: "IX_RpgCampaignRegistrations_RpgCampaignId",
                table: "RpgCampaignRegistrations",
                column: "RpgCampaignId",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_GameSessions_TableGameTableId",
                table: "GameSessions",
                column: "TableGameTableId");

            migrationBuilder.AddForeignKey(
                name: "FK_GameSessions_GameTables_TableGameTableId",
                table: "GameSessions",
                column: "TableGameTableId",
                principalTable: "GameTables",
                principalColumn: "GameTableId",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_RpgSessions_GameTables_TableGameTableId",
                table: "RpgSessions",
                column: "TableGameTableId",
                principalTable: "GameTables",
                principalColumn: "GameTableId",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_RpgSessions_RpgCampaigns_CampaignRpgCampaignId",
                table: "RpgSessions",
                column: "CampaignRpgCampaignId",
                principalTable: "RpgCampaigns",
                principalColumn: "RpgCampaignId",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
