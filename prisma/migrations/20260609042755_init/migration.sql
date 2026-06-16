-- CreateEnum
CREATE TYPE "Role" AS ENUM ('candidate', 'recruiter', 'employer');

-- CreateEnum
CREATE TYPE "AssessmentMode" AS ENUM ('single', 'full');

-- CreateEnum
CREATE TYPE "JourneyStatus" AS ENUM ('IN_PROGRESS', 'COMPLETED', 'REPORT_GENERATED');

-- CreateEnum
CREATE TYPE "PhaseStatus" AS ENUM ('NOT_STARTED', 'IN_PROGRESS', 'COMPLETED');

-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "role" "Role" NOT NULL,
    "verified_at" TIMESTAMP(3),
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "otp_verifications" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "otp_hash" TEXT NOT NULL,
    "expires_at" TIMESTAMP(3) NOT NULL,
    "verified_at" TIMESTAMP(3),
    "attempt_count" INTEGER NOT NULL DEFAULT 0,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "otp_verifications_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "assessment_journeys" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "role" "Role" NOT NULL,
    "mode" "AssessmentMode" NOT NULL DEFAULT 'single',
    "status" "JourneyStatus" NOT NULL DEFAULT 'IN_PROGRESS',
    "started_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "completed_at" TIMESTAMP(3),
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "assessment_journeys_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "phase_attempts" (
    "id" SERIAL NOT NULL,
    "journey_id" INTEGER NOT NULL,
    "phase_key" TEXT NOT NULL,
    "status" "PhaseStatus" NOT NULL DEFAULT 'NOT_STARTED',
    "responses_json" JSONB,
    "scores_json" JSONB,
    "dominant_tendency" TEXT,
    "secondary_tendency" TEXT,
    "dominance_ratio" DOUBLE PRECISION,
    "percentage" INTEGER,
    "band" TEXT,
    "mode" TEXT,
    "pattern_vector_json" JSONB,
    "report_json" JSONB,
    "submitted_at" TIMESTAMP(3),
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "phase_attempts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "overall_reports" (
    "id" SERIAL NOT NULL,
    "journey_id" INTEGER NOT NULL,
    "scores_json" JSONB NOT NULL,
    "dominant_tendency" TEXT,
    "secondary_tendency" TEXT,
    "dominance_ratio" DOUBLE PRECISION NOT NULL,
    "percentage" INTEGER NOT NULL,
    "band" TEXT NOT NULL,
    "mode" TEXT NOT NULL,
    "pattern_vector_json" JSONB NOT NULL,
    "alignment_health_json" JSONB NOT NULL,
    "phase_summary_json" JSONB NOT NULL,
    "report_json" JSONB NOT NULL,
    "template_version" TEXT NOT NULL DEFAULT 'v1',
    "generated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "overall_reports_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "questions" (
    "id" SERIAL NOT NULL,
    "role" "Role" NOT NULL,
    "phase_key" TEXT NOT NULL,
    "situation" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "questions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "question_options" (
    "id" SERIAL NOT NULL,
    "question_id" INTEGER NOT NULL,
    "option_key" TEXT NOT NULL,
    "text" TEXT NOT NULL,
    "tendency" TEXT NOT NULL,

    CONSTRAINT "question_options_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_role_key" ON "users"("email", "role");

-- CreateIndex
CREATE INDEX "assessment_journeys_user_id_role_status_idx" ON "assessment_journeys"("user_id", "role", "status");

-- CreateIndex
CREATE UNIQUE INDEX "assessment_journeys_user_id_role_key" ON "assessment_journeys"("user_id", "role");

-- CreateIndex
CREATE INDEX "phase_attempts_journey_id_status_idx" ON "phase_attempts"("journey_id", "status");

-- CreateIndex
CREATE UNIQUE INDEX "phase_attempts_journey_id_phase_key_key" ON "phase_attempts"("journey_id", "phase_key");

-- CreateIndex
CREATE UNIQUE INDEX "overall_reports_journey_id_key" ON "overall_reports"("journey_id");

-- CreateIndex
CREATE INDEX "questions_role_phase_key_idx" ON "questions"("role", "phase_key");

-- CreateIndex
CREATE UNIQUE INDEX "question_options_question_id_option_key_key" ON "question_options"("question_id", "option_key");

-- AddForeignKey
ALTER TABLE "otp_verifications" ADD CONSTRAINT "otp_verifications_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "assessment_journeys" ADD CONSTRAINT "assessment_journeys_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "phase_attempts" ADD CONSTRAINT "phase_attempts_journey_id_fkey" FOREIGN KEY ("journey_id") REFERENCES "assessment_journeys"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "overall_reports" ADD CONSTRAINT "overall_reports_journey_id_fkey" FOREIGN KEY ("journey_id") REFERENCES "assessment_journeys"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "question_options" ADD CONSTRAINT "question_options_question_id_fkey" FOREIGN KEY ("question_id") REFERENCES "questions"("id") ON DELETE CASCADE ON UPDATE CASCADE;
