BEGIN TRY

BEGIN TRAN;

-- CreateTable
CREATE TABLE [dbo].[Robot] (
    [RobotId] VARCHAR(50) NOT NULL,
    [RobotNm] VARCHAR(100) NOT NULL,
    [RobotStatus] INT NOT NULL,
    [createdAt] DATETIME2 NOT NULL CONSTRAINT [Robot_createdAt_df] DEFAULT CURRENT_TIMESTAMP,
    [updatedAt] DATETIME2 NOT NULL,
    CONSTRAINT [PK_Robot] PRIMARY KEY CLUSTERED ([RobotId])
);

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
