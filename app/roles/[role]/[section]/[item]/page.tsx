import { type Role } from "../../../../../data/links";
import { SECTIONS } from "../../../../../data/sections";
import { Breadcrumb } from "../../../../../components/ui/Breadcrumb";
import Link from "next/link";
import { notFound } from "next/navigation";
import BASContent from "../../../../../components/BASContent";
import HostileFirePayContent from "../../../../../components/HostileFirePayContent";
import ImminentDangerPayContent from "../../../../../components/ImminentDangerPayContent";
import FSAContent from "../../../../../components/FSAContent";
import BAHContent from "../../../../../components/BAHContent";
import COLAContent from "../../../../../components/COLAContent";
import OHAContent from "../../../../../components/OHAContent";
import HDIPContent from "../../../../../components/HDIPContent";
import DivePayContent from "../../../../../components/DivePayContent";
import ExperimentalStressContent from "../../../../../components/ExperimentalStressContent";
import FlightDeckContent from "../../../../../components/FlightDeckContent";
import ParachuteContent from "../../../../../components/ParachuteContent";
import VBSSContent from "../../../../../components/VBSSContent";
import SpecialOperationsContent from "../../../../../components/SpecialOperationsContent";
import ToxicMaterialsContent from "../../../../../components/ToxicMaterialsContent";
import HDPContent from "../../../../../components/HDPContent";
import AviationCareerIncentivePayContent from "../../../../../components/AviationCareerIncentivePayContent";
import ForeignLanguageProficiencyPayContent from "../../../../../components/ForeignLanguageProficiencyPayContent";
import SDAPContent from "../../../../../components/SDAPContent";
import SDPContent from "../../../../../components/SDPContent";
import BRSContent from "../../../../../components/BRSContent";
import ContinuationPayContent from "../../../../../components/ContinuationPayContent";
import High3Content from "../../../../../components/High3Content";
import TEBContent from "../../../../../components/TEBContent";
import TSPContent from "../../../../../components/TSPContent";
import CZTEContent from "../../../../../components/CZTEContent";
import FlexibleSpendingAccountsContent from "../../../../../components/FlexibleSpendingAccountsContent";
import MilitaryStateTaxReliefContent from "../../../../../components/MilitaryStateTaxReliefContent";
import AllotmentsContent from "../../../../../components/AllotmentsContent";
import BasicNeedsAllowanceContent from "../../../../../components/BasicNeedsAllowanceContent";
import DebtManagementContent from "../../../../../components/DebtManagementContent";
import FinancialHardshipAssistanceContent from "../../../../../components/FinancialHardshipAssistanceContent";
import OverpaymentRepaymentPlansContent from "../../../../../components/OverpaymentRepaymentPlansContent";
import PCSOrdersProcessingContent from "../../../../../components/PCSOrdersProcessingContent";
import HouseholdGoodsShipmentContent from "../../../../../components/HouseholdGoodsShipmentContent";
import PersonallyProcuredMoveContent from "../../../../../components/PersonallyProcuredMoveContent";
import PCSStorageContent from "../../../../../components/PCSStorageContent";
import DislocationAllowanceContent from "../../../../../components/DislocationAllowanceContent";
import TemporaryLodgingExpenseContent from "../../../../../components/TemporaryLodgingExpenseContent";
import VehicleProcessingStorageContent from "../../../../../components/VehicleProcessingStorageContent";
import TADOrdersContent from "../../../../../components/TADOrdersContent";
import PerDiemRatesContent from "../../../../../components/PerDiemRatesContent";
import TravelVoucherSubmissionContent from "../../../../../components/TravelVoucherSubmissionContent";
import DTSAuthorizationContent from "../../../../../components/DTSAuthorizationContent";
import GovernmentTravelChargeCardContent from "../../../../../components/GovernmentTravelChargeCardContent";
import MileageReimbursementContent from "../../../../../components/MileageReimbursementContent";
import AdvanceTravelPayContent from "../../../../../components/AdvanceTravelPayContent";
import LeaveEnRouteTravelContent from "../../../../../components/LeaveEnRouteTravelContent";
import { MarriageDocumentationContent } from "../../../../../components/MarriageDocumentationContent";
import { BirthAdoptionContent } from "../../../../../components/BirthAdoptionContent";
import { StepchildrenAdditionContent } from "../../../../../components/StepchildrenAdditionContent";
import { SecondaryDependentsContent } from "../../../../../components/SecondaryDependentsContent";
import { DivorceLegalSeparationContent } from "../../../../../components/DivorceLegalSeparationContent";
import { DeathOfDependentsContent } from "../../../../../components/DeathOfDependentsContent";
import { AdultChildrenContent } from "../../../../../components/AdultChildrenContent";
import { FamilyCarePlanContent } from "../../../../../components/FamilyCarePlanContent";
import { EFMPContent } from "../../../../../components/EFMPContent";
import { EmergencyContactUpdatesContent } from "../../../../../components/EmergencyContactUpdatesContent";
import { DependentIDCardUpdatesContent } from "../../../../../components/DependentIDCardUpdatesContent";
import { CommandSponsorshipContent } from "../../../../../components/CommandSponsorshipContent";
import { CheckInProceduresContent } from "../../../../../components/CheckInProceduresContent";
import { SponsorshipProgramContent } from "../../../../../components/SponsorshipProgramContent";
import { InitialBAHBASVerificationContent } from "../../../../../components/InitialBAHBASVerificationContent";
import { RecordsReviewContent } from "../../../../../components/RecordsReviewContent";
import { SecurityClearanceTransferContent } from "../../../../../components/SecurityClearanceTransferContent";
import { CheckoutProceduresContent } from "../../../../../components/CheckoutProceduresContent";
import { FinalPaySettlementContent } from "../../../../../components/FinalPaySettlementContent";
import { RecordsTransferContent } from "../../../../../components/RecordsTransferContent";
import { LeaveSettlementContent } from "../../../../../components/LeaveSettlementContent";
import { OMPFManagementContent } from "../../../../../components/OMPFManagementContent";
import { SRBCorrectionsContent } from "../../../../../components/SRBCorrectionsContent";
import { AwardsDecorationsContent } from "../../../../../components/AwardsDecorationsContent";
import { TrainingRecordUpdatesContent } from "../../../../../components/TrainingRecordUpdatesContent";
import { EducationRecordsContent } from "../../../../../components/EducationRecordsContent";
import { BCNRContent } from "../../../../../components/BCNRContent";
import { MedicalRecordsContent } from "../../../../../components/MedicalRecordsContent";
import { Page11EntriesContent } from "../../../../../components/Page11EntriesContent";
import { TrainingJacketsContent } from "../../../../../components/TrainingJacketsContent";
import { MOLContent } from "../../../../../components/MOLContent";
import MOLFunctionalModuleContent from "../../../../../components/MOLFunctionalModuleContent";
import FunctionalModulesPage from "../../../../../components/FunctionalModulesPage";
import BattalionPermissionsContent from "../../../../../components/BattalionPermissionsContent";
import { PromotionDocumentationContent } from "../../../../../components/PromotionDocumentationContent";
import { JEPESContent } from "../../../../../components/JEPESContent";
import { CuttingScoreVerificationContent } from "../../../../../components/CuttingScoreVerificationContent";
import { PromotionWarrantsContent } from "../../../../../components/PromotionWarrantsContent";
import { MeritoriousPromotionsContent } from "../../../../../components/MeritoriousPromotionsContent";
import { EPMERequirementsContent } from "../../../../../components/EPMERequirementsContent";
import { TIGCorrectionsContent } from "../../../../../components/TIGCorrectionsContent";
import { MOSChangesContent } from "../../../../../components/MOSChangesContent";
import { FitnessReportsContent } from "../../../../../components/FitnessReportsContent";
import { PerformanceEvaluationAppealsContent } from "../../../../../components/PerformanceEvaluationAppealsContent";
import { PERBContent } from "../../../../../components/PERBContent";
import { RankReductionContent } from "../../../../../components/RankReductionContent";
import { FrockingContent } from "../../../../../components/FrockingContent";
import { DateOfRankCorrectionsContent } from "../../../../../components/DateOfRankCorrectionsContent";
import { MOSReclassificationContent } from "../../../../../components/MOSReclassificationContent";
import { AdditionalMOSAssignmentContent } from "../../../../../components/AdditionalMOSAssignmentContent";
import { PrimaryMOSChangesContent } from "../../../../../components/PrimaryMOSChangesContent";
// Deployment Support - Pre-Deployment
import { DeploymentOrdersContent } from "../../../../../components/DeploymentOrdersContent";
import { MedicalReadinessContent } from "../../../../../components/MedicalReadinessContent";
import { DentalReadinessContent } from "../../../../../components/DentalReadinessContent";
import { FamilyCarePlanValidationContent } from "../../../../../components/FamilyCarePlanValidationContent";
import { PowerOfAttorneyContent } from "../../../../../components/PowerOfAttorneyContent";
import { SGLIBeneficiaryUpdatesContent } from "../../../../../components/SGLIBeneficiaryUpdatesContent";
import { WillPreparationContent } from "../../../../../components/WillPreparationContent";
// Deployment Support - During Deployment
import { HFPIDPVerificationContent } from "../../../../../components/HFPIDPVerificationContent";
import { FSAProcessingContent } from "../../../../../components/FSAProcessingContent";
import { DependentSupportServicesContent } from "../../../../../components/DependentSupportServicesContent";
import { EmergencyLeaveRequestsContent } from "../../../../../components/EmergencyLeaveRequestsContent";
// Deployment Support - Post-Deployment
import { ReintegrationProcessingContent } from "../../../../../components/ReintegrationProcessingContent";
import { PayEntitlementVerificationContent } from "../../../../../components/PayEntitlementVerificationContent";
import { LeaveAccrualReviewContent } from "../../../../../components/LeaveAccrualReviewContent";
import { CRSCContent } from "../../../../../components/CRSCContent";
// Insurance & Healthcare - Life Insurance
import { SGLIContent } from "../../../../../components/SGLIContent";
import { FSGLIContent } from "../../../../../components/FSGLIContent";
import { TSGLIContent } from "../../../../../components/TSGLIContent";
import { VGLIContent } from "../../../../../components/VGLIContent";
import { BeneficiaryUpdatesContent } from "../../../../../components/BeneficiaryUpdatesContent";
// Insurance & Healthcare - Healthcare Benefits
import { TRICAREEnrollmentContent } from "../../../../../components/TRICAREEnrollmentContent";
import { HCFSAContent } from "../../../../../components/HCFSAContent";
import { EFMPMedicalScreeningContent } from "../../../../../components/EFMPMedicalScreeningContent";
import { DentalCoverageFEDVIPContent } from "../../../../../components/DentalCoverageFEDVIPContent";
import { VisionCoverageContent } from "../../../../../components/VisionCoverageContent";
// Education & Training - Military Education
import { PMEContent } from "../../../../../components/PMEContent";
import { ResidentNonResidentSchoolsContent } from "../../../../../components/ResidentNonResidentSchoolsContent";
import { CommandStaffCollegeContent } from "../../../../../components/CommandStaffCollegeContent";
import { WarCollegeContent } from "../../../../../components/WarCollegeContent";
import { MOSSpecificTrainingContent } from "../../../../../components/MOSSpecificTrainingContent";
// Education & Training - Civilian Education
import { TuitionAssistanceContent } from "../../../../../components/TuitionAssistanceContent";
import { GIBillBenefitsContent } from "../../../../../components/GIBillBenefitsContent";
import { GIBillTransferContent } from "../../../../../components/GIBillTransferContent";
import { JSTContent } from "../../../../../components/JSTContent";
import { CollegeCreditMilitaryContent } from "../../../../../components/CollegeCreditMilitaryContent";
// Education & Training - Professional Development
import { CredentialingProgramsContent } from "../../../../../components/CredentialingProgramsContent";
import { CertificationReimbursementContent } from "../../../../../components/CertificationReimbursementContent";
import { LanguageTrainingDLPTContent } from "../../../../../components/LanguageTrainingDLPTContent";
import { TechnicalCertificationsContent } from "../../../../../components/TechnicalCertificationsContent";
// Separations & Transitions - Voluntary Separation
import { EASContent } from "../../../../../components/EASContent";
import { VoluntaryEarlyReleaseContent } from "../../../../../components/VoluntaryEarlyReleaseContent";
import { ResignationOfficersContent } from "../../../../../components/ResignationOfficersContent";
// Separations & Transitions - Involuntary Separation
import { AdministrativeSeparationContent } from "../../../../../components/AdministrativeSeparationContent";
import { MedicalSeparationContent } from "../../../../../components/MedicalSeparationContent";
import { FailureToMeetStandardsContent } from "../../../../../components/FailureToMeetStandardsContent";
import { EntryLevelSeparationContent } from "../../../../../components/EntryLevelSeparationContent";
// Separations & Transitions - Retirement
import { ActiveDutyRetirementContent } from "../../../../../components/ActiveDutyRetirementContent";
import { ReserveRetirementContent } from "../../../../../components/ReserveRetirementContent";
import { MedicalRetirementContent } from "../../../../../components/MedicalRetirementContent";
import { TDRLContent } from "../../../../../components/TDRLContent";
import { SBPElectionsContent } from "../../../../../components/SBPElectionsContent";
// Separations & Transitions - Transition Programs
import { TAPContent } from "../../../../../components/TAPContent";
import { VABenefitsContent } from "../../../../../components/VABenefitsContent";
import { EmploymentAssistanceContent } from "../../../../../components/EmploymentAssistanceContent";
import { EducationBenefitsTransferContent } from "../../../../../components/EducationBenefitsTransferContent";
import { SkillBridgeContent } from "../../../../../components/SkillBridgeContent";
// Reserve & Mobilization - Reserve Administration
import { ReserveDutyStatusContent } from "../../../../../components/ReserveDutyStatusContent";
import { IDTPayContent } from "../../../../../components/IDTPayContent";
import { AnnualTrainingOrdersContent } from "../../../../../components/AnnualTrainingOrdersContent";
import { RetirementPointsContent } from "../../../../../components/RetirementPointsContent";
import { ReservePromotionSystemContent } from "../../../../../components/ReservePromotionSystemContent";
// Reserve & Mobilization - Mobilization/Activation
import { MobilizationOrdersContent } from "../../../../../components/MobilizationOrdersContent";
import { ADOSContent } from "../../../../../components/ADOSContent";
import { ADSWContent } from "../../../../../components/ADSWContent";
import { ADTContent } from "../../../../../components/ADTContent";
import { DemobilizationProcessingContent } from "../../../../../components/DemobilizationProcessingContent";
// Legal & Disciplinary - Administrative Actions
import { NJPArticle15Content } from "../../../../../components/NJPArticle15Content";
import { PunitiveLettersReprimandContent } from "../../../../../components/PunitiveLettersReprimandContent";
import { Page11CounselingContent } from "../../../../../components/Page11CounselingContent";
import { AdministrativeInvestigationsContent } from "../../../../../components/AdministrativeInvestigationsContent";
// Legal & Disciplinary - Legal Support
import { CourtMartialSupportContent } from "../../../../../components/CourtMartialSupportContent";
import { LegalAssistanceContent } from "../../../../../components/LegalAssistanceContent";
import { VWAPContent } from "../../../../../components/VWAPContent";
import { MilitaryProtectiveOrdersContent } from "../../../../../components/MilitaryProtectiveOrdersContent";
import { IGComplaintsContent } from "../../../../../components/IGComplaintsContent";
// Life Events
import { BuyingAHomeContent } from "../../../../../components/BuyingAHomeContent";
import { DeployingContent } from "../../../../../components/DeployingContent";
import { GettingMarriedContent } from "../../../../../components/GettingMarriedContent";
import { GettingOutEASContent } from "../../../../../components/GettingOutEASContent";
import { HavingABabyContent } from "../../../../../components/HavingABabyContent";
import { PCSMoveContent } from "../../../../../components/PCSMoveContent";
// Leaders - Accountability & Discipline
import { NJPAuthorityLevelsContent } from "../../../../../components/leaders/NJPAuthorityLevelsContent";
import { NJPRecommendationContent } from "../../../../../components/leaders/NJPRecommendationContent";
import { UADesertionReportingContent } from "../../../../../components/leaders/UADesertionReportingContent";
import { ADSEPOverviewContent } from "../../../../../components/leaders/ADSEPOverviewContent";
import { LegalHoldInvestigationsContent } from "../../../../../components/leaders/LegalHoldInvestigationsContent";
import { Article31bRightsContent } from "../../../../../components/leaders/Article31bRightsContent";
import { ProgressiveDisciplineContent } from "../../../../../components/leaders/ProgressiveDisciplineContent";
import { Page11vs6105DecisionGuideContent } from "../../../../../components/leaders/Page11vs6105DecisionGuideContent";
import { CounselingRefusalProceduresContent } from "../../../../../components/leaders/CounselingRefusalProceduresContent";
import { HazingHarassmentReportingContent } from "../../../../../components/leaders/HazingHarassmentReportingContent";
// Leaders - Awards & Recognition
import { WritingAwardRecommendationsContent } from "../../../../../components/leaders/WritingAwardRecommendationsContent";
import { CitationFormatRequirementsContent } from "../../../../../components/leaders/CitationFormatRequirementsContent";
import { CommonAwardErrorsContent } from "../../../../../components/leaders/CommonAwardErrorsContent";
import { IAPSSubmissionContent } from "../../../../../components/leaders/IAPSSubmissionContent";
import { AwardRoutingApprovalContent } from "../../../../../components/leaders/AwardRoutingApprovalContent";
import { AwardTimelineManagementContent } from "../../../../../components/leaders/AwardTimelineManagementContent";
import { AwardTroubleshootingContent } from "../../../../../components/leaders/AwardTroubleshootingContent";
// Leaders - Career Development
import { SupportingReenlistmentDecisionsContent } from "../../../../../components/leaders/SupportingReenlistmentDecisionsContent";
import { PMETrackingCompletionContent } from "../../../../../components/leaders/PMETrackingCompletionContent";
import { MeritoriousPromotionPreparationContent } from "../../../../../components/leaders/MeritoriousPromotionPreparationContent";
import { SpecialDutyAssignmentScreeningContent } from "../../../../../components/leaders/SpecialDutyAssignmentScreeningContent";
import { LateralMoveGuidanceContent } from "../../../../../components/leaders/LateralMoveGuidanceContent";
import { EnlistedCommissioningProgramsContent } from "../../../../../components/leaders/EnlistedCommissioningProgramsContent";
import { WarrantOfficerProgramSupportContent } from "../../../../../components/leaders/WarrantOfficerProgramSupportContent";
// Leaders - Counseling & Documentation
import { SixFunctionalAreasContent } from "../../../../../components/leaders/SixFunctionalAreasContent";
import { SMARTGoalsContent } from "../../../../../components/leaders/SMARTGoalsContent";
import { CounselingFundamentalsContent } from "../../../../../components/leaders/CounselingFundamentalsContent";
import { RequiredCounselingOccasionsContent } from "../../../../../components/leaders/RequiredCounselingOccasionsContent";
import { InitialCounselingSessionContent } from "../../../../../components/leaders/InitialCounselingSessionContent";
import { FollowOnCounselingSessionsContent } from "../../../../../components/leaders/FollowOnCounselingSessionsContent";
import { MarineLeaderNotebooksContent } from "../../../../../components/leaders/MarineLeaderNotebooksContent";
// Leaders - Deployment & Readiness
import { UPFRPOverviewContent } from "../../../../../components/leaders/UPFRPOverviewContent";
import { DeploymentTrainingEventsContent } from "../../../../../components/leaders/DeploymentTrainingEventsContent";
import { IndividualReadinessRequirementsContent } from "../../../../../components/leaders/IndividualReadinessRequirementsContent";
import { FamilyCarePlanRequirementsContent } from "../../../../../components/leaders/FamilyCarePlanRequirementsContent";
import { ObligatedServiceDeploymentContent } from "../../../../../components/leaders/ObligatedServiceDeploymentContent";
import { PhysicalFitnessReadinessContent } from "../../../../../components/leaders/PhysicalFitnessReadinessContent";
import { PreDeploymentChecklistContent } from "../../../../../components/leaders/PreDeploymentChecklistContent";
import { SupportingIAsAndTADContent } from "../../../../../components/leaders/SupportingIAsAndTADContent";
// Leaders - Performance Evaluation
import { JEPESOverviewContent } from "../../../../../components/leaders/JEPESOverviewContent";
import { JEPESReportingChainContent } from "../../../../../components/leaders/JEPESReportingChainContent";
import { JEPESReportingOccasionsContent } from "../../../../../components/leaders/JEPESReportingOccasionsContent";
import { JEPESCommandInputMetricsContent } from "../../../../../components/leaders/JEPESCommandInputMetricsContent";
import { NOTRECContent } from "../../../../../components/leaders/NOTRECContent";
import { JEPESObjectiveScoresContent } from "../../../../../components/leaders/JEPESObjectiveScoresContent";
import { JEPESDebriefingContent } from "../../../../../components/leaders/JEPESDebriefingContent";
import { FitnessReportsLeadersContent } from "../../../../../components/leaders/FitnessReportsLeadersContent";
import { NOTRECAppealProcessContent } from "../../../../../components/leaders/NOTRECAppealProcessContent";
import { BilletAccomplishmentsContent } from "../../../../../components/leaders/BilletAccomplishmentsContent";
import { JEPESCorrectiveProceduresContent } from "../../../../../components/leaders/JEPESCorrectiveProceduresContent";
// Leaders - Personnel Accountability
import { DailyAccountabilityFundamentalsContent } from "../../../../../components/leaders/DailyAccountabilityFundamentalsContent";
import { GainsLossesProcessingContent } from "../../../../../components/leaders/GainsLossesProcessingContent";
import { LeaveLibertyManagementContent } from "../../../../../components/leaders/LeaveLibertyManagementContent";
import { UAProceduresContent } from "../../../../../components/leaders/UAProceduresContent";
import { TADDetachmentTrackingContent } from "../../../../../components/leaders/TADDetachmentTrackingContent";
import { MusterFormationProceduresContent } from "../../../../../components/leaders/MusterFormationProceduresContent";
import { RecordKeepingDocumentationContent } from "../../../../../components/leaders/RecordKeepingDocumentationContent";
// Leaders - Administrative Systems
import { MCTFSOverviewContent } from "../../../../../components/leaders/MCTFSOverviewContent";
import { MOLNavigationContent } from "../../../../../components/leaders/MOLNavigationContent";
import { JEPESSystemNavigationContent } from "../../../../../components/leaders/JEPESSystemNavigationContent";
import { TFRSOverviewContent } from "../../../../../components/leaders/TFRSOverviewContent";
import { UnitDiaryReportingContent } from "../../../../../components/leaders/UnitDiaryReportingContent";
import { TrainingInformationSystemsContent } from "../../../../../components/leaders/TrainingInformationSystemsContent";
import { MCOQuickReferenceContent } from "../../../../../components/leaders/MCOQuickReferenceContent";
// Leaders - Conducting Investigations
import { ReviewConveningOrderContent } from "../../../../../components/leaders/ReviewConveningOrderContent";
import { ContactJudgeAdvocateContent } from "../../../../../components/leaders/ContactJudgeAdvocateContent";
import { CoordinateOtherInvestigationsContent } from "../../../../../components/leaders/CoordinateOtherInvestigationsContent";
import { PreliminaryInquiryIOContent } from "../../../../../components/leaders/PreliminaryInquiryIOContent";
import { CommandInvestigationIOContent } from "../../../../../components/leaders/CommandInvestigationIOContent";
import { LitigationReportIOContent } from "../../../../../components/leaders/LitigationReportIOContent";
import { CollectingEvidenceContent } from "../../../../../components/leaders/CollectingEvidenceContent";
import { InterviewingWitnessesContent } from "../../../../../components/leaders/InterviewingWitnessesContent";
import { StandardsOfProofIOContent } from "../../../../../components/leaders/StandardsOfProofIOContent";
import { InvestigationReportFormatIOContent } from "../../../../../components/leaders/InvestigationReportFormatIOContent";
import { LODMisconductDeterminationsContent } from "../../../../../components/leaders/LODMisconductDeterminationsContent";
import { DeathCaseProceduresIOContent } from "../../../../../components/leaders/DeathCaseProceduresIOContent";
import { CommonInvestigationMistakesContent } from "../../../../../components/leaders/CommonInvestigationMistakesContent";
// Commanders - Admin Investigations
import { PreliminaryInquiryContent } from "../../../../../components/commanders/investigations/PreliminaryInquiryContent";
import { CommandInvestigationsContent } from "../../../../../components/commanders/investigations/CommandInvestigationsContent";
import { LitigationReportInvestigationsContent } from "../../../../../components/commanders/investigations/LitigationReportInvestigationsContent";
import { CourtsBoardsInquiryContent } from "../../../../../components/commanders/investigations/CourtsBoardsInquiryContent";
import { ConveningOrdersContent } from "../../../../../components/commanders/investigations/ConveningOrdersContent";
import { StandardsOfProofContent } from "../../../../../components/commanders/investigations/StandardsOfProofContent";
import { WitnessProceduresContent } from "../../../../../components/commanders/investigations/WitnessProceduresContent";
import { InvestigationReportFormatContent } from "../../../../../components/commanders/investigations/InvestigationReportFormatContent";
import { LineOfDutyContent } from "../../../../../components/commanders/investigations/LineOfDutyContent";
import { DeathCaseProceduresContent } from "../../../../../components/commanders/investigations/DeathCaseProceduresContent";
import { InvestigationCoordinationContent } from "../../../../../components/commanders/investigations/InvestigationCoordinationContent";
// Commanders - Legal
import { NJPAuthorityContent } from "../../../../../components/commanders/NJPAuthorityContent";
import { PunishmentLimitsContent } from "../../../../../components/commanders/PunishmentLimitsContent";
import { NJPProcessContent } from "../../../../../components/commanders/NJPProcessContent";
import { NJPAppealsContent } from "../../../../../components/commanders/NJPAppealsContent";
import { SummaryCourtMartialContent } from "../../../../../components/commanders/SummaryCourtMartialContent";
import { SpecialCourtMartialContent } from "../../../../../components/commanders/SpecialCourtMartialContent";
import { GeneralCourtMartialContent } from "../../../../../components/commanders/GeneralCourtMartialContent";
import { DispositionOptionsContent } from "../../../../../components/commanders/DispositionOptionsContent";
import { AdminSepAuthorityContent } from "../../../../../components/commanders/AdminSepAuthorityContent";
import { CharacterizationOfServiceContent } from "../../../../../components/commanders/CharacterizationOfServiceContent";
import { ReligiousAccommodationContent } from "../../../../../components/commanders/ReligiousAccommodationContent";
import { RequestMastContent } from "../../../../../components/commanders/RequestMastContent";
import { NJPProceduresContent } from "../../../../../components/commanders/NJPProceduresContent";
import { SeparationBasesContent } from "../../../../../components/commanders/SeparationBasesContent";
import { ADSEPDueProcessContent } from "../../../../../components/commanders/ADSEPDueProcessContent";
// Commanders - Suicide Prevention & Force Preservation
import { SPPOAppointmentContent } from "../../../../../components/commanders/SPPOAppointmentContent";
import { ForcePreservationCouncilContent } from "../../../../../components/commanders/ForcePreservationCouncilContent";
import { CIRRASOversightContent } from "../../../../../components/commanders/CIRRASOversightContent";
import { CriticalStressorsContent } from "../../../../../components/commanders/CriticalStressorsContent";
import { LethalMeansSafetyContent } from "../../../../../components/commanders/LethalMeansSafetyContent";
import { PostventionContent } from "../../../../../components/commanders/PostventionContent";
import { MFLCProgramContent } from "../../../../../components/commanders/MFLCProgramContent";
import { ChaplainSupportContent } from "../../../../../components/commanders/ChaplainSupportContent";
import { COSCOscarContent } from "../../../../../components/commanders/COSCOscarContent";
// Commanders - Training & Readiness
import { DRRSMCOverviewContent } from "../../../../../components/commanders/DRRSMCOverviewContent";
import { METLDevelopmentContent } from "../../../../../components/commanders/METLDevelopmentContent";
import { CLevelAssessmentContent } from "../../../../../components/commanders/CLevelAssessmentContent";
import { ReadinessBoardContent } from "../../../../../components/commanders/ReadinessBoardContent";
import { TLevelReportingContent } from "../../../../../components/commanders/TLevelReportingContent";
import { PLevelReportingContent } from "../../../../../components/commanders/PLevelReportingContent";
import { SLevelReportingContent } from "../../../../../components/commanders/SLevelReportingContent";
import { RLevelReportingContent } from "../../../../../components/commanders/RLevelReportingContent";
import { METLAnnualReviewContent } from "../../../../../components/commanders/METLAnnualReviewContent";
// Commanders - Equal Opportunity
import { EOPolicyStatementContent } from "../../../../../components/commanders/EOPolicyStatementContent";
import { EORepresentativeContent } from "../../../../../components/commanders/EORepresentativeContent";
import { EOComplaintProcessContent } from "../../../../../components/commanders/EOComplaintProcessContent";
import { EOInvestigationContent } from "../../../../../components/commanders/EOInvestigationContent";
import { EOClimateAssessmentContent } from "../../../../../components/commanders/EOClimateAssessmentContent";
import { EORetaliationPreventionContent } from "../../../../../components/commanders/EORetaliationPreventionContent";
// Commanders - Family Readiness & Casualty Affairs
import { UPFRPCommandRolesContent } from "../../../../../components/commanders/UPFRPCommandRolesContent";
import { DRCOversightContent } from "../../../../../components/commanders/DRCOversightContent";
import { LIMDUCoordinatorContent } from "../../../../../components/commanders/LIMDUCoordinatorContent";
import { CACOOversightContent } from "../../../../../components/commanders/CACOOversightContent";
import { ITOAuthorityContent } from "../../../../../components/commanders/ITOAuthorityContent";
import { RCCReferralContent } from "../../../../../components/commanders/RCCReferralContent";
import { WWBenefitsContent } from "../../../../../components/commanders/WWBenefitsContent";
import { FAPOverviewContent } from "../../../../../components/commanders/FAPOverviewContent";
import { DomesticAbuseResponseContent } from "../../../../../components/commanders/DomesticAbuseResponseContent";
import { ChildAbuseResponseContent } from "../../../../../components/commanders/ChildAbuseResponseContent";
import { UPFRPSOPRequirementContent } from "../../../../../components/commanders/UPFRPSOPRequirementContent";
import { NOKNotificationContent } from "../../../../../components/commanders/NOKNotificationContent";
import { PCRReportingContent } from "../../../../../components/commanders/PCRReportingContent";
// Commanders - Fiscal & Property Accountability
import { FundControlTrainingContent } from "../../../../../components/commanders/FundControlTrainingContent";
import { BudgetExecutionContent } from "../../../../../components/commanders/BudgetExecutionContent";
import { StatusOfFundsContent } from "../../../../../components/commanders/StatusOfFundsContent";
import { ULOValidationContent } from "../../../../../components/commanders/ULOValidationContent";
import { SupplyOfficerAppointmentContent } from "../../../../../components/commanders/SupplyOfficerAppointmentContent";
import { AccountableOfficerContent } from "../../../../../components/commanders/AccountableOfficerContent";
import { UACPreventionContent } from "../../../../../components/commanders/UACPreventionContent";
import { GTCCOversightContent } from "../../../../../components/commanders/GTCCOversightContent";
import { CertificateOfReliefFiscalContent } from "../../../../../components/commanders/CertificateOfReliefFiscalContent";
// Commanders - Command Climate & Culture Programs
import { DEOCSRequirementsContent } from "../../../../../components/commanders/DEOCSRequirementsContent";
import { PACProgramOverviewContent } from "../../../../../components/commanders/PACProgramOverviewContent";
import { PACPolicyClimateContent } from "../../../../../components/commanders/PACPolicyClimateContent";
import { UPFRPSOPClimateContent } from "../../../../../components/commanders/UPFRPSOPClimateContent";
import { ClimateSurveysContent } from "../../../../../components/commanders/ClimateSurveysContent";
import { CommandTeamTrainingClimateContent } from "../../../../../components/commanders/CommandTeamTrainingClimateContent";
import { HazingPreventionContent } from "../../../../../components/commanders/HazingPreventionContent";
import { HarassmentResponseContent } from "../../../../../components/commanders/HarassmentResponseContent";
import { RetaliationPreventionContent } from "../../../../../components/commanders/RetaliationPreventionContent";
import { SafetyPolicyStatementContent } from "../../../../../components/commanders/SafetyPolicyStatementContent";
import { SAPRPolicyStatementContent } from "../../../../../components/commanders/SAPRPolicyStatementContent";
// Commanders - Safety & Risk Management
import { SafetyPolicyStatementDetailContent } from "../../../../../components/commanders/SafetyPolicyStatementDetailContent";
import { GroundSafetyContent } from "../../../../../components/commanders/GroundSafetyContent";
import { MotorVehicleSafetyContent } from "../../../../../components/commanders/MotorVehicleSafetyContent";
import { ORMIntegrationContent } from "../../../../../components/commanders/ORMIntegrationContent";
import { MishapReportingContent } from "../../../../../components/commanders/MishapReportingContent";
import { PreMishapDrillsContent } from "../../../../../components/commanders/PreMishapDrillsContent";
import { SafetyClimateSurveyDetailContent } from "../../../../../components/commanders/SafetyClimateSurveyDetailContent";
import { FlightScheduleApprovalContent } from "../../../../../components/commanders/FlightScheduleApprovalContent";
import { MishapInvestigationContent } from "../../../../../components/commanders/MishapInvestigationContent";
import { DOSSRelationshipContent } from "../../../../../components/commanders/DOSSRelationshipContent";
// Commanders - Substance Abuse & Urinalysis
import { InspectionTestingContent } from "../../../../../components/commanders/InspectionTestingContent";
import { SubstanceAdminActionsContent } from "../../../../../components/commanders/SubstanceAdminActionsContent";
import { UUCAppointmentContent } from "../../../../../components/commanders/UUCAppointmentContent";
import { TestingRequirementsContent } from "../../../../../components/commanders/TestingRequirementsContent";
import { PositiveResultProceduresContent } from "../../../../../components/commanders/PositiveResultProceduresContent";
import { TreatmentReferralContent } from "../../../../../components/commanders/TreatmentReferralContent";
// Commanders - SAPR
import { EightDayReportContent } from "../../../../../components/commanders/EightDayReportContent";
import { ExpeditedTransferContent } from "../../../../../components/commanders/ExpeditedTransferContent";
import { HRRTContent } from "../../../../../components/commanders/HRRTContent";
import { SAPRPolicyPostingContent } from "../../../../../components/commanders/SAPRPolicyPostingContent";
import { SAPRReportingTypesContent } from "../../../../../components/commanders/SAPRReportingTypesContent";
import { SARCCoordinationContent } from "../../../../../components/commanders/SARCCoordinationContent";
import { SAPRVAAppointmentContent } from "../../../../../components/commanders/SAPRVAAppointmentContent";
import { CMGParticipationContent } from "../../../../../components/commanders/CMGParticipationContent";
import { MPOSAPRContent } from "../../../../../components/commanders/MPOSAPRContent";
import { SAPRRetaliationContent } from "../../../../../components/commanders/SAPRRetaliationContent";
// Commanders - Inspector General & Inspections
import { CIPOverviewContent } from "../../../../../components/commanders/CIPOverviewContent";
import { CGIPPreparationContent } from "../../../../../components/commanders/CGIPPreparationContent";
import { IGMCFunctionalAreasContent } from "../../../../../components/commanders/IGMCFunctionalAreasContent";
import { POAMManagementContent } from "../../../../../components/commanders/POAMManagementContent";
import { InternalInspectionsContent } from "../../../../../components/commanders/InternalInspectionsContent";
import { SMATInspectionsContent } from "../../../../../components/commanders/SMATInspectionsContent";
import { FSMAOAnalysisContent } from "../../../../../components/commanders/FSMAOAnalysisContent";
import { PreInspectionPrepContent } from "../../../../../components/commanders/PreInspectionPrepContent";
import { CorrectiveActionTrackingContent } from "../../../../../components/commanders/CorrectiveActionTrackingContent";
// Commanders - Personnel Administration & Career Management
import { FitnessReportContent } from "../../../../../components/commanders/FitnessReportContent";
import { JEPESCommanderRoleContent } from "../../../../../components/commanders/JEPESCommanderRoleContent";
import { CounselingEntriesContent } from "../../../../../components/commanders/CounselingEntriesContent";
import { NotRecAuthorityContent } from "../../../../../components/commanders/NotRecAuthorityContent";
import { AdverseFitrepsContent } from "../../../../../components/commanders/AdverseFitrepsContent";
import { MeritoriousPromotionAuthorityContent } from "../../../../../components/commanders/MeritoriousPromotionAuthorityContent";
import { ReenlistmentAuthorityContent } from "../../../../../components/commanders/ReenlistmentAuthorityContent";
import { Page11CommanderContent } from "../../../../../components/commanders/Page11CommanderContent";
import { AdverseLettersContent } from "../../../../../components/commanders/AdverseLettersContent";
import { TransitionOversightContent } from "../../../../../components/commanders/TransitionOversightContent";
// Commanders - Public Affairs & Media Relations
import { MediaEngagementContent } from "../../../../../components/commanders/MediaEngagementContent";
import { ReleasableInformationContent } from "../../../../../components/commanders/ReleasableInformationContent";
import { CasualtyInformationReleaseContent } from "../../../../../components/commanders/CasualtyInformationReleaseContent";
import { SocialMediaPolicyContent } from "../../../../../components/commanders/SocialMediaPolicyContent";
import { CrisisCommunicationContent } from "../../../../../components/commanders/CrisisCommunicationContent";
import { OPSECPublicStatementsContent } from "../../../../../components/commanders/OPSECPublicStatementsContent";
import { ClimateMessagingContent } from "../../../../../components/commanders/ClimateMessagingContent";
import { AppealRightsContent } from "../../../../../components/commanders/AppealRightsContent";
import { ADSEPAuthorityContent } from "../../../../../components/commanders/ADSEPAuthorityContent";
// Commanders - Transition of Command
import {
  CornerstoneAttendanceContent,
  CertificateOfReliefContent,
  SafetyPolicyContent,
  StatusCommandLetterContent,
  AviationRefresherContent,
  CommandTeamTrainingContent,
  SARCBriefContent,
  METLReviewContent,
  FundControlContent,
  AviationSurveysContent,
  FAPTrainingContent,
  SAPRPolicyContent,
  UPFRPSOPContent,
  CommandPhilosophyContent,
  PACPolicyContent,
  SafetyClimateSurveyContent,
  DEOCSContent,
  AnnualDEOCSContent,
  AnnualSafetySurveyContent,
  AnnualTEReviewContent,
  AnnualInventoryContent,
  AnnualMETLReviewContent,
  StatusCommandLetterOutgoingContent,
  CertificateOfReliefOutgoingContent,
  RelinquishDEOCSContent,
} from "../../../../../components/commanders/transition";
import { MOLManagementContent } from "../../../../../components/commanders/MOLManagementContent";

type Params = { role: Role; section: string; item: string };

const BAS_DATA = {
  rates: { 2024: { enlisted: 460.25, officer: 316.98 }, 2025: { enlisted: 465.77, officer: 320.78 } },
  codes: [
    { fid: "BAS", type: "Entitlement", desc: "Cash allowance for meals." },
    { fid: "DN", type: "Deduction", desc: "Meal card / chow hall collection." },
    { fid: "BAS II", type: "Special", desc: "Double BAS in unique quarters situations." },
  ],
  references: [
    { title: "DoD FMR Vol 7A, Ch 25", desc: "Subsistence allowance policy.", url: "https://comptroller.defense.gov/Portals/45/documents/fmr/current/07a/07a_25.pdf", type: "Policy" },
    { title: "MCO 10110.47A", desc: "Marine Corps Order on BAS management.", url: "https://www.marines.mil/Portals/1/MCO%2010110.47A.pdf", type: "Order" },
    { title: "NAVMC 10522", desc: "Commuted Rations (BAS) action form.", url: "#", type: "Form" },
    { title: "DFAS BAS Overview", desc: "DFAS landing page for BAS.", url: "https://www.dfas.mil/militarymembers/payentitlements/bas/", type: "Website" },
  ],
};

const BAH_DATA = {
  examples: [
    { zip: "28547", location: "Camp Lejeune, NC", rates: { "E-4 without dependents": 1374, "E-4 with dependents": 1632, "E-7 with dependents": 2187 } },
    { zip: "92055", location: "Camp Pendleton, CA", rates: { "E-4 without dependents": 2445, "E-4 with dependents": 2946, "E-7 with dependents": 3618 } },
  ],
  references: [
    { title: "DFAS Pay Entitlements", desc: "BAH overview and pay entitlement guidance.", url: "https://www.dfas.mil/militarymembers/payentitlements/", type: "Website" },
    { title: "DoD BAH Calculator", desc: "Official BAH rates by ZIP and dependency.", url: "https://militarypay.defense.gov/Pay/Basic-Allowance-for-Housing/BAH-Calculator/", type: "Website" },
    { title: "DTMO BAH Rate Lookup", desc: "Official rates by ZIP, pay grade, and year.", url: "https://www.travel.dod.mil/Allowances/Basic-Allowance-for-Housing/BAH-Rate-Lookup/", type: "Website" },
  ],
};

const FSA_DATA = {
  references: [
    { title: "37 U.S.C. § 427", desc: "Statutory authority for Family Separation Allowance.", url: "https://www.law.cornell.edu/uscode/text/37/427", type: "Statute" },
    { title: "DoD FMR Vol. 7A, Ch. 27", desc: "Policy volume covering FSA types, eligibility, and computation.", url: "https://comptroller.defense.gov/Portals/45/documents/fmr/current/07a/07a_27.pdf", type: "Policy" },
    { title: "DoDI 1340.24", desc: "Instruction implementing special and incentive pays including FSA (unified categories).", url: "https://www.esd.whs.mil/Portals/54/Documents/DD/issuances/dodi/134024p.pdf", type: "Policy" },
    { title: "DD Form 1561", desc: "Statement to Substantiate Payment of Family Separation Allowance.", url: "https://www.esd.whs.mil/Portals/54/Documents/DD/forms/dd/dd1561.pdf", type: "Form" },
    { title: "DFAS Pay Entitlements", desc: "DFAS overview of pay entitlements and allowances.", url: "https://www.dfas.mil/militarymembers/payentitlements/", type: "Website" },
  ],
};

const HFP_DATA = {
  references: [
    { title: "37 U.S.C. § 310", desc: "Hostile Fire and Imminent Danger Pay statutory authority.", url: "https://www.law.cornell.edu/uscode/text/37/310", type: "Statute" },
    { title: "DoD FMR Vol. 7A, Ch. 10", desc: "Policy for Hostile Fire and Imminent Danger Pay.", url: "https://comptroller.defense.gov/Portals/45/documents/fmr/current/07a/07a_10.pdf", type: "Policy" },
    { title: "DoDI 1340.09", desc: "DoD Instruction for Special and Incentive Pays framework.", url: "https://www.esd.whs.mil/Directives/issuances/dodi/", type: "Policy" },
    { title: "DFAS Pay Entitlements", desc: "DFAS overview of pay entitlements including HFP.", url: "https://www.dfas.mil/militarymembers/payentitlements/", type: "Website" },
    { title: "Joint Publication 1-0", desc: "Personnel Support to Joint Operations; commander-level determination context.", url: "https://www.jcs.mil/Doctrine/Joint-Doctrine-Pubs/", type: "Policy" },
  ],
};

const IDP_DATA = {
  references: [
    { title: "37 U.S.C. § 351", desc: "Legal authority for Imminent Danger Pay.", url: "https://uscode.house.gov/", type: "Statute" },
    { title: "DoD FMR Vol. 7A, Ch. 10", desc: "IDP/HFP policy; Table 10‑1 area list and footnotes.", url: "https://comptroller.defense.gov/Portals/45/documents/fmr/current/07a/07a_10.pdf", type: "Policy" },
    { title: "IRS Publication 3", desc: "Combat Zone Tax Exclusion rules for Armed Forces.", url: "https://www.irs.gov/publications/p3", type: "Policy" },
    { title: "DFAS Pay Entitlements", desc: "DFAS overview including IDP/HFP.", url: "https://www.dfas.mil/militarymembers/payentitlements/", type: "Website" },
  ],
};

const SDP_DATA = {
  references: [
    { title: "10 U.S.C. § 1035", desc: "Statutory authority establishing the Savings Deposit Program.", url: "https://uscode.house.gov/", type: "Statute" },
    { title: "DoD FMR Vol. 7A, Ch. 44", desc: "Savings Deposit Program policy and computation rules.", url: "https://comptroller.defense.gov/Portals/45/documents/fmr/current/07a/07a_44.pdf", type: "Policy" },
    { title: "DFAS: DoD Savings Deposit Program", desc: "Official SDP guidance, eligibility, and deposit rules.", url: "https://www.dfas.mil/MilitaryMembers/sdp/", type: "Website" },
    { title: "IRS Publication 3", desc: "Interest is gross income; principal often CZTE‑protected.", url: "https://www.irs.gov/publications/p3", type: "Policy" },
  ],
};

const COLA_DATA = {
  examples: [
    { loc: "San Diego, CA", rate: "$200 - $400", type: "CONUS" },
    { loc: "Okinawa, Japan", rate: "$500 - $800", type: "OCONUS" },
    { loc: "New York City", rate: "$300 - $600", type: "CONUS" },
  ],
  history: [
    { month: "Q1 (Jan)", trend: "up", val: "+4%", reason: "Annual Cost Survey" },
    { month: "Q2 (Apr)", trend: "down", val: "-2%", reason: "Currency Exchange (Yen)" },
    { month: "Q3 (Jul)", trend: "up", val: "+5%", reason: "Local Inflation" },
    { month: "Q4 (Oct)", trend: "stable", val: "0%", reason: "Stable Index" },
  ],
  docs: [
    { name: "PCS Orders", detail: "Must show duty station in a COLA-eligible area." },
    { name: "NAVMC 10922", detail: "Required to receive the higher With Dependent rate." },
    { name: "DD Form 1561", detail: "Required for Geographic Bachelors (dependents living elsewhere)." },
  ],
  references: [
    { title: "DTMO COLA", desc: "Official COLA overview and lookup.", url: "https://www.travel.dod.mil/Allowances/Cost-of-Living-Allowance/", type: "Website" },
    { title: "DFAS Pay Entitlements", desc: "Overview of pay entitlements and allowances.", url: "https://www.dfas.mil/militarymembers/payentitlements/", type: "Website" },
    { title: "DoD Travel Allowances", desc: "Allowances portfolio including BAH, OHA, COLA.", url: "https://www.travel.dod.mil/Allowances/Cost-of-Living-Allowance/", type: "Website" },
  ],
};

const OHA_DATA = {
  factors: [
    { name: "Location (OCONUS)", detail: "Eligible only when stationed outside CONUS." },
    { name: "Actual Rent", detail: "Reimbursed up to the local ceiling for your grade." },
    { name: "Utility Allowance", detail: "Fixed monthly amount based on station." },
    { name: "Currency", detail: "Lease currency affects calculation and reimbursement." },
    { name: "Exchange Rate", detail: "Monthly DTMO rate adjusts your reimbursement." },
    { name: "Dependency Status", detail: "With vs Without Dependent rate changes ceilings." },
  ],
  authorized: [
    "Stationed OCONUS with a private lease",
    "Command‑authorized to live off‑base",
    "With dependents after submitting NAVMC 10922",
    "Dual‑military households when one claims With Dependent",
  ],
  notAuthorized: [
    "Assigned government quarters",
    "No valid lease or insufficient documentation",
    "Unauthorized off‑base housing without command memo",
  ],
  docs: [
    { name: "PCS Orders (OCONUS)", detail: "Show duty station and reporting dates." },
    { name: "Lease Agreement", detail: "Monthly rent amount, currency, address, landlord details." },
    { name: "Proof of Payment", detail: "Receipts or bank statement for rent." },
    { name: "NAVMC 10922", detail: "Needed to receive With Dependent rate." },
  ],
  steps: [
    { title: "Meet Housing Office", detail: "Get local guidance, ceilings, and lease best practices." },
    { title: "Sign Lease", detail: "Ensure rent and currency are clearly stated and keep copies." },
    { title: "Submit to S‑1/IPAC", detail: "Turn in lease, orders, and supporting docs for OHA input." },
    { title: "Monitor LES", detail: "Verify OHA and utility allowance; exchange rate may change monthly." },
  ],
  issues: [
    { title: "Checked in but don\'t see OHA", bullets: ["Verify station is OHA‑eligible", "Provide signed lease to S‑1/IPAC", "Allow 1–2 pay periods after submission"] },
    { title: "Wrong OHA amount", bullets: ["Exchange rate changed this month", "Rent exceeds ceiling and is capped", "Update address or rent changes with documentation"] },
    { title: "With Dependent rate missing", bullets: ["Submit NAVMC 10922", "Confirm dependents in DEERS", "Processing time is typically 5–10 business days"] },
  ],
  references: [
    { title: "DTMO OHA Rate Lookup", desc: "Official OHA ceilings and exchange rates.", url: "https://www.travel.dod.mil/Allowances/Overseas-Housing-Allowance/OHA-Rate-Lookup/", type: "Website" },
    { title: "DTMO OHA Overview", desc: "Program details and policy links.", url: "https://www.travel.dod.mil/Allowances/Overseas-Housing-Allowance/", type: "Website" },
    { title: "DFAS Pay Entitlements", desc: "Overview of allowances and pay codes.", url: "https://www.dfas.mil/militarymembers/payentitlements/", type: "Website" },
  ],
};

const HDIP_DATA = {
  factors: [
    { title: "Primary Duty", desc: "Assigned to demolition duty by competent orders." },
    { title: "Live Explosives", desc: "Qualifying duties must use live explosives; inert does not count." },
    { title: "Monthly Performance", desc: "Not continuous. Must perform duties each month to be paid." },
  ],
  rules: [
    { title: "$150 Flat Rate", desc: "Paid monthly in addition to basic pay and other allowances." },
    { title: "Combat Zone Tax", desc: "When earned in a designated combat zone, HDIP is tax‑free." },
    { title: "One HDIP", desc: "Receive only one type of HDIP per month." },
  ],
  docs: {
    start: [
      { name: "Competent Orders", detail: "PCS/PCA orders for EOD (MOS 2336) or CO memo for others." },
      { name: "MOS Qualification", detail: "Proof of MOS 2305/2336 or graduation certificate from EOD school." },
      { name: "Authority", detail: "If applicable, MARADMIN or command authority for billet." },
    ],
    maintenance: [
      { name: "Monthly Authorization Letter", detail: "CO letter certifying live demolition performed that month." },
      { name: "Unit Diary Entry", detail: "S‑1 processes monthly certification into MCTFS." },
    ],
  },
  qa: [
    { q: "EOD‑qualified but assigned to a desk job", a: "Not eligible. Must be assigned to an authorized billet to receive HDIP." },
    { q: "Didn&#39;t perform demo last month", a: "No HDIP for that month. Payment is performance‑based." },
    { q: "Qualified for Dive and Demo", a: "You must choose one. Only one $150 HDIP entitlement per month." },
    { q: "Trained with dummy rounds", a: "No payment. Performance requires live explosives to qualify for HDIP." },
  ],
  references: [
    { title: "DFAS Pay Entitlements", desc: "Overview of entitlements and special pays.", url: "https://www.dfas.mil/militarymembers/payentitlements/", type: "Website" },
    { title: "Special & Incentive Pays", desc: "DoD overview of special pays, including HDIP.", url: "https://militarypay.defense.gov/Pay/Special-and-Incentive-Pays/", type: "Website" },
    { title: "DoD FMR Vol 7A", desc: "Policy volume covering military pay and allowances.", url: "https://comptroller.defense.gov/FMR/Volume_7a.aspx", type: "Policy" },
  ],
};

const HDP_DATA = {
  intro: "Monthly special pay for unusually difficult living conditions or excessive physical hardship at designated stations or missions.",
  factors: [
    { title: "Type", desc: "HDP‑Location (station‑based) and HDP‑Mission (assignment‑based)." },
    { title: "Severity Levels", desc: "HDP‑Location levels: $50, $100, $150 per month based on conditions." },
    { title: "Designation", desc: "Location must be on HDP‑L list; missions must be certified by command." },
  ],
  rules: [
    { title: "HDP‑L vs HDP‑M", desc: "HDP‑L and HDP‑M are exclusive for the same period; the system pays the higher eligible rate." },
    { title: "HDP‑Tempo", desc: "May be paid concurrently when eligible; threshold is 220+ days away from home station in 365." },
    { title: "Total Monthly Cap", desc: "Combined HDP across types is capped at $1,500 per month." },
    { title: "TDY 30‑Day Rule", desc: "TDY to HDP‑L location becomes entitled after 30 consecutive days, paying retro to day 1." },
    { title: "Tax Status", desc: "Taxable in normal duty; excluded in designated combat zones." },
    { title: "Proration", desc: "Prorated for partial months based on days at location or on mission." },
  ],
  docs: {
    start: [
      { name: "HDP‑L: PCS Orders to HDP Location", detail: "Orders assigning to a station designated for HDP‑Location." },
      { name: "HDP‑L: Unit Diary Entry", detail: "S‑1 processes HDP‑L in MCTFS; payment begins after check‑in." },
      { name: "HDP‑L: Government Quarters Status", detail: "Housing assignment may reduce HDP‑L at some locations." },
      { name: "HDP‑M: Commanding Officer Orders", detail: "Written orders assigning to a qualifying hardship mission with duration." },
      { name: "HDP‑M: CO Certification Memo", detail: "Memo certifying mission hardship and rate; many designated missions pay $150 flat." },
      { name: "HDP‑M: Unit Diary Entry", detail: "S‑1 processes HDP‑M start with effective date and rate." },
    ],
    maintenance: [
      { name: "HDP‑L: Continued Assignment", detail: "No monthly recertification; continues while stationed at HDP location." },
      { name: "HDP‑M: Periodic Recertification", detail: "Extended missions may require periodic CO recertification." },
    ],
    stop: [
      { name: "PCS Orders (HDP‑L)", detail: "Transfer from HDP location; HDP‑L terminates on departure." },
      { name: "Mission Completion (HDP‑M)", detail: "End of mission; CO notification; HDP‑M terminates on mission end date." },
      { name: "Unit Diary Stop", detail: "S‑1 processes termination with effective date." },
    ],
  },
  steps: [
    { title: "Receive Orders", detail: "PCS to HDP‑L location or orders to HDP‑M mission." },
    { title: "Check In / Assignment", detail: "Report to unit or commence mission per orders." },
    { title: "Certification", detail: "For HDP‑M, CO certifies hardship conditions and rate." },
    { title: "Unit Diary Start", detail: "S‑1 starts HDP with effective date; HDP‑L auto‑recognized by station." },
    { title: "LES Appearance", detail: "Shows as HDP‑L or HDP‑M within 1–2 pay periods." },
  ],
  qa: [
    { q: "Overseas but no HDP", a: "Not all OCONUS stations qualify. Verify the official HDP‑L list." },
    { q: "Lower than expected amount", a: "Confirm location’s level and whether government quarters reduce HDP‑L." },
    { q: "TDY to HDP‑L location", a: "Entitled after 30 consecutive days; pays retroactively to day 1 starting on day 31." },
    { q: "Qualify for both HDP‑L and HDP‑M", a: "You receive only one HDP; the system pays the higher rate." },
    { q: "HDP stopped mid‑tour", a: "Check for location removal, quarters change, or admin error; contact S‑1." },
  ],
  references: [
    { title: "Defense.gov Hardship Duty Pay", desc: "Official overview of HDP types and rates.", url: "https://militarypay.defense.gov/Pay/Special-and-Incentive-Pays/", type: "Website" },
    { title: "DoD FMR Vol 7A, Ch. 17", desc: "Hardship Duty Pay policy including HDP‑Tempo.", url: "https://comptroller.defense.gov/Portals/45/documents/fmr/current/07a/07a_17.pdf", type: "Policy" },
    { title: "37 U.S.C. § 305", desc: "Statutory authority for Hardship Duty Pay.", url: "https://uscode.house.gov/", type: "Statute" },
    { title: "HDP‑Location Designations", desc: "USD(P&R)/SecDef annual designation list.", url: "https://militarypay.defense.gov/Pay/Special-and-Incentive-Pays/", type: "Memo" },
    { title: "DFAS Pay Entitlements", desc: "DFAS overview of special pays including HDP.", url: "https://www.dfas.mil/militarymembers/payentitlements/", type: "Website" },
  ],
  tempo: {
    intro: "Compensates for excessive time away from home station due to high operational tempo.",
    rate: "$495/month ($16.50/day)",
    rules: [
      { title: "220‑Day Threshold", desc: "Eligible once away from home station exceeds 220 days in the previous 365." },
      { title: "Daily Proration", desc: "Pays $16.50 for each qualifying day past the threshold." },
      { title: "Orders Based", desc: "Deployment, exercises, and ordered absences count; personal leave does not." },
    ],
    checklist: [
      { item: "Count days away using orders and vouchers" },
      { item: "Start payment on day 221 at $16.50/day" },
      { item: "Verify LES shows HDP‑T" },
      { item: "Retain documentation for audits" },
    ],
    scenarios: [
      { name: "Fleet Deployment", counts: true },
      { name: "ITX / 29 Palms field exercise", counts: true },
      { name: "Annual Leave", counts: false },
      { name: "Medical transit from qualifying mission", counts: true },
    ],
  },
};

const SDAP_DATA = {
  intro: "Monthly incentive pay for enlisted members assigned to designated special duty assignments that are extremely difficult, involve unusual responsibility, or require exceptional technical competence.",
  factors: [
    { title: "Assignment Level", desc: "Designated SDAP level 1–6 drives the monthly rate." },
    { title: "Technical Expertise", desc: "Specialized skills or certifications required for the billet." },
    { title: "Responsibility", desc: "Duties exceed normal scope for grade and MOS." },
    { title: "Difficulty", desc: "Challenging assignment conditions and expectations." },
    { title: "Mission Criticality", desc: "Billets essential to mission success and readiness." },
    { title: "Availability", desc: "Shortage of qualified personnel may affect designation." },
  ],
  rules: [
    { title: "Enlisted Only", desc: "SDAP applies to enlisted personnel; officers are not eligible." },
    { title: "Authorized Billet", desc: "Must be assigned to a billet on the current SDAP authorization list." },
    { title: "BIC‑Driven Entitlement", desc: "Triggered by MCTFS Billet Identification Code. CO must certify the Marine is actually performing SDA duties; non‑performance in an SDA‑coded BIC is improper." },
    { title: "90‑Day Rule", desc: "SDAP continues during TDY, hospitalization, or authorized leave for up to 90 days. Terminate on the 91st consecutive day away from the SDA billet." },
    { title: "One SDAP", desc: "Only one SDAP payment per month; the higher eligible rate applies." },
    { title: "Rate Variations", desc: "Marine Corps uses monthly installment variations for SDA billets (e.g., Recruiters/DI may shift between Levels 4–5 based on role)." },
    { title: "Tax", desc: "Taxable in normal duty; excluded when earned in a designated combat zone." },
    { title: "Assignment Based", desc: "MOS alone does not qualify; assignment to the billet is required." },
    { title: "Authorization Changes", desc: "Billets may be added or removed based on reviews and policy updates." },
  ],
  levels: [
    { level: 1, amount: 75 },
    { level: 2, amount: 150 },
    { level: 3, amount: 225 },
    { level: 4, amount: 300 },
    { level: 5, amount: 375 },
    { level: 6, amount: 450 },
  ],
  docs: {
    start: [
      { name: "Orders to SDAP Billet", detail: "PCS or special orders assigning to an authorized SDAP position." },
      { name: "SDAP Authorization", detail: "Current MARADMIN or regulation listing the billet and level." },
      { name: "Qualifications", detail: "Evidence of MOS, rank, training, or other required credentials." },
      { name: "Unit Diary Start", detail: "S‑1 processes start in MCTFS with SDAP level and effective date." },
    ],
    stop: [
      { name: "Termination Orders", detail: "PCS or relief from SDAP duties with effective date." },
      { name: "Unit Diary Stop", detail: "S‑1 processes stop in MCTFS with termination date." },
    ],
  },
  steps: [
    { title: "Receive Orders", detail: "Assignment to an SDAP‑authorized billet per competent orders." },
    { title: "Check In", detail: "Report to unit and commence the special duty assignment." },
    { title: "Verify Authorization", detail: "Confirm billet appears on current SDAP authorization list and level." },
    { title: "Start in MCTFS", detail: "S‑1 inputs start action with level and effective date." },
    { title: "LES Appearance", detail: "SDAP shows within 1–2 pay periods after processing." },
  ],
  qa: [
    { q: "Assigned to recruiter duty but SDAP hasn’t started", a: "Verify orders show an SDAP‑authorized billet, confirm current authorization list, and ensure S‑1 processed the start." },
    { q: "SDAP amount doesn’t match expectations", a: "Confirm the assignment’s designated SDAP level and consult the current rate table." },
    { q: "SDAP stopped during TDY", a: "Extended TDY away from duties may suspend payment; resume when returning to the billet." },
    { q: "Drill Instructor not receiving SDAP", a: "Confirm assignment to an SDAP‑authorized DI billet and submit supporting documentation to S‑1." },
    { q: "Assignment removed from list", a: "SDAP authorizations change periodically; payment terminates when billets are removed." },
    { q: "Two SDAP billets at once", a: "Only one payment is authorized; typically the higher eligible rate applies." },
    { q: "SDAP stopped mid‑tour", a: "Verify continued performance, authorization status, and MCTFS entries; contact S‑1." },
    { q: "Officer assigned to recruiter duty", a: "Officers are not eligible for SDAP; check other special pays instead." },
    { q: "I’m an 8002 JTAC and not receiving SDAP", a: "SDAP is assignment‑based. You must be filling an SDAP‑coded BIC on the T/O. JTAC skill alone does not entitle SDAP unless the billet is authorized." },
  ],
  references: [
    { title: "37 U.S.C. § 352", desc: "Statutory authority for Assignment Pay (SDAP)", url: "https://uscode.house.gov/", type: "Statute" },
    { title: "DoD FMR Vol 7A, Ch 8", desc: "Special Duty Assignment Pay (SDAP)", url: "https://comptroller.defense.gov/Portals/45/documents/fmr/current/07a/07a_08.pdf", type: "Policy" },
    { title: "MCO 7220.12R", desc: "Marine Corps SDAP Program", url: "https://www.marines.mil/News/Publications/MCPEL/Electronic-Library-Display/Article/899377/mco-722012r/", type: "Order" },
    { title: "Current FY MARADMIN (e.g., 231/24)", desc: "Authorized SDAP billets and BICs", url: "https://www.marines.mil/News/Messages/", type: "Announcement" },
    { title: "DFAS Pay Entitlements", desc: "Overview of special pays and entitlements.", url: "https://www.dfas.mil/militarymembers/payentitlements/", type: "Website" },
    { title: "Special & Incentive Pays", desc: "DoD overview of special pays including SDAP.", url: "https://militarypay.defense.gov/Pay/Special-and-Incentive-Pays/", type: "Website" },
  ],
};

const DIVE_DATA = {
  factors: [
    { title: "Primary Duty", desc: "Assigned to diving duty by competent orders." },
    { title: "Medical Clearance", desc: "Must maintain a current diving physical; pay stops if expired." },
    { title: "Performance", desc: "Meet minimum diving operations requirements per policy." },
  ],
  rules: [
    { title: "$150 Flat Rate", desc: "Paid monthly, prorated for partial months on orders." },
    { title: "Tax Status", desc: "Taxable in CONUS; non‑taxable in designated combat zones." },
    { title: "One HDIP", desc: "Cannot stack with other HDIP types in the same month." },
  ],
  docs: {
    start: [
      { name: "Written Orders", detail: "CO orders specifying diving duty as primary assignment." },
      { name: "Dive Qualification", detail: "Graduation certificate and current certifications." },
      { name: "Medical Clearance", detail: "Current diving physical and clearance from medical authority." },
    ],
    stop: [
      { name: "Termination Orders", detail: "Memo documenting end of diving assignment." },
      { name: "Medical Decertification", detail: "Documentation of permanent diving disqualification." },
    ],
  },
  qa: [
    { q: "Dive school grad but in a desk job", a: "Not eligible. Must be in a designated diving billet with orders." },
    { q: "Diving physical expired", a: "Pay stops the day clearance expires. Resume only after re‑qualification." },
    { q: "Temporarily injured (no misconduct)", a: "May continue to receive HDIP up to 6 months, potentially 12, per policy." },
    { q: "Qualified for Dive and Jump pay", a: "Only one $150 HDIP per month is generally paid. Choose one." },
  ],
  references: [
    { title: "Special & Incentive Pays", desc: "DoD overview of special pays including HDIP.", url: "https://militarypay.defense.gov/Pay/Special-and-Incentive-Pays/", type: "Website" },
    { title: "DFAS Pay Entitlements", desc: "Overview of entitlements and special pays.", url: "https://www.dfas.mil/militarymembers/payentitlements/", type: "Website" },
    { title: "DoD FMR Vol 7A", desc: "Policy volume covering military pay and allowances.", url: "https://comptroller.defense.gov/FMR/Volume_7a.aspx", type: "Policy" },
  ],
};

const STRESS_DATA = {
  factors: [
    { title: "Human Test Subject", desc: "Required by competent orders to perform duty as a human test subject in approved protocols." },
    { title: "Research vs Operations", desc: "Applies to research and development; routine operational decompression or training does not qualify." },
    { title: "Performance Based", desc: "Authorized only for months where experimental stress duty is actually performed." },
  ],
  types: [
    { title: "Acceleration", desc: "Testing G‑forces and rapid speed changes using experimental devices." },
    { title: "Thermal Stress", desc: "Testing effects of extreme heat or cold on the human body." },
    { title: "Low Pressure", desc: "Altitude chamber testing for high‑altitude/low‑pressure environments." },
    { title: "High Pressure", desc: "Hyperbaric or recompression chamber protocols for research or treatment." },
  ],
  rules: [
    { title: "$150 Flat Rate", desc: "Paid monthly in addition to basic pay; performance‑based." },
    { title: "One Payment Per Month", desc: "Only one HDIP may be received per month, even if multiple experiment types are performed." },
    { title: "Non‑Qualifying Duties", desc: "Operational decompression, patient treatment, maintenance, and training/proficiency tests do not qualify." },
  ],
  docs: {
    start: [
      { name: "Experimental Orders", detail: "Written orders from an authorized commander specifying the stress duty type." },
      { name: "Protocol Approval", detail: "Documentation of participation in an approved research/evaluation protocol." },
      { name: "Medical Clearance", detail: "Specialized medical clearance for high‑risk human subject testing." },
    ],
    maintenance: [
      { name: "Performance Log", detail: "Facility record verifying participation on specific test dates." },
      { name: "Unit Diary Entry", detail: "S‑1 administrative action to trigger the $150 monthly payment." },
    ],
  },
  qa: [
    { q: "Diver using the chamber but no pay", a: "Routine surface decompression after a normal dive is operational and does not qualify for Experimental Stress HDIP." },
    { q: "Did acceleration and thermal tests in one month", a: "Only one $150 payment is authorized per month regardless of types performed." },
    { q: "Training to be a chamber operator", a: "Instructional or trainee status generally does not qualify; must be the test subject or designated observer in a protocol." },
    { q: "Protocol ended mid‑month", a: "Pay may be prorated (1/30 per day) based on orders duration and participation dates." },
  ],
  references: [
    { title: "DoD Instruction 1340.09", desc: "Policy guidance for Special and Incentive Pays, including experimental stress duty.", url: "https://www.esd.whs.mil/Directives/issuances/dodi/", type: "Policy" },
    { title: "DoD FMR Vol 7A, Ch 11", desc: "Hazardous Duty Incentive Pays policy volume.", url: "https://comptroller.defense.gov/Portals/45/documents/fmr/current/07a/07a_11.pdf", type: "Policy" },
    { title: "Special & Incentive Pays", desc: "DoD overview of special pays, including HDIP.", url: "https://militarypay.defense.gov/Pay/Special-and-Incentive-Pays/", type: "Website" },
    { title: "DFAS Pay Entitlements", desc: "Overview of entitlements and special pays.", url: "https://www.dfas.mil/militarymembers/payentitlements/", type: "Website" },
  ],
};

const FDHD_DATA = {
  factors: [
    { title: "FDHD Billet", desc: "You must be assigned to a designated Flight Deck Hazardous Duty (FDHD) billet per orders." },
    { title: "Certified Ship", desc: "Ship must be flight-deck certified by the CNO to launch/land aircraft." },
    { title: "Performance Rule", desc: "Requires 4 days of flight ops participation (or class-specific equivalent) per month." },
  ],
  rules: [
    { title: "$150 Flat Rate", desc: "Monthly special pay added to basic pay. Prorated if starting/ending mid-month." },
    { title: "Tax Status", desc: "Non-taxable only if received while in a designated combat zone." },
    { title: "No Stacking", desc: "Cannot receive FDHDIP if receiving another HDIP (Jump/Dive/Demo) for the same period." },
  ],
  docs: {
    start: [
      { name: "FDHD Billet Orders", detail: "PCS/Assignment orders specifying frequent and regular flight deck participation." },
      { name: "Participation Record", detail: "Command-tracked flight deck log or roster verifying your presence during ops." },
      { name: "Unit Diary Entry", detail: "S-1 administrative action to link your billet and orders to the pay system." },
    ],
    stop: [
      { name: "Termination Orders", detail: "PCS orders or reassignment to a non-FDHD division/billet." },
      { name: "Revocation Memo", detail: "Orders revoking FDHD status due to medical or administrative relief." },
    ],
  },
  qa: [
    { q: "I work on the deck but don't get paid.", a: "Simply working on the deck isn't enough. You must be in a designated FDHD billet (per OPNAVINST 7220.4) to be eligible." },
    { q: "Ship has been in port for 2 months.", a: "FDHDIP stops if you cannot meet the 4-day performance requirement due to lack of flight operations. It resumes when ops resume." },
    { q: "I was on watch below decks during ops.", a: "Time on watch below decks does not count. You must be physically present at your assigned station on the flight deck." },
    { q: "I got injured during flight ops.", a: "If injured during duty (not misconduct), FDHDIP can continue for up to 6 months while you recover and are unable to perform." },
  ],
  references: [
    { title: "OPNAVINST 7220.4", desc: "Flight Deck Hazardous Duty policy guidance.", url: "https://www.secnav.navy.mil/doni/manuals-opnav.aspx", type: "Policy" },
    { title: "DoD FMR Vol 7A Ch 11", desc: "Hazardous Duty Incentive Pays policy volume.", url: "https://comptroller.defense.gov/Portals/45/documents/fmr/current/07a/07a_11.pdf", type: "Policy" },
    { title: "Special & Incentive Pays", desc: "DoD overview of special pays, including FDHDIP.", url: "https://militarypay.defense.gov/Pay/Special-and-Incentive-Pays/", type: "Website" },
    { title: "DFAS Pay Entitlements", desc: "Overview of entitlements and special pays.", url: "https://www.dfas.mil/militarymembers/payentitlements/", type: "Website" },
  ],
};

const PARACHUTE_DATA = {
  factors: [
    { title: "Jump Billet", desc: "Assigned by competent orders to a designated parachute duty billet." },
    { title: "Qualification & Currency", desc: "Hold Basic/MFF qualification and maintain currency per policy." },
    { title: "Monthly Performance", desc: "Perform qualifying parachute operations and command certification monthly." },
  ],
  rules: [
    { title: "Standard Rate", desc: "$150 per month for parachute duty." },
    { title: "MFF/HALO Rate", desc: "$225 per month for Military Free Fall (HALO)." },
    { title: "One HDIP", desc: "Only one type of HDIP may be received per month." },
  ],
  docs: {
    start: [
      { name: "Parachute Duty Orders", detail: "Written orders assigning parachute duty as primary duty (Basic or MFF/HALO)." },
      { name: "Qualification Certificate", detail: "Proof of Basic/MFF qualification and training completion." },
      { name: "Jump Log / Currency", detail: "Record of recent jumps and currency status." },
    ],
    stop: [
      { name: "Termination Orders", detail: "PCS or reassignment out of parachute duty billet." },
      { name: "Decertification", detail: "Loss of qualification or currency beyond policy limits." },
    ],
  },
  qa: [
    { q: "Qualified but not in a jump billet", a: "Not eligible. You must be assigned to a designated parachute duty billet and meet monthly requirements." },
    { q: "No jumps this month due to operations", a: "If unable to perform for reasons not due to misconduct, pay may continue for a limited period per policy." },
    { q: "Receiving another HDIP", a: "Only one HDIP may be paid per month. Choose the applicable duty type." },
  ],
  references: [
    { title: "DoD FMR Vol 7A, Ch 11", desc: "Hazardous Duty Incentive Pays policy volume.", url: "https://comptroller.defense.gov/Portals/45/documents/fmr/current/07a/07a_11.pdf", type: "Policy" },
    { title: "Special & Incentive Pays", desc: "DoD overview, including parachute duty pay and MFF.", url: "https://militarypay.defense.gov/Pay/Special-and-Incentive-Pays/", type: "Website" },
    { title: "DFAS Pay Entitlements", desc: "Overview of entitlements and special pays.", url: "https://www.dfas.mil/militarymembers/payentitlements/", type: "Website" },
  ],
};

const VBSS_DATA = {
  factors: [
    { title: "Competent Orders", desc: "Required by competent orders to perform VBSS duty." },
    { title: "VBSS Billet", desc: "Assigned to a billet requiring frequent and regular VBSS participation." },
    { title: "Frequent Participation", desc: "Regular member of VBSS team with frequent operations." },
    { title: "Maritime Interdiction", desc: "Operations aboard vessels in support of maritime interdiction." },
  ],
  rules: [
    { title: "Monthly Rate", desc: "$150 per month for VBSS duty." },
    { title: "Tax", desc: "Not taxable when earned in a designated combat zone." },
    { title: "Multiple HDIP", desc: "May be combined with other HDIP types when independently qualified, up to three per month." },
  ],
  docs: {
    start: [
      { name: "Orders to VBSS Assignment", detail: "PCS or assignment orders to a designated VBSS billet." },
      { name: "VBSS Qualification", detail: "Completion of VBSS course, team qualification, and required weapons/small boat quals." },
      { name: "Team Assignment", detail: "Documentation of assignment to VBSS team; roster or billet designation." },
      { name: "Unit Diary Start", detail: "Diary action to start VBSS HDIP in MCTFS; effective on VBSS order date." },
      { name: "Participation Log", detail: "VBSS operations log or training currency record tracked by command." },
    ],
    stop: [
      { name: "Termination Orders", detail: "PCS or reassignment to a non‑VBSS billet; relief from VBSS duties." },
      { name: "Unit Diary Stop", detail: "Diary action to stop VBSS HDIP with effective termination date." },
      { name: "Loss of Qualification", detail: "CO memorandum documenting loss of VBSS qualification or medical disqualification." },
    ],
  },
  qa: [
    { q: "Assigned to ship but not receiving HDIP", a: "Must be assigned to a designated VBSS billet and be a regular team member; verify billet designation and orders." },
    { q: "Single VBSS op this deployment — where is HDIP?", a: "Occasional participation does not qualify. Eligibility requires frequent and regular participation as a VBSS team member." },
    { q: "VBSS training expired and HDIP stopped", a: "Maintain current VBSS qualifications and weapons/small boat currency. HDIP resumes when qualifications are renewed." },
    { q: "No operations for months", a: "Training and readiness exercises count. Extended periods without operations or training may affect eligibility per command." },
    { q: "Pier‑side inspections", a: "Not VBSS. VBSS requires boarding vessels at sea during maritime interdiction operations." },
    { q: "VBSS and Dive HDIP simultaneously?", a: "Yes, if independently qualified and assigned to both billets with performance; maximum three HDIP payments per month." },
  ],
  references: [
    { title: "DoD Instruction 1340.09", desc: "Special and Incentive Pays policy, including hazardous duties.", url: "https://www.esd.whs.mil/Directives/issuances/dodi/", type: "Policy" },
    { title: "DoD FMR Vol 7A, Ch 11", desc: "Hazardous Duty Incentive Pays policy volume.", url: "https://comptroller.defense.gov/Portals/45/documents/fmr/current/07a/07a_11.pdf", type: "Policy" },
    { title: "Special & Incentive Pays", desc: "Official overview and rates for hazardous duty pays.", url: "https://militarypay.defense.gov/Pay/Special-and-Incentive-Pays/", type: "Website" },
    { title: "DFAS Pay Entitlements", desc: "DFAS overview for pay entitlements and HDIP.", url: "https://www.dfas.mil/militarymembers/payentitlements/", type: "Website" },
  ],
};

const SO_DATA = {
  factors: [
    { title: "Polar Ground Ops", desc: "Ski‑equipped aircraft ground operations in Antarctica or the Arctic Ice‑Pack under competent orders." },
    { title: "Polar Environment", desc: "Extreme cold, remote locations, operations on snow/ice surfaces; not established runways." },
    { title: "WMDCS Team (RC)", desc: "Reserve Component only; assignment to designated 22‑member civil support team with CBRNE qualifications." },
    { title: "Performance & Currency", desc: "Documented participation in operations/training; maintain required qualifications and readiness." },
  ],
  rules: [
    { title: "Monthly Rate", desc: "$150 per month per qualifying duty." },
    { title: "Tax", desc: "Not taxable when earned in a designated combat zone." },
    { title: "Multiple HDIP", desc: "May be combined with other HDIP types when independently qualified, up to three per month." },
  ],
  docs: {
    polarStart: [
      { name: "Orders to Polar Operations", detail: "PCS/TDY orders to Antarctica or Arctic Ice‑Pack operations specifying ski‑equipped aircraft ground operations." },
      { name: "Polar Training & Qualification", detail: "Cold weather survival, polar procedures; ski‑equipped aircraft qualifications if applicable." },
      { name: "Unit Diary Start", detail: "Diary action to start HDIP in MCTFS; link orders to pay system with effective date." },
      { name: "Operations Log", detail: "Log verifying ground operations participation on snow/ice; command‑tracked." },
    ],
    polarStop: [
      { name: "Orders Terminating Polar Ops", detail: "Completion of deployment/TDY or PCS away from polar operations." },
      { name: "Unit Diary Stop", detail: "Diary action to stop HDIP with documented termination date." },
    ],
    wmdcsStart: [
      { name: "Orders to WMDCS Team", detail: "Reserve Component orders assigning to designated WMDCS team unit and position." },
      { name: "WMDCS Training & CBRNE", detail: "Completion of team training, CBRNE qualifications, and specialty certifications." },
      { name: "Unit Diary Start", detail: "Diary action to start WMDCS HDIP in MCTFS; effective date documented." },
      { name: "Participation Records", detail: "Team training/readiness exercises and drill participation records for RC members." },
    ],
    wmdcsStop: [
      { name: "Relief from WMDCS Team", detail: "Orders relieving from team assignment or transfer out of designated unit." },
      { name: "Unit Diary Stop", detail: "Diary action to stop HDIP with effective termination date." },
      { name: "Loss of Qualification", detail: "CO memo documenting loss of required qualifications or medical disqualification." },
    ],
  },
  qa: [
    { q: "Flew over Antarctica but no ground ops — eligible?", a: "No. Polar HDIP requires ground operations with ski‑equipped aircraft on snow/ice; overflight alone does not qualify." },
    { q: "Stationed at McMurdo — automatically eligible?", a: "Not automatically. Eligibility depends on performing ski‑equipped aircraft ground operations on snow/ice." },
    { q: "Runway landings count?", a: "Established groomed runways generally do not qualify. Unprepared snow/ice with ski‑equipped aircraft is required; confirm with S‑1." },
    { q: "Active duty in CBRNE — WMDCS HDIP?", a: "No. WMDCS HDIP applies only to Reserve Component members assigned to designated WMDCS teams." },
    { q: "National Guard CBRNE without HDIP", a: "Verify assignment to a designated WMDCS team. Not all CBRNE units are WMDCS teams." },
    { q: "RC payment seems low", a: "RC payments may be prorated for drill periods; full monthly rate applies when on active duty orders 30+ days." },
    { q: "Combine Polar and Parachute HDIP?", a: "Yes, if independently qualified and performing both; maximum three HDIP payments per month." },
  ],
  references: [
    { title: "DoD Instruction 1340.09", desc: "Special and Incentive Pays policy, including hazardous duties.", url: "https://www.esd.whs.mil/Directives/issuances/dodi/", type: "Policy" },
    { title: "DoD FMR Vol 7A, Ch 11", desc: "Hazardous Duty Incentive Pays policy volume.", url: "https://comptroller.defense.gov/Portals/45/documents/fmr/current/07a/07a_11.pdf", type: "Policy" },
    { title: "Special & Incentive Pays", desc: "Official overview and rates for hazardous duty pays.", url: "https://militarypay.defense.gov/Pay/Special-and-Incentive-Pays/", type: "Website" },
    { title: "DFAS Pay Entitlements", desc: "DFAS overview for pay entitlements and HDIP.", url: "https://www.dfas.mil/militarymembers/payentitlements/", type: "Website" },
  ],
};

const TM_DATA = {
  intro: "Hazardous Duty Incentive Pay for handling toxic substances as a primary duty assignment. Applies to toxic fuels/propellants, toxic pesticides, dangerous viruses/bacteria (laboratory duty), and chemical munitions.",
  categories: [
    { title: "Toxic Fuels or Propellants", desc: "Servicing or testing aircraft/missile systems using highly toxic fuels/propellants as a primary duty." },
    { title: "Toxic Pesticides", desc: "Preventive medicine, pest management, or entomology assignments involving highly toxic pesticides for 30+ consecutive days." },
    { title: "Dangerous Viruses or Bacteria (Laboratory)", desc: "Laboratory duty with live dangerous agents; BSL-2/3/4 as applicable; not inactivated specimens." },
    { title: "Chemical Munitions", desc: "Handling munitions containing toxic chemical agents; distinct from standard explosives/demolition duty." },
  ],
  factors: [
    { title: "Primary Duty", desc: "Toxic materials work is the primary duty; regular and frequent involvement is required." },
    { title: "Competent Orders", desc: "Orders designate toxic materials duty and specific category." },
    { title: "Performance", desc: "Actual performance documented; meets policy standards." },
    { title: "Medical Clearance", desc: "Baseline and current medical clearance required; monitoring may be ongoing." },
    { title: "Pesticides 30-Day Minimum", desc: "Assigned to qualifying function for 30 consecutive days or more." },
    { title: "Multiple HDIPs", desc: "Independently qualify for multiple categories; maximum three HDIP payments per month in total." },
  ],
  rules: [
    { title: "$150 Monthly Rate", desc: "$150 per month per qualifying toxic materials duty." },
    { title: "Tax Status", desc: "Taxable in normal duty; non-taxable in designated combat zones." },
    { title: "Full Month vs Prorated", desc: "Full month when on orders entire month; otherwise prorated at 1/30 per qualifying day." },
    { title: "Reserve Component", desc: "RC members on active duty receive HDIP; payments may be prorated based on days of participation." },
    { title: "Potential vs Actual Exposure", desc: "Authorization based on potential for accidental/inadvertent exposure; not proof of actual exposure." },
    { title: "Safety Compliance", desc: "Follow protocols and PPE; loss of medical clearance suspends or terminates HDIP." },
  ],
  docs: {
    start: [
      { name: "Orders to Toxic Materials Duty", detail: "Written orders assigning toxic materials duty; specify category and primary duty." },
      { name: "Qualification Documentation", detail: "Training/certifications for toxic handling, lab biosafety, or chemical munitions." },
      { name: "Medical Clearance", detail: "Medical examination and baseline evaluation documented prior to duty." },
      { name: "Assignment to Qualifying Function", detail: "Pesticides: preventive medicine/pest management/entomology assignment for 30+ consecutive days." },
      { name: "Unit Diary Entry", detail: "S‑1 processes MCTFS HDIP start; effective date documented." },
      { name: "Performance Documentation", detail: "Logs/records verifying toxic materials duty performance maintained by command." },
    ],
    stop: [
      { name: "Orders Terminating Duty", detail: "Relief from toxic materials duty or PCS to non‑toxic assignment." },
      { name: "Unit Diary Stop", detail: "MCTFS action to stop HDIP with effective termination date." },
      { name: "Medical Disqualification", detail: "Temporary or permanent disqualification documented by medical authority." },
      { name: "Reassignment Memo", detail: "Orders or memo documenting reassignment to duties not involving toxic materials." },
    ],
  },
  qa: [
    { q: "Occasional refueling but no toxic fuels HDIP", a: "Must be primary duty with regular and frequent servicing or testing using highly toxic fuels; occasional exposure does not qualify." },
    { q: "Pest management without HDIP", a: "Requires assignment for 30 consecutive days with frequent exposure to highly toxic pesticides; shorter assignments do not qualify." },
    { q: "Medical lab work but no virus/bacteria HDIP", a: "Must work with live dangerous agents as a primary duty; inactivated or non-dangerous specimens do not qualify." },
    { q: "Exposed to toxic fuel — health concerns?", a: "Receiving HDIP does not indicate actual exposure occurred. Report any suspected exposure to medical and follow protocols." },
    { q: "Handle ammunition/explosives — chemical munitions HDIP?", a: "Standard explosives are demolition duty. Chemical munitions HDIP applies only when handling munitions with toxic chemical agents." },
    { q: "Pest management for 3 weeks — when does HDIP start?", a: "Begins after completing 30 consecutive days; payment may be processed retroactive once the threshold is met." },
    { q: "HDIP stopped after reassignment", a: "Correct when new duties do not involve toxic materials. HDIP resumes upon reassignment to qualifying duties." },
    { q: "Receive HDIP for fuels and chemical munitions?", a: "Yes, if independently qualified and both are primary duties, subject to the maximum of three HDIPs total per month." },
    { q: "Medical clearance expired", a: "Cannot perform toxic materials duties without current clearance; HDIP stops until renewed and duties resume." },
  ],
  references: [
    { title: "DoD Instruction 1340.09", desc: "Policy guidance for Special and Incentive Pays, including toxic materials duty.", url: "https://www.esd.whs.mil/Directives/issuances/dodi/", type: "Policy" },
    { title: "DoD FMR Vol 7A, Ch 11", desc: "Hazardous Duty Incentive Pays policy volume.", url: "https://comptroller.defense.gov/Portals/45/documents/fmr/current/07a/07a_11.pdf", type: "Policy" },
    { title: "Special & Incentive Pays", desc: "Official overview and rates for special pays.", url: "https://militarypay.defense.gov/Pay/Special-and-Incentive-Pays/", type: "Website" },
    { title: "DFAS Pay Entitlements", desc: "DFAS overview for pay entitlements and HDIP.", url: "https://www.dfas.mil/militarymembers/payentitlements/", type: "Website" },
  ],
};

const ACIP_DATA = {
  intro: "Monthly incentive pay for aeronautically designated officers performing operational flying duty. Post‑FY17 policy uses ASED‑based gates to determine Continuous vs Conditional pay, with YAS‑based monthly rates.",
  factors: [
    { title: "Aeronautical Designation", desc: "Officer is aeronautically designated and awarded wings." },
    { title: "Operational Flying Duty", desc: "Assigned to a DIFOT flying billet under current orders." },
    { title: "Current Flight Orders", desc: "Valid flight orders issued and on file." },
    { title: "Medical Qualification", desc: "Current flight physical and medical clearance maintained." },
    { title: "ASED & YAS", desc: "Gates measured from ASED; monthly rates vary by YAS." },
  ],
  rules: [
    { title: "Continuous vs Conditional", desc: "Meeting gates grants continuous pay in non‑flying tours; missing gates requires monthly flight to be paid." },
    { title: "Gate Checks", desc: "ASED‑based gates at 12 and 18 years determine continuous eligibility windows." },
    { title: "4.0 Hour Minimum", desc: "Conditional status requires 4.0 flight hours per month; banking allowed." },
    { title: "Tax in CZTE", desc: "ACIP is excluded from tax when earned in designated combat zones." },
    { title: "Stop Conditions", desc: "ACIP stops when flight orders terminate or medical disqualification occurs." },
  ],
  systems: [
    { title: "Legacy System (Pre‑FY17)", points: ["Based on checks at 12 and 18 YAS", "Required meeting flight hour milestones or pay became conditional/stopped"] },
    { title: "Modern System (Post‑FY17)", points: ["Established by FY17 NDAA", "Simplified tiers; increased Operational Flying requirements for continuous pay"] },
  ],
  milestones: [
    { checkpoint: "At 12 Years (ASED)", requirement: "At least 6 Years of Operational Flying", result: "Continuous Pay through Year 18" },
    { checkpoint: "At 18 Years (ASED)", requirement: "At least 9 Years of Operational Flying", result: "Continuous Pay through Year 22" },
    { checkpoint: "At 18 Years (ASED)", requirement: "At least 11 Years of Operational Flying", result: "Continuous Pay through Year 25" },
  ],
  docs: {
    start: [
      { name: "Aeronautical Designation", detail: "Orders or certificate awarding wings and aeronautical status." },
      { name: "Flight Physical", detail: "Current flight physical and medical clearance documentation." },
      { name: "Flight Orders", detail: "Command-issued flight orders assigning operational flying duty." },
      { name: "Billet Assignment", detail: "Assignment to operational flying billet or platform." },
      { name: "Unit Diary Start", detail: "Administrative action to start ACIP in MCTFS." },
    ],
    stop: [
      { name: "Terminate Flight Orders", detail: "Orders or memo terminating flight status or reassignment." },
      { name: "Medical Disqualification", detail: "Documentation of temporary or permanent flight disqualification." },
      { name: "Non-Flying Assignment", detail: "Reassignment to non-operational duties exceeding policy limits." },
      { name: "Unit Diary Stop", detail: "Administrative action to stop ACIP with effective date." },
    ],
  },
  definitions: [
    { term: "ASED", desc: "Aviation Service Entry Date; usually the date you first reported to flight school. Starts the 12/18‑year gate clock." },
    { term: "YAS", desc: "Years of Aviation Service since ASED; determines monthly ACIP rate tiers." },
    { term: "DIFOT", desc: "Duty Involving Flying Operational Training; assigned to a flying slot." },
    { term: "DIFDEN", desc: "Duty Involving Flying Denied; in a ground slot. ACIP continues only if you have met your gates or meet conditional requirements." },
  ],
  conditional: [
    { title: "Conditional Pay Requirements", bullets: ["Minimum 4.0 flight hours per month while conditional", "Bank excess hours to cover short months (up to 5‑month look‑back)", "Failing to meet monthly minimum suspends ACIP until requirements are met"] },
  ],
  qa: [
    { q: "Missed a gate — now what?", a: "Your pay becomes conditional. You must fly 4.0 hours per month or use banked hours to receive ACIP." },
    { q: "Banking hours rules", a: "You can bank hours above 4.0 to cover a low‑flight month, using a 5‑month look‑back window." },
    { q: "Wrong ACIP rate on LES", a: "Rates depend on YAS tiers. Verify ASED and YAS with admin to ensure correct gate/rate." },
    { q: "DIFDEN tour eligibility", a: "If you met gates, ACIP is continuous during DIFDEN tours. If not, conditional requirements apply." },
    { q: "ACIP with HDIP", a: "ACIP may be received in addition to HDIP when independently eligible and assigned." },
    { q: "Flight orders expired", a: "Renew orders and medical. ACIP stops when orders or medical qualifications lapse and resumes when restored." },
    { q: "Combat zone tax status", a: "ACIP earned in designated combat zones is excluded from federal income tax." },
  ],
  references: [
    { title: "DoD FMR Vol. 7A, Ch 22 §2.0 (AvIP)", desc: "Aviation Incentive Pay policy and gate framework.", url: "https://comptroller.defense.gov/FMR/Volume_7a.aspx", type: "Policy" },
    { title: "MCO 7220.52F", desc: "Marine Corps Aviation Incentive Pay Program.", url: "https://www.marines.mil/News/Publications/MCPEL/Electronic-Library-Display/Article/899378/mco-722052f/", type: "Order" },
    { title: "37 U.S.C. § 334", desc: "Statutory authority for aviation incentive pay structures.", url: "https://uscode.house.gov/", type: "Statute" },
    { title: "Special & Incentive Pays", desc: "Official overview and rates.", url: "https://militarypay.defense.gov/Pay/Special-and-Incentive-Pays/", type: "Website" },
    { title: "DFAS Pay Entitlements", desc: "Overview of entitlements and incentive pays.", url: "https://www.dfas.mil/militarymembers/payentitlements/", type: "Website" },
  ],
};

const FLPP_DATA = {
  intro: "Monthly bonus for service members who demonstrate foreign language proficiency. FLPB pays based on proficiency and language priority, with duty vs investment distinctions.",
  factors: [
    { title: "Language Proficiency", desc: "DLPT or approved tests in listening and reading; OPI speaking may be required for top tiers." },
    { title: "Language Priority", desc: "Categories (A/B/C) or strategic priority determine investment vs required rules." },
    { title: "Duty vs Investment", desc: "Required/Enduring languages need a coded billet; Investment/Priority languages may pay regardless of billet." },
    { title: "Multiple Languages", desc: "Payment authorized for up to two languages simultaneously (combined cap applies)." },
  ],
  tiers: [
    { title: "1/1–2/2", desc: "Entry/professional working proficiency; rates vary by priority." },
    { title: "2+/2+–3/3", desc: "Professional/dominant proficiency; higher rates for priority languages." },
    { title: "3/3/3 (OPI)", desc: "Top tier requires OPI speaking where applicable." },
  ],
  rules: [
    { title: "$1,000 Monthly Cap", desc: "Maximum $1,000/month for a single language and combined across languages." },
    { title: "$12,000 Annual Cap", desc: "Maximum $12,000/year total regardless of number of languages." },
    { title: "OPI Requirement", desc: "OPI speaking may be required to reach top tiers or for languages lacking L/R tests." },
    { title: "Investment vs Required", desc: "Investment (priority) languages may pay without billet; required languages need language‑coded billets." },
    { title: "Tax in CZTE", desc: "Excluded from tax when earned in designated combat zones." },
    { title: "Certification Validity", desc: "DLPT/OPI must be within validity period; retest before expiration to maintain payment." },
  ],
  docs: {
    start: [
      { name: "NAVMC 11324 / DA 330", detail: "Official score report documenting DLPT and OPI (if required)." },
      { name: "Annual Certification Memo", detail: "States Language Required billet vs Language Independent (priority)." },
      { name: "MCTFS/DEERS LIC Update", detail: "Update Language Identification Code in personnel systems prior to pay action." },
      { name: "Unit Diary Entry", detail: "Administrative action to start FLPB in MCTFS with effective date." },
    ],
    maintenance: [
      { name: "Current DLPT/OPI", detail: "Retest before expiration; submit updated scores to admin." },
      { name: "Annual CO Recertification", detail: "Command annually certifies language status (required vs independent)." },
    ],
    stop: [
      { name: "Score Expiration", detail: "FLPB terminates when certification expires; resumes after new test." },
      { name: "CO Termination Memo", detail: "Language no longer qualifies (e.g., billet change for required languages)." },
      { name: "Unit Diary Stop", detail: "Administrative action to stop FLPB with effective date." },
    ],
  },
  steps: [
    { title: "DLPT/OPI Testing", detail: "Complete required tests for listening, reading, and speaking (OPI)." },
    { title: "Meet Minimums", detail: "Meet proficiency thresholds; verify language priority/category." },
    { title: "Certification Memo", detail: "CO memo noting Required (coded billet) vs Investment (priority/independent)." },
    { title: "Update LIC", detail: "Ensure LIC is updated in MCTFS/DEERS before submission." },
    { title: "Unit Diary Start", detail: "Admin starts FLPB and calculates payment within statutory caps." },
    { title: "LES Verification", detail: "Appears within 1–2 pay periods under Foreign Language Proficiency Bonus." },
  ],
  qa: [
    { q: "Passed DLPT but not in a coded billet", a: "Required/Enduring languages need language‑coded billets; Investment languages may pay without billet." },
    { q: "DLPT/OPI expired and FLPB stopped", a: "Retest and submit new certifications; payment resumes from new test date." },
    { q: "3/3 on L/R but missing OPI", a: "Top tiers may require OPI; schedule OPI to reach higher payment bands." },
    { q: "Paid more than $1,000 this month", a: "Statutory cap is $1,000/month total; adjust expectations and verify categories." },
    { q: "Language categories vs SLL", a: "Many services use A/B/C categories; confirm your service’s current prioritization system." },
    { q: "Add a second language", a: "Submit scores and memo for the second language; combined monthly cap still applies." },
    { q: "Amount doesn't match bands", a: "Verify L/R/S scores and priority category; contact IPAC with documentation." },
    { q: "Wrong dialect test", a: "Retest in the required dialect; previous scores may not qualify." },
    { q: "Annual memo overdue", a: "Request memo update; payment may suspend until recertified." },
    { q: "Failed retest", a: "Payment terminates if minimums are not met; prepare and retest to requalify." },
  ],
  references: [
    { title: "DoDI 1340.27", desc: "Military Foreign Language Skill Proficiency Bonuses.", url: "https://www.esd.whs.mil/Directives/issuances/dodi/", type: "Policy" },
    { title: "DoD FMR Vol 7A, Ch 19", desc: "Foreign Language Proficiency Bonus policy and rates framework.", url: "https://comptroller.defense.gov/FMR/Volume_7a.aspx", type: "Policy" },
    { title: "MCO 7220.52", desc: "Marine Corps Foreign Language Proficiency Bonus program.", url: "https://www.marines.mil/News/Publications/MCPEL/Electronic-Library-Display/Article/899378/mco-722052f/", type: "Order" },
    { title: "37 U.S.C. § 353(b)", desc: "Statutory monthly and annual caps for FLPB.", url: "https://uscode.house.gov/", type: "Statute" },
    { title: "Special & Incentive Pays", desc: "DoD overview including language bonus and pay policies.", url: "https://militarypay.defense.gov/Pay/Special-and-Incentive-Pays/", type: "Website" },
    { title: "DFAS Pay Entitlements", desc: "DFAS overview of pay entitlements and language pay program.", url: "https://www.dfas.mil/militarymembers/payentitlements/", type: "Website" },
  ],
};

// Travel & Transportation Data Objects
const PCS_ORDERS_DATA = {
  references: [
    { title: "MOL (Marine Online)", desc: "Access PCS orders through OBI module.", url: "https://mol.tfs.usmc.mil/", type: "Website", isQuickLink: true },
    { title: "move.mil (DPS)", desc: "Register HHG shipments and track moves.", url: "https://www.move.mil/", type: "Website", isQuickLink: true },
    { title: "Plan My Move", desc: "Personalized PCS checklist and timeline.", url: "https://planmymove.militaryonesource.mil/", type: "Website", isQuickLink: true },
    { title: "Military OneSource PCS", desc: "PCS resources and support.", url: "https://www.militaryonesource.mil/", type: "Website" },
    { title: "HQMC PCS Move Resources", desc: "Official Marine Corps PCS guidance.", url: "https://www.iandl.marines.mil/Divisions/Logistics-Division-LP/Logistics-Distribution-Policy-Branch-LPD/PCS-Move-Resources/", type: "Website" },
    { title: "IRR Program", desc: "Information, Referral, and Relocation support.", url: "https://www.usmc-mccs.org/marine-family-support/information-referral-and-relocation", type: "Website" },
    { title: "MCO 1754.10B (IRR Program)", desc: "Mandatory PCS Workshop requirements.", url: "https://www.marines.mil/News/Publications/MCPEL/Electronic-Library-Display/Article/900673/mco-175410b/", type: "Policy" },
    { title: "MCO 1320.11H (Sponsorship)", desc: "Sponsor assignment requirements.", url: "https://www.marines.mil/News/Publications/MCPEL/Electronic-Library-Display/Article/980074/mco-132011h-wadmin-ch-1/", type: "Policy" },
  ],
};

const HHG_DATA = {
  weightAllowances: [
    { rank: "O-6 and above", withDependents: 18000, withoutDependents: 18000 },
    { rank: "O-5 / W-5", withDependents: 17500, withoutDependents: 16000 },
    { rank: "O-4 / W-4", withDependents: 17000, withoutDependents: 14000 },
    { rank: "O-3 / W-3", withDependents: 14500, withoutDependents: 13000 },
    { rank: "O-2 / W-2", withDependents: 13500, withoutDependents: 12500 },
    { rank: "O-1 / W-1", withDependents: 12000, withoutDependents: 10000 },
    { rank: "E-9", withDependents: 15000, withoutDependents: 13000 },
    { rank: "E-8", withDependents: 14000, withoutDependents: 12000 },
    { rank: "E-7", withDependents: 13000, withoutDependents: 11000 },
    { rank: "E-6", withDependents: 11000, withoutDependents: 8000 },
    { rank: "E-5", withDependents: 9000, withoutDependents: 7000 },
    { rank: "E-4", withDependents: 8000, withoutDependents: 7000 },
    { rank: "E-3 and below", withDependents: 8000, withoutDependents: 5000 },
  ],
  references: [
    { title: "MCO 4600.39", desc: "Marine Corps Personal Property Manual (19 Aug 2016).", url: "https://www.marines.mil/News/Publications/ELECTRONIC-LIBRARY/Electronic-Library-Display/Article/900116/mco-460039/", type: "Policy" },
    { title: "MARADMIN 208/25", desc: "FY25 Personal Property Peak Season guidance.", url: "https://www.marines.mil/News/Messages/Messages-Display/Article/3769591/fy25-personal-property-peak-season-guidance/", type: "Policy" },
    { title: "JTR Chapter 5 Part D", desc: "Joint Travel Regulations - HHG shipping entitlements.", url: "https://www.defensetravel.dod.mil/Docs/perdiem/JTR.pdf", type: "Policy" },
    { title: "DPS Landing Page", desc: "Defense Personal Property System - Start your move here.", url: "https://dps.move.mil", type: "Website" },
    { title: "Move.mil", desc: "Official DoD moving portal for HHG shipments.", url: "https://www.move.mil/", type: "Website" },
  ],
};

const PPM_DATA = {
  references: [
    { title: "JTR Chapter 5", desc: "Permanent Duty Travel - PPM entitlements, GCC calculation, and reimbursement.", url: "https://www.defensetravel.dod.mil/Docs/perdiem/JTR.pdf", type: "Policy" },
    { title: "MCO 4600.39", desc: "Marine Corps Personal Property Manual - PPM procedures and requirements.", url: "https://www.marines.mil/News/Publications/MCPEL/Electronic-Library-Display/Article/1561175/mco-460039-w-ch-1/", type: "Policy" },
    { title: "DTR Part IV Appendix K-1", desc: "Defense Transportation Regulation - PPM weight and expense documentation.", url: "https://www.ustranscom.mil/dtr/part-iv/dtr-part-4-app-k-1.pdf", type: "Policy" },
    { title: "MilMove Portal", desc: "Create PPM shipments, request AOA, and submit claims.", url: "https://my.move.mil/", type: "Website" },
    { title: "LOGCOM TVCB", desc: "Travel Voucher Certification Branch - PPM claim processing.", url: "https://www.logcom.marines.mil/G8/TVCB/", type: "Website" },
  ],
};

const PCS_STORAGE_DATA = {
  references: [
    { title: "JTR Chapter 5", desc: "Storage entitlements - SIT, NTS time limits, and extension requirements.", url: "https://www.defensetravel.dod.mil/Docs/perdiem/JTR.pdf", type: "Policy" },
    { title: "MCO 4600.39", desc: "Marine Corps Personal Property Manual - storage procedures.", url: "https://www.marines.mil/News/Publications/ELECTRONIC-LIBRARY/Electronic-Library-Display/Article/900116/mco-460039/", type: "Policy" },
    { title: "DTR Part IV Ch 406", desc: "Defense Transportation Regulation - storage program administration.", url: "https://www.ustranscom.mil/dtr/part-iv/dtr-part-4-406.pdf", type: "Policy" },
    { title: "MilMove Portal", desc: "DPS/MilMove for storage requests and tracking.", url: "https://www.move.mil/", type: "Website" },
    { title: "PCSmyPOV.com", desc: "POV shipping and storage for OCONUS moves.", url: "https://www.pcsmypov.com/", type: "Website" },
    { title: "Military OneSource", desc: "Moving and storage resources and guidance.", url: "https://www.militaryonesource.mil/moving-pcs/", type: "Website" },
  ],
};

const DLA_DATA = {
  rates: [
    // 2026 Primary DLA Rates (Effective January 1, 2026)
    { rank: "O-10 to O-7", withDependents: 6385.58, withoutDependents: 5187.33 },
    { rank: "O-6", withDependents: 5749.63, withoutDependents: 4758.96 },
    { rank: "O-5", withDependents: 5542.06, withoutDependents: 4583.51 },
    { rank: "O-4", withDependents: 4885.43, withoutDependents: 4247.61 },
    { rank: "O-3", withDependents: 4041.88, withoutDependents: 3404.11 },
    { rank: "O-2", withDependents: 3451.28, withoutDependents: 2700.31 },
    { rank: "O-1", withDependents: 3085.23, withoutDependents: 2273.82 },
    { rank: "O-3E", withDependents: 4343.80, withoutDependents: 3675.83 },
    { rank: "O-2E", withDependents: 3919.27, withoutDependents: 3124.87 },
    { rank: "O-1E", withDependents: 3621.10, withoutDependents: 2687.09 },
    { rank: "W-5", withDependents: 4715.58, withoutDependents: 4315.51 },
    { rank: "W-4", withDependents: 4323.11, withoutDependents: 3832.45 },
    { rank: "W-3", withDependents: 3960.78, withoutDependents: 3221.08 },
    { rank: "W-2", withDependents: 3643.75, withoutDependents: 2860.70 },
    { rank: "W-1", withDependents: 3151.31, withoutDependents: 2394.55 },
    { rank: "E-9", withDependents: 4149.51, withoutDependents: 3147.54 },
    { rank: "E-8", withDependents: 3824.94, withoutDependents: 2888.97 },
    { rank: "E-7", withDependents: 3551.31, withoutDependents: 2468.19 },
    { rank: "E-6", withDependents: 3548.02, withoutDependents: 2389.42 },
    { rank: "E-5", withDependents: 3548.02, withoutDependents: 2389.42 },
    { rank: "E-4", withDependents: 3548.02, withoutDependents: 2389.42 },
    { rank: "E-3", withDependents: 3548.02, withoutDependents: 2355.48 },
    { rank: "E-2", withDependents: 3548.02, withoutDependents: 2025.26 },
    { rank: "E-1", withDependents: 3548.02, withoutDependents: 1870.58 },
  ],
  secondaryRates: [
    // 2026 Secondary DLA Rates (for orders amended/canceled/revoked per JTR 050507)
    { rank: "O-10 to O-7", withDependents: 5108.46, withoutDependents: 4149.86 },
    { rank: "O-6", withDependents: 4599.70, withoutDependents: 3807.17 },
    { rank: "O-5", withDependents: 4433.65, withoutDependents: 3666.81 },
    { rank: "O-4", withDependents: 3908.34, withoutDependents: 3398.09 },
    { rank: "O-3", withDependents: 3233.50, withoutDependents: 2723.29 },
    { rank: "O-2", withDependents: 2761.02, withoutDependents: 2160.25 },
    { rank: "O-1", withDependents: 2468.18, withoutDependents: 1819.06 },
    { rank: "O-3E", withDependents: 3475.04, withoutDependents: 2940.66 },
    { rank: "O-2E", withDependents: 3135.42, withoutDependents: 2499.90 },
    { rank: "O-1E", withDependents: 2896.88, withoutDependents: 2149.67 },
    { rank: "W-5", withDependents: 3772.46, withoutDependents: 3452.41 },
    { rank: "W-4", withDependents: 3458.49, withoutDependents: 3065.96 },
    { rank: "W-3", withDependents: 3168.62, withoutDependents: 2576.86 },
    { rank: "W-2", withDependents: 2915.00, withoutDependents: 2288.56 },
    { rank: "W-1", withDependents: 2521.05, withoutDependents: 1915.64 },
    { rank: "E-9", withDependents: 3319.61, withoutDependents: 2518.03 },
    { rank: "E-8", withDependents: 3059.95, withoutDependents: 2311.18 },
    { rank: "E-7", withDependents: 2841.05, withoutDependents: 1974.55 },
    { rank: "E-6", withDependents: 2838.42, withoutDependents: 1911.54 },
    { rank: "E-5", withDependents: 2838.42, withoutDependents: 1911.54 },
    { rank: "E-4", withDependents: 2838.42, withoutDependents: 1911.54 },
    { rank: "E-3", withDependents: 2838.42, withoutDependents: 1884.38 },
    { rank: "E-2", withDependents: 2838.42, withoutDependents: 1620.21 },
    { rank: "E-1", withDependents: 2838.42, withoutDependents: 1496.46 },
  ],
  references: [
    { title: "JTR Chapter 5 Section 0505", desc: "DLA entitlement, eligibility, and fiscal year limitations.", url: "https://media.defense.gov/2022/Jan/04/2002917147/-1/-1/0/JTR.PDF", type: "Policy" },
    { title: "MCO 1000.6", desc: "Marine Corps assignment and travel policy.", url: "https://www.marines.mil/News/Publications/ELECTRONIC-LIBRARY/Electronic-Library-Display/Article/899526/mco-10006/", type: "Policy" },
    { title: "37 U.S.C. 477", desc: "Statutory authority for DLA payment.", url: "https://www.law.cornell.edu/uscode/text/37/477", type: "Policy" },
    { title: "DTMO DLA Rate Lookup", desc: "Current DLA rates by grade and dependency status.", url: "https://www.travel.dod.mil/Travel-Transportation-Rates/Dislocation-Allowance/", type: "Website" },
    { title: "2026 DLA Rate Table (PDF)", desc: "Official DLA rates effective 1 January 2026.", url: "https://www.travel.dod.mil/Portals/119/Documents/DLA/DLA-2026-01-01.pdf", type: "Website" },
    { title: "DLA Overview Video", desc: "Pay and Entitlements: Dislocation Allowance (DLA).", url: "https://youtu.be/zugweOHq56k", type: "Video" },
  ],
};

const TLE_DATA = {
  reimbursementRates: [
    { persons: "Member only or 1 dependent", percentage: "65%" },
    { persons: "Member + 1 dependent or 2 dependents only", percentage: "100%" },
    { persons: "Each additional dependent age 12+", percentage: "Add 35%" },
    { persons: "Each additional dependent under 12", percentage: "Add 25%" },
  ],
  references: [
    { title: "DFAS TLE Information", desc: "Official TLE reimbursement guidance and procedures.", url: "https://www.dfas.mil/MilitaryMembers/travelpay/armypcs/tle/", type: "Website", isQuickLink: true },
    { title: "GSA Per Diem Rates", desc: "Locality rates used for TLE calculations.", url: "https://www.gsa.gov/travel/plan-book/per-diem-rates", type: "Website", isQuickLink: true },
    { title: "JTR Chapter 5 (TLE Section)", desc: "Official policy for Temporary Lodging Expense.", url: "https://www.travel.dod.mil/Policy-Regulations/Joint-Travel-Regulations/", type: "Policy" },
    { title: "TLE FAQs", desc: "Frequently asked questions about TLE.", url: "https://www.travel.dod.mil/Support/ALL-FAQs/Article/3174593/temporary-lodging-expenses/", type: "Website" },
    { title: "TLE Extension Locations", desc: "Approved locations for TLE extensions.", url: "https://www.dfas.mil/Portals/98/Documents/Military%20Members/travelpay/Locations%20with%20Approved%20TLE%20Extensions.pdf", type: "Policy", isQuickLink: true },
    { title: "Military OneSource TLE Overview", desc: "TLE guidance from Military OneSource.", url: "https://www.militaryonesource.mil/benefits/temporary-lodging-expense/", type: "Website" },
  ],
};

const VEHICLE_DATA = {
  references: [
    { title: "PCSmyPOV Portal", desc: "Schedule appointments, track vehicle, locate VPCs.", url: "https://www.pcsmypov.com/", type: "Website", isQuickLink: true },
    { title: "Military OneSource POV Info", desc: "POV shipment and storage guidance.", url: "https://www.militaryonesource.mil/resources/external/pcsmypov/", type: "Website" },
    { title: "DTR Part IV - POV Shipment", desc: "Official POV shipment regulations.", url: "https://www.ustranscom.mil/dtr/part-iv/dtr_part_iv_att_A-k_3.pdf", type: "Policy" },
    { title: "DTR Part IV - POV Storage", desc: "Official POV storage regulations.", url: "https://www.ustranscom.mil/dtr/part-iv/dtr_part_iv_app_k_4.pdf", type: "Policy" },
    { title: "NHTSA Vehicle Recall Check", desc: "Check for open recalls before VPC appointment.", url: "https://www.nhtsa.gov/recalls", type: "Website", isQuickLink: true },
    { title: "JTR Chapter 5 (POV Entitlements)", desc: "POV shipment and storage policy.", url: "https://www.travel.dod.mil/Policy-Regulations/Joint-Travel-Regulations/", type: "Policy" },
  ],
};

const TAD_DATA = {
  references: [
    { title: "Defense Travel System (DTS)", desc: "Official DTS portal for TAD orders and travel vouchers.", url: "https://www.defensetravel.dod.mil/", type: "Website", isQuickLink: true },
    { title: "Per Diem Rates (CONUS)", desc: "GSA lodging and M&IE rates for CONUS locations.", url: "https://www.gsa.gov/travel/plan-book/per-diem-rates", type: "Website", isQuickLink: true },
    { title: "Per Diem Rates (OCONUS)", desc: "DTMO per diem rates for OCONUS locations.", url: "https://www.travel.dod.mil/Travel-Transportation-Rates/Per-Diem/", type: "Website", isQuickLink: true },
    { title: "Joint Travel Regulations", desc: "Official policy for TAD/TDY travel and entitlements.", url: "https://www.travel.dod.mil/Policy-Regulations/Joint-Travel-Regulations/", type: "Policy" },
    { title: "GTCC Information", desc: "Government Travel Charge Card policies and requirements.", url: "https://www.defensetravel.dod.mil/site/govtravelcard.cfm", type: "Website", isQuickLink: true },
    { title: "MCO 1000.6 Chapter 4", desc: "Marine Corps TAD order policies.", url: "https://www.marines.mil/Portals/1/Publications/MCO%201000.6.pdf", type: "Policy" },
    { title: "MCO 4650.39A", desc: "Marine Corps travel and transportation policy.", url: "https://www.marines.mil/Portals/1/Publications/MCO%204650.39A.pdf", type: "Policy" },
  ],
};

const PER_DIEM_DATA = {
  perDiemRates: [
    { location: "CONUS Standard", lodging: 110, mie: 68, total: 178 },
    { location: "Washington DC", lodging: 267, mie: 79, total: 346 },
    { location: "San Diego, CA", lodging: 225, mie: 79, total: 304 },
    { location: "New York City", lodging: 343, mie: 79, total: 422 },
  ],
  references: [
    { title: "GSA Per Diem Lookup (CONUS)", desc: "Official CONUS per diem rates by location.", url: "https://www.gsa.gov/travel/plan-book/per-diem-rates", type: "Website", isQuickLink: true },
    { title: "DTMO Per Diem Lookup (OCONUS)", desc: "OCONUS per diem rate lookup tool.", url: "https://www.travel.dod.mil/Travel-Transportation-Rates/Per-Diem/Per-Diem-Rate-Lookup/", type: "Website", isQuickLink: true },
    { title: "M&IE Breakdown Tables", desc: "Meal deduction amounts by M&IE tier.", url: "https://www.gsa.gov/travel/plan-a-trip/per-diem-rates/mie-breakdowns", type: "Website", isQuickLink: true },
    { title: "Foreign Per Diem Rates", desc: "State Department foreign per diem rates.", url: "https://aoprals.state.gov/content.asp?content_id=184&menu_id=78", type: "Website" },
    { title: "POV Mileage Rates", desc: "Current GSA privately owned vehicle mileage rates.", url: "https://www.gsa.gov/travel/plan-a-trip/transportation-airfare-rates-pov-rates-etc/privately-owned-vehicle-pov-mileage-reimbursement", type: "Website", isQuickLink: true },
    { title: "Joint Travel Regulations", desc: "JTR Chapter 2 - Per diem policy and computation.", url: "https://www.travel.dod.mil/Policy-Regulations/Joint-Travel-Regulations/", type: "Policy" },
  ],
};

const VOUCHER_DATA = {
  references: [
    { title: "DTS Login", desc: "Official DTS login portal for voucher submission.", url: "https://dtsproweb.defensetravel.osd.mil/", type: "Website", isQuickLink: true },
    { title: "DTMO Website", desc: "Defense Travel Management Office resources and guidance.", url: "https://www.travel.dod.mil/", type: "Website", isQuickLink: true },
    { title: "Per Diem Rate Lookup", desc: "Look up per diem rates by location.", url: "https://www.travel.dod.mil/Travel-Transportation-Rates/Per-Diem/Per-Diem-Rate-Lookup/", type: "Website", isQuickLink: true },
    { title: "DFAS Travel Pay", desc: "Voucher processing, payment status, and travel pay information.", url: "https://www.dfas.mil/MilitaryMembers/travelpay/", type: "Website", isQuickLink: true },
    { title: "Joint Travel Regulations", desc: "JTR - official travel policy and voucher requirements.", url: "https://www.travel.dod.mil/Policy-Regulations/Joint-Travel-Regulations/", type: "Policy" },
    { title: "DTS Guide 2: Vouchers", desc: "Official guide for creating and submitting DTS vouchers.", url: "https://www.defensetravel.dod.mil/Docs/DTS_Guide_2_Voucher.pdf", type: "Policy" },
    { title: "MCO 1000.6", desc: "Marine Corps Assignment, Classification, and Travel Systems Manual.", url: "https://www.marines.mil/News/Publications/MCPEL/Electronic-Library-Display/Article/899526/mco-10006/", type: "Policy" },
    { title: "DoD FMR Volume 9", desc: "DoD Financial Management Regulation - Travel Policy.", url: "https://comptroller.defense.gov/FMR/vol9.aspx", type: "Policy" },
  ],
};

const DTS_DATA = {
  references: [
    { title: "DTS Login", desc: "Official DTS login portal for travel authorization and vouchers.", url: "https://dtsproweb.defensetravel.osd.mil/", type: "Website", isQuickLink: true },
    { title: "DTMO Website", desc: "Defense Travel Management Office resources and guidance.", url: "https://www.travel.dod.mil/", type: "Website", isQuickLink: true },
    { title: "DTS Training", desc: "DTS user training modules and guides.", url: "https://www.travel.dod.mil/Training/", type: "Website", isQuickLink: true },
    { title: "Per Diem Rate Lookup", desc: "Look up per diem rates by location.", url: "https://www.travel.dod.mil/Travel-Transportation-Rates/Per-Diem/Per-Diem-Rate-Lookup/", type: "Website", isQuickLink: true },
    { title: "ILP Site Search Tool", desc: "Find Integrated Lodging Program properties.", url: "https://www.dodlodging.net/", type: "Website" },
    { title: "Joint Travel Regulations", desc: "JTR Chapters 2-3 for travel policy.", url: "https://www.travel.dod.mil/Policy-Regulations/Joint-Travel-Regulations/", type: "Policy" },
    { title: "DTS Guide 2: Authorizations", desc: "Official guide for creating DTS authorizations.", url: "https://www.defensetravel.dod.mil/Docs/DTS_Guide_2_Authorization.pdf", type: "Policy" },
  ],
};

const GTCC_DATA = {
  references: [
    { title: "CitiManager Portal", desc: "Manage your GTCC account, view statements, make payments.", url: "https://www.citimanager.com/", type: "Website", isQuickLink: true },
    { title: "DTMO GTCC Information", desc: "Government Travel Charge Card program overview and resources.", url: "https://www.travel.dod.mil/Programs/Government-Travel-Charge-Card/", type: "Website", isQuickLink: true },
    { title: "GTCC Cardholder Guide", desc: "Official cardholder guidance and policies.", url: "https://www.travel.dod.mil/Programs/Government-Travel-Charge-Card/Cardholders/", type: "Website", isQuickLink: true },
    { title: "Travel Explorer (TraX)", desc: "GTCC training modules and certification.", url: "https://www.defensetravel.dod.mil/neoaccess/login.php", type: "Website", isQuickLink: true },
    { title: "MCO 4600.40B", desc: "Marine Corps Government Travel Charge Card Program order.", url: "https://www.marines.mil/News/Publications/MCPEL/", type: "Policy" },
    { title: "DoD 7000.14-R Volume 9", desc: "DoD Financial Management Regulation - Travel Policy.", url: "https://comptroller.defense.gov/FMR/vol9.aspx", type: "Policy" },
    { title: "Joint Travel Regulations", desc: "JTR Appendix A - GTCC policy and usage requirements.", url: "https://www.travel.dod.mil/Policy-Regulations/Joint-Travel-Regulations/", type: "Policy" },
  ],
};

const MILEAGE_DATA = {
  references: [
    { title: "GSA Mileage Rates", url: "https://www.gsa.gov/travel/plan-book/transportation-airfare-pov-etc/privately-owned-vehicle-pov-mileage-reimbursement", isQuickLink: true },
    { title: "DTOD (Official Distance Tool)", url: "https://dtod.sddc.army.mil/", isQuickLink: true },
    { title: "Joint Travel Regulations", url: "https://www.travel.dod.mil/Policy-Regulations/Joint-Travel-Regulations/", isQuickLink: true },
    { title: "DTS Portal", url: "https://dtsproweb.defensetravel.osd.mil", isQuickLink: true },
    { title: "MARADMIN 070/21 (Reserve IDT Travel)", url: "https://www.marines.mil/News/Messages/MARADMINS/", isQuickLink: false },
    { title: "DFAS Travel Pay", url: "https://www.dfas.mil/militarymembers/travelpay/", isQuickLink: false },
  ],
};

const ADVANCE_PAY_DATA = {
  references: [
    { title: "DFAS Travel Pay", url: "https://www.dfas.mil/militarymembers/travelpay/", isQuickLink: true },
    { title: "Joint Travel Regulations", url: "https://www.travel.dod.mil/Policy-Regulations/Joint-Travel-Regulations/", isQuickLink: true },
    { title: "DTS Help Desk", url: "https://www.defensetravel.dod.mil/", isQuickLink: true },
    { title: "DoD FMR Volume 9", url: "https://comptroller.defense.gov/portals/45/documents/fmr/volume_09.pdf", isQuickLink: true },
    { title: "MCO 1000.6 (Travel Systems Manual)", url: "https://www.marines.mil/News/Publications/MCPEL/", isQuickLink: false },
    { title: "MCO 4600.40B (GTCC Program)", url: "https://www.marines.mil/News/Publications/MCPEL/", isQuickLink: false },
  ],
};

const LEAVE_ENROUTE_DATA = {
  references: [
    { title: "Joint Travel Regulations", url: "https://www.travel.dod.mil/Policy-Regulations/Joint-Travel-Regulations/", isQuickLink: true },
    { title: "MCO 1050.3J (Leave Regulations)", url: "https://www.marines.mil/portals/1/publications/mco%201050.3j.pdf", isQuickLink: true },
    { title: "MCO 1000.6 (Travel of Personnel)", url: "https://www.marines.mil/News/Publications/MCPEL/", isQuickLink: true },
    { title: "MARADMIN 531/23 (Leisure Travel)", url: "https://www.marines.mil/News/Messages/MARADMINS/", isQuickLink: false },
    { title: "DFAS Travel Pay", url: "https://www.dfas.mil/militarymembers/travelpay/", isQuickLink: false },
  ],
};

// Dependency Management Data
const MARRIAGE_DATA = {
  references: [
    { title: "DEERS Website", url: "https://www.tricare.mil/deers", isQuickLink: true },
    { title: "ID Card Office Locator", url: "https://idco.dmdc.osd.mil/idco/", isQuickLink: true },
    { title: "NAVMC 10922", url: "https://www.marines.mil/News/Publications/MCPEL/", isQuickLink: true },
    { title: "MCO 1750.1 (Family Readiness)", url: "https://www.marines.mil/News/Publications/MCPEL/", isQuickLink: false },
    { title: "DoDI 1341.02 (Dependency Determination)", url: "https://www.esd.whs.mil/Directives/issuances/dodi/", isQuickLink: false },
  ],
};

const BIRTH_ADOPTION_DATA = {
  references: [
    { title: "DEERS Website", url: "https://www.tricare.mil/deers", isQuickLink: true },
    { title: "ID Card Office Locator", url: "https://idco.dmdc.osd.mil/idco/", isQuickLink: true },
    { title: "NAVMC 10922", url: "https://www.marines.mil/News/Publications/MCPEL/", isQuickLink: true },
    { title: "TRICARE Newborn Coverage", url: "https://www.tricare.mil/LifeEvents/Baby", isQuickLink: true },
    { title: "DoDI 1341.02 (Dependency Determination)", url: "https://www.esd.whs.mil/Directives/issuances/dodi/", isQuickLink: false },
  ],
};

const STEPCHILDREN_DATA = {
  references: [
    { title: "DEERS Website", url: "https://www.tricare.mil/deers", isQuickLink: true },
    { title: "ID Card Office Locator", url: "https://idco.dmdc.osd.mil/idco/", isQuickLink: true },
    { title: "NAVMC 10922", url: "https://www.marines.mil/News/Publications/MCPEL/", isQuickLink: true },
    { title: "DoDI 1341.02 (Dependency Determination)", url: "https://www.esd.whs.mil/Directives/issuances/dodi/", isQuickLink: false },
    { title: "DoD FMR Vol 7A Ch 35 (Dependents)", url: "https://comptroller.defense.gov/FMR/vol7a.aspx", isQuickLink: false },
  ],
};

const SECONDARY_DEPENDENTS_DATA = {
  references: [
    { title: "DEERS Website", url: "https://www.tricare.mil/deers", isQuickLink: true },
    { title: "DD Form 137 Series", url: "https://www.esd.whs.mil/Directives/forms/dd0001_0499/", isQuickLink: true },
    { title: "DoDI 1341.02 (Dependency Determination)", url: "https://www.esd.whs.mil/Directives/issuances/dodi/", isQuickLink: true },
    { title: "DoD FMR Vol 7A Ch 35 (Dependents)", url: "https://comptroller.defense.gov/FMR/vol7a.aspx", isQuickLink: false },
    { title: "DFAS Secondary Dependency Info", url: "https://www.dfas.mil/", isQuickLink: false },
  ],
};

const DIVORCE_DATA = {
  references: [
    { title: "DEERS Website", url: "https://www.tricare.mil/deers", isQuickLink: true },
    { title: "ID Card Office Locator", url: "https://idco.dmdc.osd.mil/idco/", isQuickLink: true },
    { title: "TRICARE After Divorce", url: "https://www.tricare.mil/LifeEvents/Divorce", isQuickLink: true },
    { title: "DFAS Garnishment Info", url: "https://www.dfas.mil/garnishment/", isQuickLink: false },
    { title: "Uniformed Services Former Spouses' Protection Act", url: "https://www.dfas.mil/garnishment/usfspa/", isQuickLink: false },
  ],
};

const DEATH_OF_DEPENDENTS_DATA = {
  references: [
    { title: "DEERS Website", url: "https://www.tricare.mil/deers", isQuickLink: true },
    { title: "Military OneSource", url: "https://www.militaryonesource.mil/", isQuickLink: true },
    { title: "Marine Corps Community Services", url: "https://usmc-mccs.org/", isQuickLink: true },
    { title: "SGLI Online", url: "https://www.benefits.va.gov/insurance/sgli.asp", isQuickLink: false },
    { title: "Casualty Assistance", url: "https://www.hqmc.marines.mil/Agencies/Casualty-Assistance/", isQuickLink: false },
  ],
};

const ADULT_CHILDREN_DATA = {
  references: [
    { title: "DEERS Website", url: "https://www.tricare.mil/deers", isQuickLink: true },
    { title: "TRICARE Young Adult", url: "https://www.tricare.mil/tya", isQuickLink: true },
    { title: "ID Card Office Locator", url: "https://idco.dmdc.osd.mil/idco/", isQuickLink: true },
    { title: "DoDI 1341.02 (Dependency Determination)", url: "https://www.esd.whs.mil/Directives/issuances/dodi/", isQuickLink: false },
    { title: "Student Eligibility Requirements", url: "https://www.tricare.mil/Plans/Eligibility/ChildrenDependents", isQuickLink: false },
  ],
};

const FCP_DATA = {
  references: [
    { title: "MCO 1740.13C (Family Care Plans)", url: "https://www.marines.mil/News/Publications/MCPEL/", isQuickLink: true },
    { title: "NAVMC 11800", url: "https://www.marines.mil/News/Publications/MCPEL/", isQuickLink: true },
    { title: "Military OneSource", url: "https://www.militaryonesource.mil/", isQuickLink: true },
    { title: "DoDI 1342.19 (Family Care Plans)", url: "https://www.esd.whs.mil/Directives/issuances/dodi/", isQuickLink: false },
    { title: "Marine Corps Family Team Building", url: "https://usmc-mccs.org/services/support/family-team-building/", isQuickLink: false },
  ],
};

const EFMP_DATA = {
  references: [
    { title: "Marine Corps EFMP", url: "https://usmc-mccs.org/services/family/exceptional-family-member/", isQuickLink: true },
    { title: "Military OneSource EFMP", url: "https://www.militaryonesource.mil/family-relationships/special-needs/", isQuickLink: true },
    { title: "TRICARE Special Needs", url: "https://www.tricare.mil/Plans/SpecialPrograms/ECHO", isQuickLink: true },
    { title: "MCO 1754.4C (EFMP)", url: "https://www.marines.mil/News/Publications/MCPEL/", isQuickLink: false },
    { title: "DoDI 1315.19 (EFMP)", url: "https://www.esd.whs.mil/Directives/issuances/dodi/", isQuickLink: false },
  ],
};

const EMERGENCY_CONTACT_DATA = {
  references: [
    { title: "SGLI Online", url: "https://www.benefits.va.gov/insurance/sgli.asp", isQuickLink: true },
    { title: "MOL (Marine Online)", url: "https://mol.tfs.usmc.mil/", isQuickLink: true },
    { title: "vRED (Virtual Record of Emergency Data)", url: "https://www.dmdc.osd.mil/milconnect/", isQuickLink: true },
    { title: "DD Form 93", url: "https://www.esd.whs.mil/Directives/forms/dd0001_0499/", isQuickLink: false },
    { title: "SGLV 8286", url: "https://www.benefits.va.gov/insurance/forms/", isQuickLink: false },
  ],
};

const ID_CARD_DATA = {
  references: [
    { title: "ID Card Office Locator", url: "https://idco.dmdc.osd.mil/idco/", isQuickLink: true },
    { title: "RAPIDS Appointment Scheduler", url: "https://idco.dmdc.osd.mil/idco/", isQuickLink: true },
    { title: "DEERS Website", url: "https://www.tricare.mil/deers", isQuickLink: true },
    { title: "DoD ID Card Guide", url: "https://www.cac.mil/", isQuickLink: false },
    { title: "DoDI 1000.13 (ID Cards)", url: "https://www.esd.whs.mil/Directives/issuances/dodi/", isQuickLink: false },
  ],
};

const COMMAND_SPONSORSHIP_DATA = {
  references: [
    { title: "Joint Travel Regulations", url: "https://www.travel.dod.mil/Policy-Regulations/Joint-Travel-Regulations/", isQuickLink: true },
    { title: "DEERS Website", url: "https://www.tricare.mil/deers", isQuickLink: true },
    { title: "TRICARE Overseas", url: "https://www.tricare.mil/Plans/HealthPlans/TOS", isQuickLink: true },
    { title: "MCO 1300.8 (Personnel Assignments)", url: "https://www.marines.mil/News/Publications/MCPEL/", isQuickLink: false },
    { title: "DoD 1400.25-M (Civilian HR)", url: "https://www.esd.whs.mil/Directives/", isQuickLink: false },
  ],
};

// Personnel Administration Data
const CHECK_IN_DATA = {
  references: [
    { title: "MCO 1000.6 (Assignment, Classification, Travel)", url: "https://www.marines.mil/News/Publications/MCPEL/", isQuickLink: true },
    { title: "MARADMIN Check-In Procedures", url: "https://www.marines.mil/News/Messages/MARADMINS/", isQuickLink: true },
    { title: "IPAC Locator", url: "https://www.manpower.usmc.mil/webcenter/portal/MISSA", isQuickLink: true },
    { title: "MOL (Marine Online)", url: "https://mol.tfs.usmc.mil/", isQuickLink: false },
    { title: "TRICARE Regional Contacts", url: "https://www.tricare.mil/ContactUs", isQuickLink: false },
  ],
};

const SPONSORSHIP_DATA = {
  references: [
    { title: "MCO 1320.11H (Sponsorship Program)", url: "https://www.marines.mil/News/Publications/MCPEL/Electronic-Library-Display/Article/980074/mco-132011h-wadmin-ch-1/", isQuickLink: true },
    { title: "NAVMC Forms (DLA)", url: "https://www.esd.whs.mil/Directives/forms/", isQuickLink: true },
    { title: "Unit Sponsorship Training (MarineNet)", url: "https://www.marinenet.usmc.mil/", isQuickLink: true },
    { title: "IPAC Locator", url: "https://www.manpower.usmc.mil/webcenter/portal/MISSA", isQuickLink: false },
    { title: "MOL (Marine Online)", url: "https://mol.tfs.usmc.mil/", isQuickLink: false },
  ],
};

const INITIAL_BAH_BAS_DATA = {
  references: [
    { title: "BAH Calculator", url: "https://www.travel.dod.mil/Allowances/Basic-Allowance-for-Housing/", isQuickLink: true },
    { title: "DFAS BAS Rates", url: "https://www.dfas.mil/militarymembers/payentitlements/Pay-Tables/BAS/", isQuickLink: true },
    { title: "DFAS Military Pay", url: "https://www.dfas.mil/MilitaryMembers/", isQuickLink: true },
    { title: "37 U.S.C. 402 (BAS)", url: "https://www.law.cornell.edu/uscode/text/37/402", isQuickLink: false },
    { title: "37 U.S.C. 403 (BAH)", url: "https://www.law.cornell.edu/uscode/text/37/403", isQuickLink: false },
    { title: "MCO 1751.3 (Dependency Determination)", url: "https://www.marines.mil/News/Publications/MCPEL/", isQuickLink: false },
    { title: "Joint Travel Regulations (JTR)", url: "https://www.travel.dod.mil/Policy-Regulations/Joint-Travel-Regulations/", isQuickLink: false },
  ],
};

const RECORDS_REVIEW_DATA = {
  references: [
    { title: "Marine Online (MOL)", url: "https://mol.tfs.usmc.mil/", isQuickLink: true },
    { title: "milConnect", url: "https://milconnect.dmdc.osd.mil/", isQuickLink: true },
    { title: "OMPF Viewer (MOL)", url: "https://mol.tfs.usmc.mil/", isQuickLink: true },
    { title: "MCO 1070.1 (Individual Records)", url: "https://www.marines.mil/News/Publications/MCPEL/", isQuickLink: false },
    { title: "MCO P1070.12K (IRAM)", url: "https://www.marines.mil/News/Publications/MCPEL/", isQuickLink: false },
    { title: "BCNR (DD Form 149)", url: "https://www.secnav.navy.mil/mra/bcnr/Pages/default.aspx", isQuickLink: false },
  ],
};

const SECURITY_CLEARANCE_DATA = {
  references: [
    { title: "DCSA Personnel Vetting", url: "https://www.dcsa.mil/Personnel-Vetting/", isQuickLink: true },
    { title: "DCSA Customer Service", url: "https://www.dcsa.mil/Contact/", isQuickLink: true },
    { title: "e-QIP (SF-86 System)", url: "https://www.opm.gov/investigations/e-qip-application/", isQuickLink: true },
    { title: "DoD 5200.2-R (Personnel Security Program)", url: "https://www.esd.whs.mil/Directives/", isQuickLink: false },
    { title: "SECNAV M-5510.30 (Personnel Security)", url: "https://www.secnav.navy.mil/doni/", isQuickLink: false },
    { title: "Executive Order 12968", url: "https://www.archives.gov/federal-register/executive-orders", isQuickLink: false },
  ],
};

const CHECKOUT_DATA = {
  references: [
    { title: "HQMC IPAC", url: "https://www.manpower.usmc.mil/webcenter/portal/MMRP_pub", isQuickLink: true },
    { title: "Personal Property Office", url: "https://www.move.mil/", isQuickLink: true },
    { title: "Travel Claim Worksheet", url: "https://www.dfas.mil/", isQuickLink: true },
    { title: "MCO P1000.6H (Separations Manual)", url: "https://www.marines.mil/Portals/1/MCO%20P1000.6H.pdf", isQuickLink: false },
    { title: "JTR (Joint Travel Regulations)", url: "https://www.travel.dod.mil/Policy-Regulations/Joint-Travel-Regulations/", isQuickLink: false },
    { title: "MARADMIN Leave & Earnings", url: "https://www.marines.mil/News/Messages/MARADMINS/", isQuickLink: false },
  ],
};

const FINAL_PAY_DATA = {
  references: [
    { title: "myPay (DFAS)", url: "https://mypay.dfas.mil/", isQuickLink: true },
    { title: "DTS (Travel Vouchers)", url: "https://dtsproweb.defensetravel.osd.mil/", isQuickLink: true },
    { title: "DFAS Customer Service", url: "https://www.dfas.mil/CustomerService/", isQuickLink: true },
    { title: "JTR (Joint Travel Regulations)", url: "https://www.travel.dod.mil/Policy-Regulations/Joint-Travel-Regulations/", isQuickLink: false },
    { title: "DoD FMR 7000.14-R Volume 7A", url: "https://comptroller.defense.gov/FMR/", isQuickLink: false },
    { title: "MCO 1000.6 (Assignment Systems)", url: "https://www.marines.mil/News/Publications/MCPEL/Electronic-Library-Display/Article/899526/mco-10006/", isQuickLink: false },
  ],
};

const RECORDS_TRANSFER_DATA = {
  references: [
    { title: "MOL OMPF Viewer", url: "https://mol.tfs.usmc.mil/", isQuickLink: true },
    { title: "ORMA (Record Corrections)", url: "https://mol.tfs.usmc.mil/", isQuickLink: true },
    { title: "HQMC MMRP", url: "https://www.manpower.usmc.mil/webcenter/portal/MMRP_pub", isQuickLink: true },
    { title: "MCO P1070.12K (IRAM)", url: "https://www.marines.mil/News/Publications/MCPEL/Electronic-Library-Display/Article/899193/mco-p107012k/", isQuickLink: false },
    { title: "MCO 1070.1 (Individual Records)", url: "https://www.marines.mil/News/Publications/MCPEL/Electronic-Library-Display/Article/899190/mco-10701/", isQuickLink: false },
    { title: "BUMEDINST 6150.29 (Medical Records)", url: "https://www.med.navy.mil/", isQuickLink: false },
  ],
};

const LEAVE_SETTLEMENT_DATA = {
  references: [
    { title: "MOL Leave Management", url: "https://mol.tfs.usmc.mil/", isQuickLink: true },
    { title: "myPay (Leave Balance)", url: "https://mypay.dfas.mil/", isQuickLink: true },
    { title: "HQMC MMRP", url: "https://www.manpower.usmc.mil/webcenter/portal/MMRP_pub", isQuickLink: true },
    { title: "MCO 1050.3J (Leave Manual)", url: "https://www.marines.mil/portals/1/publications/mco%201050.3j.pdf", isQuickLink: false },
    { title: "JTR (Joint Travel Regulations)", url: "https://www.travel.dod.mil/Policy-Regulations/Joint-Travel-Regulations/", isQuickLink: false },
    { title: "DoD FMR 7000.14-R Volume 7A", url: "https://comptroller.defense.gov/FMR/", isQuickLink: false },
  ],
};

const OMPF_MANAGEMENT_DATA = {
  references: [
    { title: "MOL OMPF Viewer", url: "https://mol.tfs.usmc.mil/", isQuickLink: true },
    { title: "ORMA (Online Record Modular Application)", url: "https://mol.tfs.usmc.mil/", isQuickLink: true },
    { title: "HQMC MMRP", url: "https://www.manpower.usmc.mil/webcenter/portal/MMRP_pub", isQuickLink: true },
    { title: "MCO P1070.12K (IRAM)", url: "https://www.marines.mil/News/Publications/MCPEL/Electronic-Library-Display/Article/899193/mco-p107012k/", isQuickLink: false },
    { title: "MMRP (Military Manpower Records Program)", url: "https://www.manpower.usmc.mil/", isQuickLink: false },
    { title: "NPRC (National Personnel Records Center)", url: "https://www.archives.gov/veterans", isQuickLink: false },
  ],
};

const SRB_CORRECTIONS_DATA = {
  references: [
    { title: "MOL (BIR/BTR Access)", url: "https://mol.tfs.usmc.mil/", isQuickLink: true },
    { title: "ORMA", url: "https://mol.tfs.usmc.mil/", isQuickLink: true },
    { title: "HQMC MMRP", url: "https://www.manpower.usmc.mil/webcenter/portal/MMRP_pub", isQuickLink: true },
    { title: "MCO P1070.12K (IRAM)", url: "https://www.marines.mil/News/Publications/MCPEL/Electronic-Library-Display/Article/899193/mco-p107012k/", isQuickLink: false },
    { title: "HQMC IPAC Contacts", url: "https://www.manpower.usmc.mil/", isQuickLink: false },
    { title: "BCNR (Board for Correction of Naval Records)", url: "https://www.secnav.navy.mil/mra/bcnr/", isQuickLink: false },
  ],
};

const AWARDS_DECORATIONS_DATA = {
  references: [
    { title: "MOL Awards Summary", url: "https://mol.tfs.usmc.mil/", isQuickLink: true },
    { title: "Navy Department Awards", url: "https://www.secnav.navy.mil/mra/CORB/Pages/Awards.aspx", isQuickLink: true },
    { title: "HQMC MMMA", url: "https://www.manpower.usmc.mil/", isQuickLink: true },
    { title: "SECNAVINST 1650.1H (Navy/Marine Corps Awards Manual)", url: "https://www.secnav.navy.mil/", isQuickLink: false },
    { title: "NAVMC 11533 (Personal Award Recommendation)", url: "https://www.marines.mil/News/Publications/MCPEL/", isQuickLink: false },
    { title: "MARADMIN Award Messages", url: "https://www.marines.mil/News/Messages/", isQuickLink: false },
  ],
};

const TRAINING_RECORD_DATA = {
  references: [
    { title: "MOL (BTR Access)", url: "https://mol.tfs.usmc.mil/", isQuickLink: true },
    { title: "MarineNet", url: "https://www.marinenet.usmc.mil/", isQuickLink: true },
    { title: "MCTIMS", url: "https://www.trngcmd.marines.mil/", isQuickLink: true },
    { title: "MCO 1553.4B (Training and Readiness Manual)", url: "https://www.marines.mil/News/Publications/MCPEL/Electronic-Library-Display/Article/899348/mco-15534b/", isQuickLink: false },
    { title: "COOL (Credentialing Opportunities On-Line)", url: "https://www.cool.osd.mil/usmc/", isQuickLink: false },
    { title: "JST (Joint Services Transcript)", url: "https://jst.doded.mil/", isQuickLink: false },
  ],
};

const EDUCATION_RECORDS_DATA = {
  references: [
    { title: "MOL (Education Record)", url: "https://mol.tfs.usmc.mil/", isQuickLink: true },
    { title: "JST Portal", url: "https://jst.doded.mil/", isQuickLink: true },
    { title: "MCCS Voluntary Education", url: "https://www.usmc-mccs.org/services/education/", isQuickLink: true },
    { title: "MCO 1560.25 (Tuition Assistance)", url: "https://www.marines.mil/News/Publications/MCPEL/Electronic-Library-Display/Article/899353/mco-156025a/", isQuickLink: false },
    { title: "COOL Program", url: "https://www.cool.osd.mil/usmc/", isQuickLink: false },
    { title: "VA Education Benefits", url: "https://www.va.gov/education/", isQuickLink: false },
  ],
};

const BCNR_DATA = {
  references: [
    { title: "BCNR Website", url: "https://www.secnav.navy.mil/mra/bcnr/", isQuickLink: true },
    { title: "DD Form 149", url: "https://www.esd.whs.mil/Portals/54/Documents/DD/forms/dd/dd0149.pdf", isQuickLink: true },
    { title: "Marine Corps Legal Services", url: "https://www.hqmc.marines.mil/sja/", isQuickLink: true },
    { title: "10 U.S.C. § 1552 (Correction of Military Records)", url: "https://www.law.cornell.edu/uscode/text/10/1552", isQuickLink: false },
    { title: "NDRB (Naval Discharge Review Board)", url: "https://www.secnav.navy.mil/mra/CORB/Pages/NDRB/default.aspx", isQuickLink: false },
    { title: "Veterans Service Organizations", url: "https://www.va.gov/vso/", isQuickLink: false },
  ],
};

const MEDICAL_RECORDS_DATA = {
  references: [
    { title: "MHS GENESIS Patient Portal", url: "https://patientportal.mhsgenesis.health.mil/", isQuickLink: true },
    { title: "TRICARE Online", url: "https://www.tricareonline.com/", isQuickLink: true },
    { title: "DD Form 2870 (Medical Disclosure)", url: "https://www.esd.whs.mil/Directives/forms/", isQuickLink: true },
    { title: "VA Health Benefits", url: "https://www.va.gov/health-care/", isQuickLink: false },
    { title: "MCO 6000.18 (Individual Medical Readiness)", url: "https://www.marines.mil/News/Publications/MCPEL/", isQuickLink: false },
  ],
};

const PAGE_11_ENTRIES_DATA = {
  references: [
    { title: "MCO P1070.12K (IRAM)", url: "https://www.marines.mil/Portals/1/Publications/MCO%20P1070.12K%20W%20CH%201.pdf", isQuickLink: true },
    { title: "NAVMC 118(11) Form", url: "https://www.marines.mil/News/Publications/MCPEL/", isQuickLink: true },
    { title: "Legal Assistance Office", url: "https://www.hqmc.marines.mil/sja/", isQuickLink: true },
    { title: "BCNR (Board for Correction)", url: "https://www.secnav.navy.mil/mra/bcnr/", isQuickLink: false },
  ],
};

const TRAINING_JACKETS_DATA = {
  references: [
    { title: "Marine Online (MOL)", url: "https://mol.tfs.usmc.mil/", isQuickLink: true },
    { title: "MCTIMS", url: "https://www.trngcmd.marines.mil/", isQuickLink: true },
    { title: "MarineNet", url: "https://www.marinenet.usmc.mil/", isQuickLink: true },
    { title: "MCO 1500.60 (Training Management)", url: "https://www.marines.mil/News/Publications/MCPEL/", isQuickLink: false },
    { title: "JEPES Manual", url: "https://www.manpower.usmc.mil/", isQuickLink: false },
  ],
};

// Promotions and Career Progression DATA constants
const PROMOTION_DOCUMENTATION_DATA = {
  references: [
    { title: "MCO 1400.32 (Enlisted Promotions)", url: "https://www.marines.mil/News/Publications/MCPEL/Electronic-Library-Display/Article/899298/mco-140032d/", isQuickLink: true },
    { title: "MCTFS", url: "https://www.manpower.usmc.mil/", isQuickLink: true },
    { title: "Unit S-1/Admin", url: "#", isQuickLink: true },
    { title: "MARADMIN (Monthly Cutting Scores)", url: "https://www.marines.mil/News/Messages/MARADMINS/", isQuickLink: false },
    { title: "OMPF Guidelines", url: "https://www.manpower.usmc.mil/webcenter/portal/MMRP_PRS/pages_adminandsep/ompf", isQuickLink: false },
  ],
};

const JEPES_DATA = {
  references: [
    { title: "JEPES Website", url: "https://www.manpower.usmc.mil/webcenter/portal/pmi/pages_pmi/jepes", isQuickLink: true },
    { title: "MCO 1610.7A (JEPES)", url: "https://www.marines.mil/News/Publications/MCPEL/Electronic-Library-Display/Article/899516/mco-16107/", isQuickLink: true },
    { title: "MARADMIN 476/23 (JEPES Implementation)", url: "https://www.marines.mil/News/Messages/MARADMINS/", isQuickLink: true },
    { title: "MCTFS (Score Review)", url: "https://www.manpower.usmc.mil/", isQuickLink: false },
    { title: "MCO 1400.32 (Enlisted Promotions)", url: "https://www.marines.mil/News/Publications/MCPEL/Electronic-Library-Display/Article/899298/mco-140032d/", isQuickLink: false },
  ],
};

const CUTTING_SCORE_DATA = {
  references: [
    { title: "MARADMIN (Monthly Cutting Scores)", url: "https://www.marines.mil/News/Messages/MARADMINS/", isQuickLink: true },
    { title: "MCTFS (Composite Score)", url: "https://www.manpower.usmc.mil/", isQuickLink: true },
    { title: "Unit S-1/Admin", url: "#", isQuickLink: true },
    { title: "MCO 1400.32 (Enlisted Promotions)", url: "https://www.marines.mil/News/Publications/MCPEL/Electronic-Library-Display/Article/899298/mco-140032d/", isQuickLink: false },
    { title: "JEPES Website", url: "https://www.manpower.usmc.mil/webcenter/portal/pmi/pages_pmi/jepes", isQuickLink: false },
  ],
};

const PROMOTION_WARRANTS_DATA = {
  references: [
    { title: "MCO 1400.32 (Enlisted Promotions)", url: "https://www.marines.mil/News/Publications/MCPEL/Electronic-Library-Display/Article/899298/mco-140032d/", isQuickLink: true },
    { title: "MCTFS", url: "https://www.manpower.usmc.mil/", isQuickLink: true },
    { title: "Unit S-1/Admin", url: "#", isQuickLink: true },
    { title: "OMPF Guidelines", url: "https://www.manpower.usmc.mil/webcenter/portal/MMRP_PRS/pages_adminandsep/ompf", isQuickLink: false },
    { title: "NAVMC 118 (Page 11)", url: "https://www.marines.mil/News/Publications/MCPEL/Electronic-Library-Display/Article/899753/navmc-118-1-14/", isQuickLink: false },
  ],
};

const MERITORIOUS_PROMOTIONS_DATA = {
  references: [
    { title: "MCO 1400.32 (Enlisted Promotions)", url: "https://www.marines.mil/News/Publications/MCPEL/Electronic-Library-Display/Article/899298/mco-140032d/", isQuickLink: true },
    { title: "Commanding Officer", url: "#", isQuickLink: true },
    { title: "Unit S-1/Admin", url: "#", isQuickLink: true },
    { title: "MARADMIN (Meritorious Promotion Allocations)", url: "https://www.marines.mil/News/Messages/MARADMINS/", isQuickLink: false },
    { title: "MCTFS", url: "https://www.manpower.usmc.mil/", isQuickLink: false },
  ],
};

const EPME_REQUIREMENTS_DATA = {
  references: [
    { title: "MARADMIN 630/24 - EPME Requirements (AD/AR)", url: "https://www.marines.mil/News/Messages/MARADMINS/", isQuickLink: true },
    { title: "MARADMIN 631/24 - EPME Requirements (Reserve)", url: "https://www.marines.mil/News/Messages/MARADMINS/", isQuickLink: true },
    { title: "USMCU CEME", url: "https://www.usmcu.edu/CEME/", isQuickLink: true },
    { title: "MARADMIN 627/24 - SNCO Leadership School", url: "https://www.marines.mil/News/Messages/MARADMINS/" },
    { title: "MCO 1553.4B - Professional Military Education", url: "https://www.marines.mil/News/Publications/MCPEL/" },
    { title: "JKO Direct (EJPME)", url: "https://JKOdirect.jten.mil/" },
    { title: "MarineNet", url: "https://www.marinenet.usmc.mil/" },
  ],
};

const TIG_CORRECTIONS_DATA = {
  references: [
    { title: "MCTFS (Date of Rank)", url: "https://www.manpower.usmc.mil/", isQuickLink: true },
    { title: "Unit S-1/Admin", url: "#", isQuickLink: true },
    { title: "IPAC", url: "#", isQuickLink: true },
    { title: "MCO 1400.32 (Enlisted Promotions)", url: "https://www.marines.mil/News/Publications/MCPEL/Electronic-Library-Display/Article/899298/mco-140032d/", isQuickLink: false },
    { title: "BCNR Website", url: "https://www.secnav.navy.mil/mra/bcnr/", isQuickLink: false },
  ],
};

const MOS_CHANGES_DATA = {
  references: [
    { title: "MCO 1220.1 (MOS Manual)", url: "https://www.marines.mil/News/Publications/MCPEL/Electronic-Library-Display/Article/899473/mco-12201e/", isQuickLink: true },
    { title: "Career Planner", url: "#", isQuickLink: true },
    { title: "MMEA (Enlisted Assignments)", url: "https://www.manpower.usmc.mil/webcenter/portal/MMEA", isQuickLink: true },
    { title: "MCTFS", url: "https://www.manpower.usmc.mil/", isQuickLink: false },
    { title: "MARADMIN (Lateral Move Program)", url: "https://www.marines.mil/News/Messages/MARADMINS/", isQuickLink: false },
  ],
};

const FITNESS_REPORTS_DATA = {
  references: [
    { title: "MCO 1610.7A (JEPES/Fitness Reports)", url: "https://www.marines.mil/News/Publications/MCPEL/Electronic-Library-Display/Article/899516/mco-16107/", isQuickLink: true },
    { title: "MCTFS (FITREP Access)", url: "https://www.manpower.usmc.mil/", isQuickLink: true },
    { title: "Reporting Senior", url: "#", isQuickLink: true },
    { title: "Performance Evaluation Section (MMRP-30)", url: "https://www.manpower.usmc.mil/webcenter/portal/MMRP_PRS", isQuickLink: false },
    { title: "NAVMC 10835 (Fitness Report)", url: "https://www.marines.mil/News/Publications/MCPEL/Electronic-Library-Display/Article/899780/navmc-10835/", isQuickLink: false },
  ],
};

const PERFORMANCE_EVALUATION_APPEALS_DATA = {
  references: [
    { title: "MCO 1610.7A (JEPES/Fitness Reports)", url: "https://www.marines.mil/News/Publications/MCPEL/Electronic-Library-Display/Article/899516/mco-16107/", isQuickLink: true },
    { title: "Performance Evaluation Review Board (PERB)", url: "https://www.manpower.usmc.mil/webcenter/portal/MMRP_PRS", isQuickLink: true },
    { title: "BCNR Website", url: "https://www.secnav.navy.mil/mra/bcnr/", isQuickLink: true },
    { title: "Marine Corps Legal Services", url: "https://www.hqmc.marines.mil/sja/", isQuickLink: false },
    { title: "10 U.S.C. § 1552 (Correction of Military Records)", url: "https://www.law.cornell.edu/uscode/text/10/1552", isQuickLink: false },
  ],
};

const PERB_DATA = {
  references: [
    { title: "DD Form 149 (Feb 2025)", url: "https://www.esd.whs.mil/Portals/54/Documents/DD/forms/dd/dd0149.pdf", isQuickLink: true },
    { title: "MCO 1610.7B - PES Manual", url: "https://www.marines.mil/Portals/1/Publications/MCO1610.7B", isQuickLink: true },
    { title: "MCO 1610.11D - Performance Evaluation Appeals", url: "https://www.marines.mil/News/Publications/MCPEL/Electronic-Library-Display/Article/899294/mco-161011d/", isQuickLink: true },
    { title: "BCNR (Secondary Review)", url: "https://www.secnav.navy.mil/mra/bcnr/", isQuickLink: false },
    { title: "MMPB-21 FAQs", url: "https://www.manpower.usmc.mil/", isQuickLink: false },
  ],
};

const RANK_REDUCTION_DATA = {
  references: [
    { title: "MCO 1900.16 (Separation/Retirement)", url: "https://www.marines.mil/News/Publications/MCPEL/Electronic-Library-Display/Article/899560/mco-190016a/", isQuickLink: true },
    { title: "MCO P1900.16F (MARCORSEPMAN)", url: "https://www.marines.mil/News/Publications/MCPEL/Electronic-Library-Display/Article/899555/mco-p190016f/", isQuickLink: true },
    { title: "Marine Corps Legal Services", url: "https://www.hqmc.marines.mil/sja/", isQuickLink: true },
    { title: "UCMJ", url: "https://www.law.cornell.edu/uscode/text/10/subtitle-A/part-II/chapter-47", isQuickLink: false },
    { title: "MCTFS", url: "https://www.manpower.usmc.mil/", isQuickLink: false },
  ],
};

const FROCKING_DATA = {
  references: [
    { title: "MCO 1400.32 (Enlisted Promotions)", url: "https://www.marines.mil/News/Publications/MCPEL/Electronic-Library-Display/Article/899298/mco-140032d/", isQuickLink: true },
    { title: "Commanding Officer", url: "#", isQuickLink: true },
    { title: "Unit S-1/Admin", url: "#", isQuickLink: true },
    { title: "MARADMIN (Selection Board Results)", url: "https://www.marines.mil/News/Messages/MARADMINS/", isQuickLink: false },
    { title: "MCTFS", url: "https://www.manpower.usmc.mil/", isQuickLink: false },
  ],
};

const DATE_OF_RANK_CORRECTIONS_DATA = {
  references: [
    { title: "MCTFS (Date of Rank)", url: "https://www.manpower.usmc.mil/", isQuickLink: true },
    { title: "Unit S-1/Admin", url: "#", isQuickLink: true },
    { title: "IPAC", url: "#", isQuickLink: true },
    { title: "BCNR Website", url: "https://www.secnav.navy.mil/mra/bcnr/", isQuickLink: false },
    { title: "MCO 1400.32 (Enlisted Promotions)", url: "https://www.marines.mil/News/Publications/MCPEL/Electronic-Library-Display/Article/899298/mco-140032d/", isQuickLink: false },
  ],
};

const MOS_RECLASSIFICATION_DATA = {
  references: [
    { title: "MCO 1220.1 (MOS Manual)", url: "https://www.marines.mil/News/Publications/MCPEL/Electronic-Library-Display/Article/899473/mco-12201e/", isQuickLink: true },
    { title: "Career Planner", url: "#", isQuickLink: true },
    { title: "MMEA (Enlisted Assignments)", url: "https://www.manpower.usmc.mil/webcenter/portal/MMEA", isQuickLink: true },
    { title: "MARADMIN (PMOS Reclassification)", url: "https://www.marines.mil/News/Messages/MARADMINS/", isQuickLink: false },
    { title: "MCTFS", url: "https://www.manpower.usmc.mil/", isQuickLink: false },
  ],
};

const ADDITIONAL_MOS_ASSIGNMENT_DATA = {
  references: [
    { title: "MCO 1220.1 (MOS Manual)", url: "https://www.marines.mil/News/Publications/MCPEL/Electronic-Library-Display/Article/899473/mco-12201e/", isQuickLink: true },
    { title: "Unit S-1/Admin", url: "#", isQuickLink: true },
    { title: "Formal School Training Command", url: "#", isQuickLink: true },
    { title: "MCTFS", url: "https://www.manpower.usmc.mil/", isQuickLink: false },
    { title: "TECOM (Training & Education Command)", url: "https://www.trngcmd.marines.mil/", isQuickLink: false },
  ],
};

const PRIMARY_MOS_CHANGES_DATA = {
  references: [
    { title: "MCO 1220.1 (MOS Manual)", url: "https://www.marines.mil/News/Publications/MCPEL/Electronic-Library-Display/Article/899473/mco-12201e/", isQuickLink: true },
    { title: "Career Planner", url: "#", isQuickLink: true },
    { title: "MMEA (Enlisted Assignments)", url: "https://www.manpower.usmc.mil/webcenter/portal/MMEA", isQuickLink: true },
    { title: "MCTFS", url: "https://www.manpower.usmc.mil/", isQuickLink: false },
    { title: "MARADMIN (PMOS Change Programs)", url: "https://www.marines.mil/News/Messages/MARADMINS/", isQuickLink: false },
  ],
};

// Deployment Support - Pre-Deployment
const DEPLOYMENT_ORDERS_DATA = {
  references: [
    { title: "MARADMIN Deployment Guidance", url: "https://www.marines.mil/News/Messages/MARADMINS/", isQuickLink: true },
    { title: "MOL Orders Module", url: "https://mol.tfs.usmc.mil/", isQuickLink: true },
    { title: "Unit Admin (S-1)", url: "#", isQuickLink: true },
    { title: "MCO 1320.11H (Deployment)", url: "https://www.marines.mil/News/Publications/MCPEL/Electronic-Library-Display/Article/899307/mco-132011h/", isQuickLink: false },
    { title: "IPAC", url: "#", isQuickLink: false },
  ],
};

const MEDICAL_READINESS_DATA = {
  references: [
    { title: "MRRS (Medical Readiness)", url: "https://mrrs.sscno.nmci.navy.mil/", isQuickLink: true },
    { title: "MOL Medical Module", url: "https://mol.tfs.usmc.mil/", isQuickLink: true },
    { title: "Branch Medical Clinic", url: "#", isQuickLink: true },
    { title: "MCO 6100.13 (Medical/Dental Readiness)", url: "https://www.marines.mil/News/Publications/MCPEL/Electronic-Library-Display/Article/899201/mco-610013a/", isQuickLink: false },
    { title: "DoDI 6025.19 (Individual Medical Readiness)", url: "https://www.esd.whs.mil/Directives/issuances/dodi/", isQuickLink: false },
  ],
};

const DENTAL_READINESS_DATA = {
  references: [
    { title: "MOL Dental Status", url: "https://mol.tfs.usmc.mil/", isQuickLink: true },
    { title: "Dental Clinic", url: "#", isQuickLink: true },
    { title: "MCO 6100.13 (Medical/Dental Readiness)", url: "https://www.marines.mil/News/Publications/MCPEL/Electronic-Library-Display/Article/899201/mco-610013a/", isQuickLink: false },
    { title: "BUMED Dental Readiness", url: "https://www.med.navy.mil/", isQuickLink: false },
  ],
};

const FAMILY_CARE_PLAN_VALIDATION_DATA = {
  references: [
    { title: "MCO 1740.13C (Family Care)", url: "https://www.marines.mil/News/Publications/MCPEL/Electronic-Library-Display/Article/899529/mco-174013c/", isQuickLink: true },
    { title: "NAVMC 11800 (Family Care Plan)", url: "#", isQuickLink: true },
    { title: "Legal Assistance Office", url: "#", isQuickLink: true },
    { title: "Marine Corps Family Team Building", url: "https://usmc-mccs.org/services/family/", isQuickLink: false },
    { title: "Unit Commander", url: "#", isQuickLink: false },
  ],
};

const POWER_OF_ATTORNEY_DATA = {
  references: [
    { title: "Legal Assistance Office", url: "#", isQuickLink: true },
    { title: "JAG POA Information", url: "https://www.jag.navy.mil/legal_services/legal_assistance.htm", isQuickLink: true },
    { title: "Military OneSource", url: "https://www.militaryonesource.mil/", isQuickLink: false },
    { title: "DoD Legal Assistance", url: "https://legalassistance.law.af.mil/", isQuickLink: false },
  ],
};

const SGLI_BENEFICIARY_UPDATES_DATA = {
  references: [
    { title: "SGLI Online", url: "https://www.va.gov/life-insurance/options-eligibility/sgli/", isQuickLink: true },
    { title: "milConnect SGLI", url: "https://milconnect.dmdc.osd.mil/", isQuickLink: true },
    { title: "SGLV 8286 Form", url: "https://www.va.gov/vaforms/", isQuickLink: true },
    { title: "VA Life Insurance", url: "https://www.va.gov/life-insurance/", isQuickLink: false },
    { title: "IPAC", url: "#", isQuickLink: false },
  ],
};

const WILL_PREPARATION_DATA = {
  references: [
    { title: "Legal Assistance Office", url: "#", isQuickLink: true },
    { title: "JAG Wills Information", url: "https://www.jag.navy.mil/legal_services/legal_assistance.htm", isQuickLink: true },
    { title: "Military OneSource", url: "https://www.militaryonesource.mil/", isQuickLink: false },
    { title: "DoD Legal Assistance", url: "https://legalassistance.law.af.mil/", isQuickLink: false },
  ],
};

// Deployment Support - During Deployment
const HFP_IDP_VERIFICATION_DATA = {
  references: [
    { title: "37 U.S.C. § 310 (HFP/IDP)", url: "https://www.law.cornell.edu/uscode/text/37/310", isQuickLink: true },
    { title: "DoD FMR Vol. 7A, Ch. 10", url: "https://comptroller.defense.gov/Portals/45/documents/fmr/current/07a/07a_10.pdf", isQuickLink: true },
    { title: "MyPay", url: "https://mypay.dfas.mil/", isQuickLink: true },
    { title: "DFAS Pay Entitlements", url: "https://www.dfas.mil/militarymembers/payentitlements/", isQuickLink: false },
    { title: "IRS Publication 3 (Combat Zone)", url: "https://www.irs.gov/publications/p3", isQuickLink: false },
  ],
};

const FSA_PROCESSING_DATA = {
  references: [
    { title: "37 U.S.C. § 427 (FSA)", url: "https://www.law.cornell.edu/uscode/text/37/427", isQuickLink: true },
    { title: "DoD FMR Vol. 7A, Ch. 27", url: "https://comptroller.defense.gov/Portals/45/documents/fmr/current/07a/07a_27.pdf", isQuickLink: true },
    { title: "DD Form 1561", url: "https://www.esd.whs.mil/Portals/54/Documents/DD/forms/dd/dd1561.pdf", isQuickLink: true },
    { title: "DFAS Pay Entitlements", url: "https://www.dfas.mil/militarymembers/payentitlements/", isQuickLink: false },
    { title: "IPAC", url: "#", isQuickLink: false },
  ],
};

const DEPENDENT_SUPPORT_SERVICES_DATA = {
  references: [
    { title: "Marine Corps Family Team Building", url: "https://usmc-mccs.org/services/family/", isQuickLink: true },
    { title: "Military OneSource", url: "https://www.militaryonesource.mil/", isQuickLink: true },
    { title: "Navy-Marine Corps Relief Society", url: "https://www.nmcrs.org/", isQuickLink: true },
    { title: "Armed Forces Legal Assistance", url: "https://legalassistance.law.af.mil/", isQuickLink: false },
    { title: "Military Family Life Counselors", url: "#", isQuickLink: false },
  ],
};

const EMERGENCY_LEAVE_REQUESTS_DATA = {
  references: [
    { title: "American Red Cross", url: "https://www.redcross.org/get-help/military-families/emergency-communication.html", isQuickLink: true },
    { title: "MCO 1050.3J (Leave Manual)", url: "https://www.marines.mil/News/Publications/MCPEL/", isQuickLink: true },
    { title: "Unit Commander", url: "#", isQuickLink: true },
    { title: "CACO (if applicable)", url: "#", isQuickLink: false },
    { title: "Joint Regional Mortuary Affairs", url: "#", isQuickLink: false },
  ],
};

// Deployment Support - Post-Deployment
const REINTEGRATION_PROCESSING_DATA = {
  references: [
    { title: "PDHA (Post-Deployment Health Assessment)", url: "#", isQuickLink: true },
    { title: "PDHRA (Reassessment)", url: "#", isQuickLink: true },
    { title: "Marine Corps Family Team Building", url: "https://usmc-mccs.org/services/family/", isQuickLink: true },
    { title: "Military OneSource", url: "https://www.militaryonesource.mil/", isQuickLink: false },
    { title: "Combat Operational Stress Control", url: "#", isQuickLink: false },
  ],
};

const PAY_ENTITLEMENT_VERIFICATION_DATA = {
  references: [
    { title: "MyPay", url: "https://mypay.dfas.mil/", isQuickLink: true },
    { title: "DFAS Pay Entitlements", url: "https://www.dfas.mil/militarymembers/payentitlements/", isQuickLink: true },
    { title: "DoD FMR Vol. 7A, Ch. 44 (SDP)", url: "https://comptroller.defense.gov/Portals/45/documents/fmr/current/07a/07a_44.pdf", isQuickLink: true },
    { title: "IPAC", url: "#", isQuickLink: false },
    { title: "Disbursing", url: "#", isQuickLink: false },
  ],
};

const LEAVE_ACCRUAL_REVIEW_DATA = {
  references: [
    { title: "MCO 1050.3J (Leave Manual)", url: "https://www.marines.mil/News/Publications/MCPEL/", isQuickLink: true },
    { title: "MyPay Leave Balance", url: "https://mypay.dfas.mil/", isQuickLink: true },
    { title: "MOL Leave Module", url: "https://mol.tfs.usmc.mil/", isQuickLink: true },
    { title: "DoD FMR Vol. 7A, Ch. 34 (Leave)", url: "https://comptroller.defense.gov/Portals/45/documents/fmr/current/07a/07a_34.pdf", isQuickLink: false },
    { title: "IPAC", url: "#", isQuickLink: false },
  ],
};

const CRSC_DATA = {
  references: [
    { title: "VA CRSC Information", url: "https://www.va.gov/", isQuickLink: true },
    { title: "DFAS CRSC", url: "https://www.dfas.mil/", isQuickLink: true },
    { title: "DD Form 2860", url: "https://www.esd.whs.mil/Portals/54/Documents/DD/forms/dd/dd2860.pdf", isQuickLink: true },
    { title: "10 U.S.C. § 1413a (CRSC)", url: "https://www.law.cornell.edu/uscode/text/10/1413a", isQuickLink: false },
    { title: "Service CRSC Board", url: "#", isQuickLink: false },
  ],
};

// Insurance & Healthcare - Life Insurance DATA
const SGLI_DATA = {
  references: [
    { title: "VA SGLI Website", url: "https://www.va.gov/life-insurance/options-eligibility/sgli/", isQuickLink: true },
    { title: "milConnect SOES", url: "https://milconnect.dmdc.osd.mil/", isQuickLink: true },
    { title: "SGLI Handbook", url: "https://www.benefits.va.gov/INSURANCE/resources-forms.asp", isQuickLink: true },
    { title: "38 U.S.C. Chapter 19 (Life Insurance)", url: "https://www.law.cornell.edu/uscode/text/38/chapter-19", isQuickLink: false },
    { title: "VA Form SGLV 8286 (Beneficiary Designation)", url: "https://www.va.gov/vaforms/", isQuickLink: false },
  ],
};

const FSGLI_DATA = {
  references: [
    { title: "VA FSGLI Website", url: "https://www.va.gov/life-insurance/options-eligibility/fsgli/", isQuickLink: true },
    { title: "milConnect SOES", url: "https://milconnect.dmdc.osd.mil/", isQuickLink: true },
    { title: "FSGLI Handbook", url: "https://www.benefits.va.gov/INSURANCE/resources-forms.asp", isQuickLink: true },
    { title: "38 U.S.C. § 1967 (FSGLI)", url: "https://www.law.cornell.edu/uscode/text/38/1967", isQuickLink: false },
    { title: "VA Form SGLV 8286A", url: "https://www.va.gov/vaforms/", isQuickLink: false },
  ],
};

const TSGLI_DATA = {
  references: [
    { title: "VA TSGLI Website", url: "https://www.va.gov/life-insurance/options-eligibility/tsgli/", isQuickLink: true },
    { title: "TSGLI Claim Form (SGLV 8600)", url: "https://www.benefits.va.gov/INSURANCE/forms/SGLV_8600_ed2019-11.pdf", isQuickLink: true },
    { title: "TSGLI Procedures Guide", url: "https://www.benefits.va.gov/INSURANCE/tsgli_schedule_702.asp", isQuickLink: true },
    { title: "38 U.S.C. § 1980A (TSGLI)", url: "https://www.law.cornell.edu/uscode/text/38/1980A", isQuickLink: false },
    { title: "Branch TSGLI Office", url: "#", isQuickLink: false },
  ],
};

const VGLI_DATA = {
  references: [
    { title: "VA VGLI Website", url: "https://www.va.gov/life-insurance/options-eligibility/vgli/", isQuickLink: true },
    { title: "VGLI Online Application", url: "https://www.benefits.va.gov/INSURANCE/vgli.asp", isQuickLink: true },
    { title: "VGLI Premium Calculator", url: "https://www.benefits.va.gov/INSURANCE/vgli_rates_702.asp", isQuickLink: true },
    { title: "38 U.S.C. § 1977 (VGLI)", url: "https://www.law.cornell.edu/uscode/text/38/1977", isQuickLink: false },
    { title: "SGLV 8714 (VGLI Application)", url: "https://www.va.gov/vaforms/", isQuickLink: false },
  ],
};

const BENEFICIARY_UPDATES_DATA = {
  references: [
    { title: "milConnect SOES", url: "https://milconnect.dmdc.osd.mil/", isQuickLink: true },
    { title: "VA Form SGLV 8286", url: "https://www.va.gov/vaforms/", isQuickLink: true },
    { title: "VA SGLI Website", url: "https://www.va.gov/life-insurance/options-eligibility/sgli/", isQuickLink: true },
    { title: "38 U.S.C. § 1970 (Beneficiary Designation)", url: "https://www.law.cornell.edu/uscode/text/38/1970", isQuickLink: false },
    { title: "Estate Planning Resources", url: "#", isQuickLink: false },
  ],
};

// Insurance & Healthcare - Healthcare Benefits DATA
const TRICARE_ENROLLMENT_DATA = {
  references: [
    { title: "TRICARE Website", url: "https://www.tricare.mil/", isQuickLink: true },
    { title: "milConnect", url: "https://milconnect.dmdc.osd.mil/", isQuickLink: true },
    { title: "DEERS Information", url: "https://www.tricare.mil/DEERS", isQuickLink: true },
    { title: "10 U.S.C. Chapter 55 (Medical and Dental Care)", url: "https://www.law.cornell.edu/uscode/text/10/subtitle-A/part-II/chapter-55", isQuickLink: false },
    { title: "TRICARE Regional Contractors", url: "https://www.tricare.mil/About/Regions", isQuickLink: false },
  ],
};

const HCFSA_DATA = {
  references: [
    { title: "FSAFEDS Website", url: "https://www.fsafeds.com/", isQuickLink: true },
    { title: "OPM FSA Information", url: "https://www.opm.gov/healthcare-insurance/flexible-spending-accounts/", isQuickLink: true },
    { title: "IRS Publication 502", url: "https://www.irs.gov/publications/p502", isQuickLink: true },
    { title: "26 U.S.C. § 125 (Cafeteria Plans)", url: "https://www.law.cornell.edu/uscode/text/26/125", isQuickLink: false },
    { title: "Eligible Expense List", url: "https://www.fsafeds.com/explore/hcfsa/expenses", isQuickLink: false },
  ],
};

const EFMP_MEDICAL_SCREENING_DATA = {
  references: [
    { title: "EFMP Website", url: "https://www.militaryonesource.mil/family-relationships/special-needs/", isQuickLink: true },
    { title: "DD Form 2792", url: "https://www.esd.whs.mil/Portals/54/Documents/DD/forms/dd/dd2792.pdf", isQuickLink: true },
    { title: "DD Form 2792-1", url: "https://www.esd.whs.mil/Portals/54/Documents/DD/forms/dd/dd2792-1.pdf", isQuickLink: true },
    { title: "MCO 1754.4B (EFMP)", url: "#", isQuickLink: false },
    { title: "DoDI 1315.19 (EFMP)", url: "https://www.esd.whs.mil/Portals/54/Documents/DD/issuances/dodi/131519p.pdf", isQuickLink: false },
  ],
};

const DENTAL_COVERAGE_FEDVIP_DATA = {
  references: [
    { title: "BENEFEDS Website", url: "https://www.benefeds.com/", isQuickLink: true },
    { title: "OPM FEDVIP Information", url: "https://www.opm.gov/healthcare-insurance/dental-vision/", isQuickLink: true },
    { title: "FEDVIP Plan Comparison", url: "https://www.benefeds.com/education/dental", isQuickLink: true },
    { title: "5 U.S.C. Chapter 89A (FEDVIP)", url: "https://www.law.cornell.edu/uscode/text/5/chapter-89A", isQuickLink: false },
    { title: "TRICARE Retiree Dental Program", url: "https://www.tricare.mil/CoveredServices/Dental/TDP", isQuickLink: false },
  ],
};

const VISION_COVERAGE_DATA = {
  references: [
    { title: "BENEFEDS Website", url: "https://www.benefeds.com/", isQuickLink: true },
    { title: "OPM FEDVIP Vision Information", url: "https://www.opm.gov/healthcare-insurance/dental-vision/", isQuickLink: true },
    { title: "FEDVIP Vision Plan Comparison", url: "https://www.benefeds.com/education/vision", isQuickLink: true },
    { title: "5 U.S.C. Chapter 89A (FEDVIP)", url: "https://www.law.cornell.edu/uscode/text/5/chapter-89A", isQuickLink: false },
    { title: "Provider Network Locators", url: "#", isQuickLink: false },
  ],
};

// Education & Training - Military Education
const PME_DATA = {
  references: [
    { title: "MCO 1553.4B", url: "https://www.marines.mil/News/Publications/MCPEL/Electronic-Library-Display/Article/899348/mco-15534b/", isQuickLink: true },
    { title: "MARADMIN 627/24 - SNCO Leadership School", url: "https://www.marines.mil/News/Messages/MARADMINS/", isQuickLink: true },
    { title: "MARADMIN 630/24 - SNCO LS Implementation", url: "https://www.marines.mil/News/Messages/MARADMINS/", isQuickLink: true },
    { title: "Marine Corps University", url: "https://www.usmcu.edu/", isQuickLink: true },
    { title: "MarineNet PME Courses", url: "https://www.marinenet.usmc.mil/", isQuickLink: false },
  ],
};

const RESIDENT_NON_RESIDENT_SCHOOLS_DATA = {
  references: [
    { title: "Marine Corps University", url: "https://www.usmcu.edu/", isQuickLink: true },
    { title: "MarineNet", url: "https://www.marinenet.usmc.mil/", isQuickLink: true },
    { title: "MCO 1553.4B", url: "https://www.marines.mil/News/Publications/MCPEL/Electronic-Library-Display/Article/899348/mco-15534b/", isQuickLink: false },
    { title: "Joint Chiefs of Staff PME Policy", url: "https://www.jcs.mil/", isQuickLink: false },
  ],
};

const COMMAND_STAFF_COLLEGE_DATA = {
  references: [
    { title: "Marine Corps Command and Staff College", url: "https://www.usmcu.edu/CSC/", isQuickLink: true },
    { title: "MCO 1553.4B", url: "https://www.marines.mil/News/Publications/MCPEL/Electronic-Library-Display/Article/899348/mco-15534b/", isQuickLink: true },
    { title: "Joint PME Phase II", url: "https://www.jcs.mil/Doctrine/Education/", isQuickLink: false },
    { title: "SNCO Commandant's Board Selection", url: "https://www.manpower.usmc.mil/", isQuickLink: false },
  ],
};

const WAR_COLLEGE_DATA = {
  references: [
    { title: "Marine Corps War College", url: "https://www.usmcu.edu/MCWAR/", isQuickLink: true },
    { title: "National Defense University", url: "https://www.ndu.edu/", isQuickLink: true },
    { title: "Army War College", url: "https://www.armywarcollege.edu/", isQuickLink: false },
    { title: "Naval War College", url: "https://usnwc.edu/", isQuickLink: false },
    { title: "Air War College", url: "https://www.airuniversity.af.edu/AWC/", isQuickLink: false },
  ],
};

const MOS_SPECIFIC_TRAINING_DATA = {
  references: [
    { title: "MCO 1510.118A", url: "https://www.marines.mil/News/Publications/MCPEL/Electronic-Library-Display/Article/899349/mco-1510118a/", isQuickLink: true },
    { title: "TECOM Training Information", url: "https://www.trngcmd.marines.mil/", isQuickLink: true },
    { title: "MCO 1616.1 - JEPES", url: "https://www.marines.mil/News/Publications/MCPEL/Electronic-Library-Display/Article/899232/mco-16161/", isQuickLink: false },
    { title: "MCO 1220.1 - MOS Manual", url: "https://www.marines.mil/News/Publications/MCPEL/Electronic-Library-Display/Article/899473/mco-12201e/", isQuickLink: false },
  ],
};

// Education & Training - Civilian Education
const TUITION_ASSISTANCE_DATA = {
  references: [
    { title: "DoD Tuition Assistance Policy", url: "https://www.dodmou.com/", isQuickLink: true },
    { title: "Marine Corps TA Request (via MOL)", url: "https://www.mol.usmc.mil/", isQuickLink: true },
    { title: "MCO 1560.25A", url: "https://www.marines.mil/News/Publications/MCPEL/Electronic-Library-Display/Article/899353/mco-156025a/", isQuickLink: true },
    { title: "MCO 1616.1 - JEPES", url: "https://www.marines.mil/News/Publications/MCPEL/Electronic-Library-Display/Article/899232/mco-16161/", isQuickLink: false },
  ],
};

const GI_BILL_BENEFITS_DATA = {
  references: [
    { title: "VA Education Benefits", url: "https://www.va.gov/education/", isQuickLink: true },
    { title: "GI Bill Comparison Tool", url: "https://www.va.gov/gi-bill-comparison-tool/", isQuickLink: true },
    { title: "eBenefits Portal", url: "https://www.ebenefits.va.gov/", isQuickLink: true },
    { title: "38 U.S.C. Chapter 33", url: "https://www.law.cornell.edu/uscode/text/38/chapter-33", isQuickLink: false },
    { title: "38 U.S.C. Chapter 30", url: "https://www.law.cornell.edu/uscode/text/38/chapter-30", isQuickLink: false },
  ],
};

const GI_BILL_TRANSFER_DATA = {
  references: [
    { title: "milConnect TEB", url: "https://milconnect.dmdc.osd.mil/", isQuickLink: true },
    { title: "VA Transfer of Benefits", url: "https://www.va.gov/education/transfer-post-9-11-gi-bill-benefits/", isQuickLink: true },
    { title: "DoD TEB Policy", url: "https://www.defense.gov/", isQuickLink: false },
    { title: "38 U.S.C. § 3319", url: "https://www.law.cornell.edu/uscode/text/38/3319", isQuickLink: false },
  ],
};

const JST_DATA = {
  references: [
    { title: "Joint Services Transcript", url: "https://jst.doded.mil/", isQuickLink: true },
    { title: "ACE Credit Recommendations", url: "https://www.acenet.edu/Programs-Services/Pages/Credit-Transcripts/Military-Guide.aspx", isQuickLink: true },
    { title: "DoD Voluntary Education", url: "https://www.dodmou.com/", isQuickLink: false },
  ],
};

const COLLEGE_CREDIT_MILITARY_DATA = {
  references: [
    { title: "CLEP Official Site", url: "https://clep.collegeboard.org/", isQuickLink: true },
    { title: "DSST Exams", url: "https://getcollegecredit.com/", isQuickLink: true },
    { title: "Joint Services Transcript", url: "https://jst.doded.mil/", isQuickLink: true },
    { title: "CAEL Prior Learning Assessment", url: "https://www.cael.org/", isQuickLink: false },
  ],
};

// Education & Training - Professional Development
const CREDENTIALING_PROGRAMS_DATA = {
  references: [
    { title: "Marine Corps COOL", url: "https://www.cool.osd.mil/usmc/", isQuickLink: true },
    { title: "DoD COOL Portal", url: "https://www.cool.osd.mil/", isQuickLink: true },
    { title: "Credential Finder", url: "https://www.cool.osd.mil/usmc/search/CREDENTIAL_SEARCH.htm", isQuickLink: false },
  ],
};

const CERTIFICATION_REIMBURSEMENT_DATA = {
  references: [
    { title: "Marine Corps COOL", url: "https://www.cool.osd.mil/usmc/", isQuickLink: true },
    { title: "COOL Funding Request", url: "https://www.cool.osd.mil/usmc/", isQuickLink: true },
    { title: "VA Certification Benefits", url: "https://www.va.gov/education/about-gi-bill-benefits/how-to-use-benefits/test-fees/", isQuickLink: false },
  ],
};

const LANGUAGE_TRAINING_DLPT_DATA = {
  references: [
    { title: "Defense Language Institute", url: "https://www.dliflc.edu/", isQuickLink: true },
    { title: "FLPP Policy", url: "https://www.dfas.mil/", isQuickLink: true },
    { title: "DLPT Information", url: "https://www.dliflc.edu/dlpt-guides/", isQuickLink: true },
    { title: "DoD Foreign Language Policy", url: "https://www.esd.whs.mil/", isQuickLink: false },
  ],
};

const TECHNICAL_CERTIFICATIONS_DATA = {
  references: [
    { title: "Marine Corps COOL", url: "https://www.cool.osd.mil/usmc/", isQuickLink: true },
    { title: "DoD 8570/8140 Certification Requirements", url: "https://public.cyber.mil/cw/cwmp/dod-approved-8570-baseline-certifications/", isQuickLink: true },
    { title: "CompTIA Certifications", url: "https://www.comptia.org/certifications", isQuickLink: false },
    { title: "FAA Certification", url: "https://www.faa.gov/mechanics/become", isQuickLink: false },
    { title: "ASE Certification", url: "https://www.ase.com/", isQuickLink: false },
  ],
};

// Separations & Transitions - Voluntary Separation
const EAS_DATA = {
  references: [
    { title: "MCO 1900.16 - Separation and Retirement Manual", url: "https://www.marines.mil/News/Publications/MCPEL/Electronic-Library-Display/Article/899560/mco-190016a/", isQuickLink: true },
    { title: "MCO 1040.31 - Transition Readiness Program", url: "https://www.marines.mil/News/Publications/MCPEL/Electronic-Library-Display/Article/899178/mco-104031/", isQuickLink: true },
    { title: "TAP Website", url: "https://www.tapevents.mil/", isQuickLink: true },
    { title: "DD-214 Information", url: "https://www.archives.gov/veterans/military-service-records", isQuickLink: false },
  ],
};

const VOLUNTARY_EARLY_RELEASE_DATA = {
  references: [
    { title: "MCO 1900.16 - Separation and Retirement Manual", url: "https://www.marines.mil/News/Publications/MCPEL/Electronic-Library-Display/Article/899560/mco-190016a/", isQuickLink: true },
    { title: "MARADMIN Messages", url: "https://www.marines.mil/News/Messages/MARADMINS/", isQuickLink: false },
  ],
};

const RESIGNATION_OFFICERS_DATA = {
  references: [
    { title: "MCO 1900.16 - Separation and Retirement Manual", url: "https://www.marines.mil/News/Publications/MCPEL/Electronic-Library-Display/Article/899560/mco-190016a/", isQuickLink: true },
    { title: "10 U.S.C. Officer Separations", url: "https://uscode.house.gov/", isQuickLink: false },
    { title: "MMOA", url: "https://www.manpower.usmc.mil/", isQuickLink: false },
  ],
};

// Separations & Transitions - Involuntary Separation
const ADMINISTRATIVE_SEPARATION_DATA = {
  references: [
    { title: "MCO 1900.16 - Separation and Retirement Manual", url: "https://www.marines.mil/News/Publications/MCPEL/Electronic-Library-Display/Article/899560/mco-190016a/", isQuickLink: true },
    { title: "Legal Assistance Office", url: "https://www.hqmc.marines.mil/sja/", isQuickLink: false },
  ],
};

const MEDICAL_SEPARATION_DATA = {
  references: [
    { title: "10 U.S.C. Chapter 61 - Disability Retirement", url: "https://uscode.house.gov/", isQuickLink: true },
    { title: "SECNAVINST 1850.4 - IDES", url: "https://www.secnav.navy.mil/", isQuickLink: true },
    { title: "Wounded Warrior Regiment", url: "https://www.woundedwarriorregiment.org/", isQuickLink: false },
  ],
};

const FAILURE_TO_MEET_STANDARDS_DATA = {
  references: [
    { title: "MCO 1900.16 - Separation and Retirement Manual", url: "https://www.marines.mil/News/Publications/MCPEL/Electronic-Library-Display/Article/899560/mco-190016a/", isQuickLink: true },
    { title: "MCO 6100.13A - Physical Fitness Program", url: "https://www.marines.mil/News/Publications/MCPEL/Electronic-Library-Display/Article/899201/mco-610013a/", isQuickLink: true },
    { title: "MCO 6110.3 - Body Composition Program", url: "https://www.marines.mil/News/Publications/MCPEL/Electronic-Library-Display/Article/899200/mco-61103/", isQuickLink: false },
  ],
};

const ENTRY_LEVEL_SEPARATION_DATA = {
  references: [
    { title: "MCO 1900.16 - Separation and Retirement Manual", url: "https://www.marines.mil/News/Publications/MCPEL/Electronic-Library-Display/Article/899560/mco-190016a/", isQuickLink: true },
  ],
};

// Separations & Transitions - Retirement
const ACTIVE_DUTY_RETIREMENT_DATA = {
  references: [
    { title: "10 U.S.C. Chapter 71 - Retirement", url: "https://uscode.house.gov/", isQuickLink: true },
    { title: "MCO 1900.16 - Separation and Retirement Manual", url: "https://www.marines.mil/News/Publications/MCPEL/Electronic-Library-Display/Article/899560/mco-190016a/", isQuickLink: true },
    { title: "DFAS Retired Pay", url: "https://www.dfas.mil/retiredmilitary/", isQuickLink: true },
  ],
};

const RESERVE_RETIREMENT_DATA = {
  references: [
    { title: "10 U.S.C. Chapter 1223 - Reserve Retirement", url: "https://uscode.house.gov/", isQuickLink: true },
    { title: "MCO 1900.16 - Separation and Retirement Manual", url: "https://www.marines.mil/News/Publications/MCPEL/Electronic-Library-Display/Article/899560/mco-190016a/", isQuickLink: false },
  ],
};

const MEDICAL_RETIREMENT_DATA = {
  references: [
    { title: "10 U.S.C. Chapter 61 - Disability Retirement", url: "https://uscode.house.gov/", isQuickLink: true },
    { title: "SECNAVINST 1850.4 - IDES", url: "https://www.secnav.navy.mil/", isQuickLink: true },
    { title: "DFAS Retired Pay", url: "https://www.dfas.mil/retiredmilitary/", isQuickLink: false },
  ],
};

const TDRL_DATA = {
  references: [
    { title: "10 U.S.C. 1202, 1210 - TDRL", url: "https://uscode.house.gov/", isQuickLink: true },
    { title: "SECNAVINST 1850.4 - IDES", url: "https://www.secnav.navy.mil/", isQuickLink: true },
  ],
};

const SBP_ELECTIONS_DATA = {
  references: [
    { title: "10 U.S.C. Chapter 73 - Survivor Benefit Plan", url: "https://uscode.house.gov/", isQuickLink: true },
    { title: "DD Form 2656 - SBP Election", url: "https://www.esd.whs.mil/Directives/forms/", isQuickLink: true },
    { title: "DFAS SBP Information", url: "https://www.dfas.mil/retiredmilitary/survivors/", isQuickLink: false },
  ],
};

// Separations & Transitions - Transition Programs
const TAP_DATA = {
  references: [
    { title: "MCO 1040.31 - Transition Readiness Program", url: "https://www.marines.mil/News/Publications/MCPEL/Electronic-Library-Display/Article/899178/mco-104031/", isQuickLink: true },
    { title: "TAP Website", url: "https://www.tapevents.mil/", isQuickLink: true },
  ],
};

const VA_BENEFITS_DATA = {
  references: [
    { title: "VA Website", url: "https://www.va.gov/", isQuickLink: true },
    { title: "VA Benefits Hotline", url: "tel:1-800-827-1000", isQuickLink: true },
    { title: "eBenefits", url: "https://www.ebenefits.va.gov/", isQuickLink: false },
  ],
};

const EMPLOYMENT_ASSISTANCE_DATA = {
  references: [
    { title: "DOL Veterans Employment", url: "https://www.dol.gov/agencies/vets", isQuickLink: true },
    { title: "USAJOBS", url: "https://www.usajobs.gov/", isQuickLink: true },
    { title: "Hiring Our Heroes", url: "https://www.hiringourheroes.org/", isQuickLink: false },
  ],
};

const EDUCATION_BENEFITS_TRANSFER_DATA = {
  references: [
    { title: "38 U.S.C. 3319 - Transfer of Entitlement", url: "https://uscode.house.gov/", isQuickLink: true },
    { title: "milConnect TEB", url: "https://milconnect.dmdc.osd.mil/", isQuickLink: true },
    { title: "VA Transfer of Benefits", url: "https://www.va.gov/education/transfer-post-9-11-gi-bill-benefits/", isQuickLink: false },
  ],
};

const SKILLBRIDGE_DATA = {
  references: [
    { title: "NAVMC 1700.2B - SkillBridge Employment Training", url: "https://www.marines.mil/News/Publications/MCPEL/", isQuickLink: true },
    { title: "MARADMIN 280/24 - SkillBridge Interim Guidance", url: "https://www.marines.mil/News/Messages/MARADMINS/", isQuickLink: true },
    { title: "DOD SkillBridge", url: "https://skillbridge.osd.mil/", isQuickLink: true },
    { title: "DODI 1322.29", url: "https://www.esd.whs.mil/Directives/issuances/dodi/", isQuickLink: false },
    { title: "10 U.S.C. 1143(e)", url: "https://uscode.house.gov/", isQuickLink: false },
  ],
};

// Reserve & Mobilization - Reserve Administration
const RESERVE_DUTY_STATUS_DATA = {
  references: [
    { title: "MCO 1001R.1L W/CH 1 - MCRAMM", url: "https://www.marines.mil/News/Publications/MCPEL/Electronic-Library-Display/Article/899174/mco-1001r1l-wch-1/", isQuickLink: true },
    { title: "10 U.S.C. Sections 10141-10154", url: "https://uscode.house.gov/", isQuickLink: true },
    { title: "Marine Forces Reserve", url: "https://www.marforres.marines.mil/", isQuickLink: false },
  ],
};

const IDT_PAY_DATA = {
  references: [
    { title: "MCO 1001R.1L Chapter 3 - Reserve Duty and Training", url: "https://www.marines.mil/News/Publications/MCPEL/Electronic-Library-Display/Article/899174/mco-1001r1l-wch-1/", isQuickLink: true },
    { title: "MARADMIN 157/25 - IDT Travel Reimbursement", url: "https://www.marines.mil/News/Messages/MARADMINS/", isQuickLink: true },
    { title: "MARADMIN 571/25 - Appropriate Duty Policy", url: "https://www.marines.mil/News/Messages/MARADMINS/", isQuickLink: true },
    { title: "Joint Travel Regulations", url: "https://www.travel.dod.mil/Policy-Regulations/Joint-Travel-Regulations/", isQuickLink: false },
  ],
};

const ANNUAL_TRAINING_ORDERS_DATA = {
  references: [
    { title: "MCO 1001R.1L Chapter 7 - Selected Reserve", url: "https://www.marines.mil/News/Publications/MCPEL/Electronic-Library-Display/Article/899174/mco-1001r1l-wch-1/", isQuickLink: true },
    { title: "Joint Travel Regulations", url: "https://www.travel.dod.mil/Policy-Regulations/Joint-Travel-Regulations/", isQuickLink: true },
    { title: "MROWS", url: "https://mrows.usmc.mil/", isQuickLink: false },
  ],
};

const RETIREMENT_POINTS_DATA = {
  references: [
    { title: "MCO 1001R.1L Chapter 4 - Reserve Retirement", url: "https://www.marines.mil/News/Publications/MCPEL/Electronic-Library-Display/Article/899174/mco-1001r1l-wch-1/", isQuickLink: true },
    { title: "10 U.S.C. Chapter 1223 - Reserve Retirement", url: "https://uscode.house.gov/", isQuickLink: true },
    { title: "DoDI 1215.07 - Service Credit", url: "https://www.esd.whs.mil/Directives/issuances/dodi/", isQuickLink: false },
    { title: "Marine Online (MOL)", url: "https://mol.tfs.usmc.mil/", isQuickLink: false },
  ],
};

const RESERVE_PROMOTION_SYSTEM_DATA = {
  references: [
    { title: "MCO P1400.32D W/CH 2 - Promotion Manual Vol 2", url: "https://www.marines.mil/News/Publications/MCPEL/Electronic-Library-Display/Article/899298/mco-140032d/", isQuickLink: true },
    { title: "MARADMIN 373/24 - FY25 SNCO Board Schedule", url: "https://www.marines.mil/News/Messages/MARADMINS/", isQuickLink: true },
    { title: "MCO 1001R.1L Chapter 4 - Reserve Promotions", url: "https://www.marines.mil/News/Publications/MCPEL/Electronic-Library-Display/Article/899174/mco-1001r1l-wch-1/", isQuickLink: false },
    { title: "MCIRSA", url: "https://www.marforres.marines.mil/Units/Force-Headquarters-Group/Marine-Corps-Individual-Reserve-Support-Activity/", isQuickLink: false },
  ],
};

// Reserve & Mobilization - Mobilization/Activation
const MOBILIZATION_ORDERS_DATA = {
  references: [
    { title: "MCO 3061.1 - Total Force Mobilization Plan", url: "https://www.marines.mil/News/Publications/MCPEL/Electronic-Library-Display/Article/899717/mco-30611/", isQuickLink: true },
    { title: "MCO 3000.19B - MAID-P", url: "https://www.marines.mil/News/Publications/MCPEL/Electronic-Library-Display/Article/899713/mco-300019b/", isQuickLink: true },
    { title: "10 U.S.C. 12301, 12302, 12304, 12304b", url: "https://uscode.house.gov/", isQuickLink: false },
  ],
};

const ADOS_DATA = {
  references: [
    { title: "MCO 1001R.1L Chapter 3 - Active Duty Types", url: "https://www.marines.mil/News/Publications/MCPEL/Electronic-Library-Display/Article/899174/mco-1001r1l-wch-1/", isQuickLink: true },
    { title: "MARFORRES Definitions", url: "https://www.marforres.marines.mil/", isQuickLink: false },
    { title: "MROWS", url: "https://mrows.usmc.mil/", isQuickLink: false },
  ],
};

const ADSW_DATA = {
  references: [
    { title: "MCO 1000.8", url: "https://www.marines.mil/News/Publications/MCPEL/Electronic-Library-Display/Article/899173/mco-10008/", isQuickLink: true },
    { title: "MCO 1001R.1L Chapter 3", url: "https://www.marines.mil/News/Publications/MCPEL/Electronic-Library-Display/Article/899174/mco-1001r1l-wch-1/", isQuickLink: true },
    { title: "HQMC M&RA", url: "https://www.manpower.usmc.mil/", isQuickLink: false },
  ],
};

const ADT_DATA = {
  references: [
    { title: "MCO 1001R.1L Chapter 3 and Chapter 7", url: "https://www.marines.mil/News/Publications/MCPEL/Electronic-Library-Display/Article/899174/mco-1001r1l-wch-1/", isQuickLink: true },
    { title: "MCO 1510R.39B - Reserve Training", url: "https://www.marines.mil/News/Publications/MCPEL/Electronic-Library-Display/Article/899350/mco-1510r39b/", isQuickLink: true },
    { title: "MROWS", url: "https://mrows.usmc.mil/", isQuickLink: false },
  ],
};

const DEMOBILIZATION_PROCESSING_DATA = {
  references: [
    { title: "MCO 3061.1 - TFMDP", url: "https://www.marines.mil/News/Publications/MCPEL/Electronic-Library-Display/Article/899717/mco-30611/", isQuickLink: true },
    { title: "MCO 3000.19B - MAID-P", url: "https://www.marines.mil/News/Publications/MCPEL/Electronic-Library-Display/Article/899713/mco-300019b/", isQuickLink: true },
    { title: "MCO 1001R.1L Chapter 10 - Mobilization", url: "https://www.marines.mil/News/Publications/MCPEL/Electronic-Library-Display/Article/899174/mco-1001r1l-wch-1/", isQuickLink: false },
    { title: "VA Benefits", url: "https://www.va.gov/", isQuickLink: false },
  ],
};

// Legal & Disciplinary - Administrative Actions
const NJP_ARTICLE_15_DATA = {
  references: [
    { title: "MCO 5800.16 Vol 14 - NJP", url: "https://www.marines.mil/News/Publications/MCPEL/Electronic-Library-Display/Article/899474/mco-580016-vol-14/", isQuickLink: true },
    { title: "JAGINST 5800.7F - JAG Manual", url: "https://www.jag.navy.mil/", isQuickLink: true },
    { title: "NAVMC 10132 - Unit Punishment Book", url: "https://www.marines.mil/News/Publications/MCPEL/", isQuickLink: false },
    { title: "Article 15 UCMJ", url: "https://www.law.cornell.edu/uscode/text/10/815", isQuickLink: false },
  ],
};

const PUNITIVE_LETTERS_REPRIMAND_DATA = {
  references: [
    { title: "MCO 5800.16 Vol 14 - NJP", url: "https://www.marines.mil/News/Publications/MCPEL/Electronic-Library-Display/Article/899474/mco-580016-vol-14/", isQuickLink: true },
    { title: "JAGINST 5800.7F - JAG Manual", url: "https://www.jag.navy.mil/", isQuickLink: true },
    { title: "MCO P1070.12K - IRAM", url: "https://www.marines.mil/News/Publications/MCPEL/Electronic-Library-Display/Article/899193/mco-p107012k/", isQuickLink: false },
  ],
};

const PAGE_11_COUNSELING_DATA = {
  references: [
    { title: "MCO P1070.12K - IRAM", url: "https://www.marines.mil/News/Publications/MCPEL/Electronic-Library-Display/Article/899193/mco-p107012k/", isQuickLink: true },
    { title: "Marine Online (MOL)", url: "https://mol.usmc.mil/", isQuickLink: true },
    { title: "NAVMC 11035 - Admin Change Request", url: "https://www.marines.mil/News/Publications/MCPEL/", isQuickLink: false },
    { title: "BCNR", url: "https://www.secnav.navy.mil/mra/CORB/pages/home.aspx", isQuickLink: false },
  ],
};

const ADMINISTRATIVE_INVESTIGATIONS_DATA = {
  references: [
    { title: "JAGINST 5800.7F - JAG Manual", url: "https://www.jag.navy.mil/", isQuickLink: true },
    { title: "MCO 5830.1A - Command Investigations", url: "https://www.marines.mil/News/Publications/MCPEL/Electronic-Library-Display/Article/899479/mco-58301a/", isQuickLink: true },
    { title: "SECNAVINST 5211.5E - Privacy Act", url: "https://www.secnav.navy.mil/", isQuickLink: false },
  ],
};

// Legal & Disciplinary - Legal Support
const COURT_MARTIAL_SUPPORT_DATA = {
  references: [
    { title: "Manual for Courts-Martial (MCM)", url: "https://jsc.defense.gov/Portals/99/Documents/MCM.pdf", isQuickLink: true },
    { title: "JAGINST 5800.7F - JAG Manual", url: "https://www.jag.navy.mil/", isQuickLink: true },
    { title: "MCO 5800.16 - LSAM", url: "https://www.marines.mil/News/Publications/MCPEL/Electronic-Library-Display/Article/899474/mco-580016-vol-14/", isQuickLink: false },
    { title: "JTR Chapter 7 - Witness Travel", url: "https://www.travel.dod.mil/", isQuickLink: false },
  ],
};

const LEGAL_ASSISTANCE_DATA = {
  references: [
    { title: "10 U.S.C. § 1044 - Legal Assistance", url: "https://www.law.cornell.edu/uscode/text/10/1044", isQuickLink: true },
    { title: "SCRA Information", url: "https://www.justice.gov/servicemembers", isQuickLink: true },
    { title: "Marine Corps Legal Services", url: "https://www.hqmc.marines.mil/Agencies/Judge-Advocate-Division/Legal-Services-Support-Section/", isQuickLink: false },
  ],
};

const VWAP_DATA = {
  references: [
    { title: "DoDI 1030.2 - VWAP", url: "https://www.esd.whs.mil/Portals/54/Documents/DD/issuances/dodi/103002p.pdf", isQuickLink: true },
    { title: "UCMJ Article 6b - Victim Rights", url: "https://www.law.cornell.edu/uscode/text/10/806b", isQuickLink: true },
    { title: "DD Form 2701 - Initial Victim Info", url: "https://www.esd.whs.mil/", isQuickLink: false },
    { title: "Crime Victims Rights Act", url: "https://www.justice.gov/usao/resources/crime-victims-rights-ombudsman/victims-rights-act", isQuickLink: false },
  ],
};

const MILITARY_PROTECTIVE_ORDERS_DATA = {
  references: [
    { title: "DoDI 6400.06 - Domestic Abuse", url: "https://www.esd.whs.mil/Portals/54/Documents/DD/issuances/dodi/640006p.pdf", isQuickLink: true },
    { title: "DD Form 2873 - MPO", url: "https://www.esd.whs.mil/", isQuickLink: true },
    { title: "18 U.S.C. § 2265 - Full Faith & Credit", url: "https://www.law.cornell.edu/uscode/text/18/2265", isQuickLink: false },
    { title: "NCIC Protection Order File", url: "https://www.fbi.gov/services/cjis/ncic", isQuickLink: false },
  ],
};

const IG_COMPLAINTS_DATA = {
  references: [
    { title: "DoDI 7050.06 - Whistleblower Protection", url: "https://www.esd.whs.mil/Portals/54/Documents/DD/issuances/dodi/705006p.pdf", isQuickLink: true },
    { title: "10 U.S.C. § 1034 - Protected Communications", url: "https://www.law.cornell.edu/uscode/text/10/1034", isQuickLink: true },
    { title: "DoD Hotline", url: "https://www.dodig.mil/hotline/", isQuickLink: true },
    { title: "HQMC Inspector General", url: "https://www.hqmc.marines.mil/igmc/", isQuickLink: false },
  ],
};

const MOL_DATA = {
  references: [
    { title: "Marine Online (MOL)", url: "https://mol.tfs.usmc.mil/", isQuickLink: true },
    { title: "MOL Help & User Guide", url: "https://mol.tfs.usmc.mil/mol/help.html", isQuickLink: true },
    { title: "MISSO Support", url: "https://www.manpower.usmc.mil/webcenter/portal/MCIRSA", isQuickLink: true },
    { title: "LES Explained", url: "https://www.dfas.mil/militarymembers/payentitlements/aboutpay/", isQuickLink: false },
  ],
};

// MOL Functional Module Descriptions (Battalion Organization Permissions V2.0 - May 2023)
const MOL_FUNCTIONAL_MODULES = {
  "mol-awards-module": {
    title: "Awards Module",
    description: "Provides authorized command representatives the ability to recommend or approve personnel for the Marine Corps Good Conduct Medal (MCGCM) and Selected Marine Corps Reserve Medal (SMCRM). Upon approval, the respective certificate is generated for hard-copy print as well as the corresponding transactions for reporting to the MCTFS.",
    capabilities: ["Recommend personnel for MCGCM/SMCRM", "Approve award recommendations", "Generate award certificates for printing", "Report transactions to MCTFS"],
    userTypes: ["Command Representatives", "Unit Leaders"],
  },
  "mol-basic-orders-system": {
    title: "Basic Orders System (BOS)",
    description: "Provides individual members and authorized unit leaders the ability to view Permanent Change of Assignment (PCA) and Permanent Change of Station (PCS) Basic Orders.",
    capabilities: ["View PCA orders", "View PCS orders", "Access for individual members", "Access for unit leaders"],
    userTypes: ["Individual Members", "Unit Leaders"],
  },
  "mol-bic-assignment": {
    title: "BIC Assignment",
    description: "Provides authorized command representatives the ability to manage Billet Identification Code (BIC) assignments for Active Duty (AD) and Fleet Assistance Program (FAP) personnel for reporting to the MCTFS. BIC assignments for Reserve Component (RC) personnel may be viewed but reporting has been delegated to an external system.",
    capabilities: ["Manage BIC assignments for AD personnel", "Manage BIC assignments for FAP personnel", "View RC BIC assignments (reporting delegated externally)", "Report to MCTFS"],
    userTypes: ["Command Representatives"],
  },
  "mol-commanders-messaging": {
    title: "Commanders Messaging",
    description: "Provides authorized command representatives the ability to disseminate messages to subordinate unit personnel. Messages are displayed on the MOL home page for 1-5 days at the author's discretion. This capability is available at the battalion unit level by default all the way up to CMC/HQMC level organizations.",
    capabilities: ["Create command messages", "Disseminate to subordinate personnel", "Display on MOL home page for 1-5 days", "Available battalion level through CMC/HQMC"],
    userTypes: ["Command Representatives", "Commanders"],
  },
  "mol-epar": {
    title: "Electronic Personnel Administrative Request (EPAR)",
    description: "Provides individual members and authorized unit leaders the ability to submit and route administrative requests through the chain of command.",
    capabilities: ["Submit administrative requests", "Route requests through chain of command", "Track request status", "Approve/disapprove requests"],
    userTypes: ["Individual Members", "Unit Leaders"],
    guide: [
      {
        title: "Initial Setup and Navigation",
        steps: [
          { step: "Log into your Marine Online account at https://mol.usmc.mil" },
          { step: "Navigate to MyEPAR" },
          { step: "Select \"Create Record\"" },
        ],
      },
      {
        title: "Drafting Your EPAR",
        steps: [
          { step: "Verify the shown unit information is correct" },
          { step: "Select the \"Subject\" from the dropdown menu" },
          { step: "Review the \"Instructions\" section for additional EPAR guidance" },
          { step: "Type the request into the \"Notes\" section" },
          {
            step: "Click the \"Save and Attach Files (if applicable)\" button",
            details: [
              "Required only for EPAR subjects that require supporting documentation",
              "If no attachments are required, you may skip uploading any",
            ],
          },
        ],
      },
      {
        title: "Final Review and Submission",
        steps: [
          {
            step: "Navigate to the \"My EPARs\" grid",
            details: ["Here, you can view your \"History\" within the MOL System"],
          },
          { step: "Click \"Submit\" to send to your Chain of Command" },
        ],
      },
      {
        title: "What Happens After Submission",
        steps: [
          { step: "Your EPAR will route through your chain of command for review" },
          { step: "Unit leaders can approve, disapprove, or return the request" },
          { step: "You can track the status of your EPAR in the \"My EPARs\" grid" },
        ],
      },
    ],
    useCases: [
      "Personnel Actions: Submitting requests related to your personal career and record",
      "Contract Changes: Re-enlistments, Extensions, or changes to your End of Current Contract (ECC) date",
      "Pay and Benefits: Actions regarding Bonuses, Survivor Benefit Program (SBP), or Career Status Bonuses (CSB)",
      "Record Corrections: Requesting updates or corrections to existing information in your personnel record",
    ],
  },
  "mol-family-care-plan": {
    title: "Family Care Plan",
    description: "Provides members and authorized unit leaders the ability to manage caregiver designations for member dependents. Members may create/update their caregiver designations and submit to a unit representative (Validating Official) for review. Upon acceptance by the Validating Official, changes to caregiver designations trigger transactional updates to the MCTFS. Unit leaders are provided dashboard functionality to see what is pending their action, what has been sent back to the member, and who will need an update within the next 30 days or is already delinquent.",
    capabilities: ["Create/update caregiver designations", "Submit for validation", "Dashboard for pending actions", "Track 30-day update requirements", "Report to MCTFS"],
    userTypes: ["Individual Members", "Unit Leaders", "Validating Officials"],
  },
  "mol-family-readiness": {
    title: "Family Readiness",
    description: "Provides members and authorized unit leaders the ability to manage contact information for the purposes of the unit Family Readiness program. Designated Family Readiness Officers (FRO) may generate email correspondence to member contacts directly through the application for the purpose of disseminating information on organizational news, events, or unit deployment updates.",
    capabilities: ["Manage family contact information", "Generate email correspondence", "Disseminate organizational news", "Share event information", "Provide deployment updates"],
    userTypes: ["Individual Members", "Unit Leaders", "Family Readiness Officers (FRO)"],
  },
  "mol-inbound-interview": {
    title: "Inbound Interview (IBI)",
    description: "Provides members and authorized unit leaders the ability to onboard incoming personnel. Through this workflow, transactional updates to the MCTFS are generated to include the join of the member to the command, Billet Identification Code (BIC), and Co/Plt/WS assignment.",
    capabilities: ["Onboard incoming personnel", "Generate join transaction to command", "Assign BIC", "Assign Co/Plt/WS", "Report to MCTFS"],
    userTypes: ["Individual Members", "Unit Leaders"],
  },
  "mol-jepes-module": {
    title: "Junior Enlisted Performance Evaluation System (JEPES)",
    description: "Provides members and authorized unit leaders the means by which Marines in the grades Private through Corporal are evaluated for promotion and retention. The Marine Reported On (MRO) is evaluated by their reporting chain through the assignment of Command Input Marks in the areas of Individual Character, MOS and/or Mission Accomplishment, and Leadership. Final Command Input Marks and changes to promotion recommendation status for each reporting occasion are recorded in the MCTFS upon approval by the Commanding Officer.",
    capabilities: ["Evaluate Pvt-Cpl Marines", "Assign Command Input Marks", "Evaluate Individual Character", "Evaluate MOS/Mission Accomplishment", "Evaluate Leadership", "Update promotion recommendations", "Report to MCTFS"],
    userTypes: ["Individual Members", "Unit Leaders", "Commanding Officers"],
  },
  "mol-travel-voucher": {
    title: "Travel Voucher (TVI/FTV)",
    description: "Provides individual members the ability to submit a travel claim directly to the disbursing office for settlement upon separation from service.",
    capabilities: ["Submit travel claims", "Direct submission to disbursing", "Settlement upon separation"],
    userTypes: ["Individual Members"],
  },
  "mol-leave-liberty-module": {
    title: "Leave/Liberty Module",
    description: "Provides authorized members and unit leaders the ability to route and execute absence requests generating transactional updates to the MCTFS. Check-out/in actions are immediately applied to the member's duty status within the Unit Management Status Report (UMSR). Marine members who have lost leave in the previous Fiscal Year may have all or a portion of their leave balance restored as Special Leave Accrual (SLA).",
    capabilities: ["Route absence requests", "Execute leave/liberty requests", "Immediate UMSR duty status updates", "Special Leave Accrual (SLA) restoration", "Report to MCTFS"],
    userTypes: ["Individual Members", "Unit Leaders"],
  },
  "mol-ompf-module": {
    title: "Official Military Personnel File (OMPF)",
    description: "Provides individual members access to view their own electronic Official Military Personnel File (OMPF), Master Brief Sheets (MBS), and RS/RO Profiles. Digital report content is managed by MMRP-20 and replicated locally to the MCEITS hosting facility. Authorized unit leaders may access OMPF report content on members assigned within their scope. Additionally, global viewer access permissions exist for administrative personnel.",
    capabilities: ["View electronic OMPF", "View Master Brief Sheets (MBS)", "View RS/RO Profiles", "Unit leaders access subordinate records", "Global viewer access for admin personnel"],
    userTypes: ["Individual Members", "Unit Leaders", "Administrative Personnel"],
  },
  "mol-organization-management": {
    title: "Organization Management",
    description: "Provides authorized functional managers and unit leaders the ability to manage organizations and hierarchical associations. Organizational information is the backbone of all permissions assignment, routing, and workflows throughout the suite of MOL services.",
    capabilities: ["Manage organizations", "Manage hierarchical associations", "Support permissions assignment", "Support routing workflows"],
    userTypes: ["Functional Managers", "Unit Leaders"],
  },
  "mol-outbound-interview": {
    title: "Outbound Interview",
    description: "Provides individual members and authorized unit leaders the ability to input Permanent Change of Assignment (PCA), Permanent Change of Station (PCS), and Separations (SEPS) related travel plans for authorization of travel entitlements and advances.",
    capabilities: ["Input PCA travel plans", "Input PCS travel plans", "Input separation travel plans", "Authorize travel entitlements", "Process travel advances"],
    userTypes: ["Individual Members", "Unit Leaders"],
  },
  "mol-permissions-management": {
    title: "Permissions Management",
    description: "Provides authorized unit leaders and functional managers the ability to manage application roles and permissions within the delegated organizational scope.",
    capabilities: ["Manage application roles", "Assign permissions", "Scope to organizational hierarchy", "Delegate access"],
    userTypes: ["Unit Leaders", "Functional Managers"],
  },
  // ============================================
  // MOL ELECTRONIC RECORDS - Individual Pages
  // ============================================
  "mol-arcr": {
    title: "Annual Retirement Credit Report (ARCR)",
    description: "The Annual Retirement Credit Report is your 'scoreboard' for reserve retirement. If you are a Reservist or Career Recruiter, this report tracks the points you have earned each anniversary year to show how close you are to qualifying for a reserve pension. It is crucial to verify this data regularly because errors can cost you years of credited service.",
    capabilities: ["View retirement points by anniversary year", "Track active duty and inactive duty points", "Monitor progress toward 20-year retirement", "Print report for records", "Verify point accuracy", "Identify good years vs. bad years"],
    userTypes: ["Reserve Marines", "Individual Reserve Component Members", "Career Recruiters"],
    guide: [
      {
        title: "Why This Matters",
        steps: [
          {
            step: "Your Financial Future",
            details: [
              "Reserve retirement requires 20 'good years' of service, each with at least 50 points",
              "A single bad year (less than 50 points) does not count toward your 20-year requirement",
              "Errors in point recording can delay or reduce your retirement benefits",
              "The ARCR is your proof of service for retirement eligibility disputes",
            ],
          },
          {
            step: "What Counts as a Point",
            details: [
              "Active Duty Points: 1 point per day of active duty (AT, ADT, mobilization)",
              "Inactive Duty Points: 1 point per drill period (typically 4 per weekend)",
              "Membership Points: 15 free points per anniversary year just for being in the reserves",
              "Education Points: Correspondence courses, online training (max 130 inactive points per year)",
            ],
          },
        ],
      },
      {
        title: "How to View and Print Your ARCR",
        steps: [
          {
            step: "Step 1: Access the Report",
            details: [
              "Log in to MOL at https://mol.tfs.usmc.mil/",
              "Navigate to Personal Info > Annual Retirement Credit Report (ARCR)",
              "The year currently displayed appears in parentheses in the heading - e.g., 'Annual Retirement Credit Record (2025)'",
            ],
          },
          {
            step: "Step 2: Switch Between Years",
            details: [
              "Look for the 'Actions' line under the heading",
              "Click 'Prior Year ARCR' to see previous year's points",
              "Click 'Current Year ARCR' to switch back to the current year",
              "Use this to compare points across multiple anniversary years",
            ],
          },
          {
            step: "Step 3: Review Each Anniversary Year",
            details: [
              "Your anniversary year runs from your PEBD (Pay Entry Base Date), NOT January 1st",
              "Check the total points column for each year",
              "Anything 50 or above is a 'good year' that counts toward retirement",
              "Years with less than 50 points are 'bad years' and do not count toward your 20-year requirement",
            ],
          },
          {
            step: "Step 4: Print for Your Records",
            details: [
              "Click 'Printer-Friendly View' - a new window opens with a formatted report",
              "Click 'Print' to send to a printer or 'Save as PDF'",
              "Always save a digital copy before closing the window",
              "Do NOT just press Ctrl+P on the main MOL page - it will look messy. Always use the Printer-Friendly View link",
            ],
          },
        ],
      },
      {
        title: "Common Pitfalls to Avoid",
        steps: [
          {
            step: "Confusing Anniversary Year with Calendar Year",
            details: [
              "Your 'Anniversary Year' starts on the day you entered the Marine Corps (PEBD), not January 1st",
              "Make sure you are looking at the correct window of time",
              "A common mistake is thinking you have until December to earn 50 points when your anniversary is actually in March",
            ],
          },
          {
            step: "Missing Correspondence Courses",
            details: [
              "Points from MarineNet or other schools can take a while to reflect",
              "If you finished a course and don't see the points, wait one full update cycle before calling IPAC",
              "Keep completion certificates as proof in case manual entry is needed",
            ],
          },
          {
            step: "The 50-Point Rule",
            details: [
              "You generally need 50 points in an anniversary year for it to be a 'satisfactory year' for retirement",
              "If you see you're at 48 points, you need to get a drill in before your anniversary date hits",
              "Points from orders or drills may take 30-60 days to post - plan ahead",
            ],
          },
          {
            step: "Printing the Screen vs. the Report",
            details: [
              "Don't just hit Ctrl+P on the main MOL page - it will look messy",
              "Always use the 'Printer-Friendly View' link to get the formal document",
              "This creates a properly formatted report suitable for official records",
            ],
          },
        ],
      },
      {
        title: "What to Do If Points Are Missing",
        steps: [
          {
            step: "Gather Documentation",
            details: [
              "Collect copies of orders, drill schedules, or course completion certificates",
              "Check your LES (Leave and Earnings Statement) for corresponding pay periods",
              "Look for any paper records from that time period",
            ],
          },
          {
            step: "Submit a Correction Request",
            details: [
              "Contact your unit's Personnel Admin (S-1) with your documentation",
              "For IRR Marines, contact Marine Forces Reserve (MARFORRES)",
              "Submit an EPAR through MOL if appropriate",
              "Be persistent - point corrections can take months but are worth fighting for",
            ],
          },
        ],
      },
    ],
  },
  "mol-acip": {
    title: "Aviation Career Incentive Pay (ACIP/AVIP)",
    description: "Aviation Career Incentive Pay (ACIP) and Aviation Incentive Pay (AVIP) are monthly bonuses for pilots, naval flight officers, and enlisted aircrew who maintain flight status. This report shows your eligibility status, current pay gate, and flight hour requirements. Understanding this data protects your pay and helps you plan your aviation career.",
    capabilities: ["View ACIP/AVIP eligibility status", "Check aviation bonus information", "Monitor flight pay gates", "Track operational flying duty credit", "Verify flight hour requirements", "Review aviation service dates"],
    userTypes: ["Naval Aviators", "Naval Flight Officers", "Enlisted Aircrew", "Aviation Personnel"],
    guide: [
      {
        title: "Why This Matters",
        steps: [
          {
            step: "Significant Monthly Income",
            details: [
              "ACIP/AVIP can add $150-$1,000+ per month to your pay depending on your gate",
              "Losing flight status means losing this pay immediately",
              "Understanding the gate system helps you maximize your aviation career earnings",
              "Knowing your status prevents surprise pay losses",
            ],
          },
          {
            step: "The Gate System Explained",
            details: [
              "Gate 1: 2 years of aviation service - entry level flight pay",
              "Gate 2: 6 years of aviation service - increased rate",
              "Gate 3: 10 years of aviation service - further increase",
              "Gate 4: 14 years of aviation service - maximum rate achieved",
              "Gate 5: 22 years of aviation service - maintained at maximum",
              "Each gate requires you to be on operational flying duty or have a valid waiver",
            ],
          },
        ],
      },
      {
        title: "How to Check Your ACIP/AVIP Status",
        steps: [
          {
            step: "Step 1: Access the Report",
            details: [
              "Log in to MOL at https://mol.tfs.usmc.mil/",
              "Navigate to Personal Info > Aviation Incentive Pay-Aviation Bonus",
              "The report shows your current aviation pay status and bonus information",
            ],
          },
          {
            step: "Step 2: Review Your AVIP",
            details: [
              "Look at the Monthly Rate - this is determined by your 'Years of Aviation Service' (YAS)",
              "Check your Flight Gate status - 'Continuous' means you're actively flying, 'Conditional' means at risk",
              "If you haven't met flight hour requirements, AVIP could transition from Continuous to Conditional",
              "YAS starts when you begin flight training, NOT when you joined the Marine Corps",
            ],
          },
          {
            step: "Step 3: Review Your AVB (Aviation Bonus)",
            details: [
              "If you signed a bonus contract (e.g., 48 or 72-month extension), scheduled payment dates and amounts are listed here",
              "New bonus contracts take up to 8 weeks for MMOA-2 to process before showing as 'Scheduled'",
              "The AVB amount shown is the GROSS amount - your deposit will be less after federal and state taxes",
            ],
          },
          {
            step: "Step 4: Print for Your Records",
            details: [
              "Click the 'Printer Friendly' link at the top - a new window opens",
              "Click 'Print' to send to a printer or save as PDF",
              "Click 'Close' to return to your main MOL portal",
            ],
          },
        ],
      },
      {
        title: "Common Pitfalls to Avoid",
        steps: [
          {
            step: "YAS vs. PEBD Confusion",
            details: [
              "Your 'Years of Aviation Service' (YAS) starts when you begin flight training, NOT when you joined the Marine Corps",
              "Don't be surprised if your YAS is lower than your total time in service",
              "YAS determines your pay rate, not your overall time in the Marine Corps",
            ],
          },
          {
            step: "Medical Status Disconnect",
            details: [
              "If your flight physical expires, your AVIP can be suspended",
              "This report might show a 'Stop Pay' note if your medical data hasn't hit MCTFS",
              "Keep your flight physical current - an expired up-chit means no flight pay",
            ],
          },
          {
            step: "The 8-Week Wait for Bonuses",
            details: [
              "Aviation Bonuses are manually processed by MMOA-2",
              "It can take up to 8 weeks for a signed contract to show up as 'Scheduled' on this page",
              "Don't panic if your new bonus doesn't appear immediately",
            ],
          },
          {
            step: "Taxes on AVB",
            details: [
              "Remember that the AVB amount shown is the GROSS amount",
              "Your actual deposit will be significantly less after federal and state taxes are withheld",
              "Plan your finances around the net amount, not the gross",
            ],
          },
        ],
      },
      {
        title: "What to Do If Something Is Wrong",
        steps: [
          {
            step: "Document the Discrepancy",
            details: [
              "Print your current ACIP report from MOL",
              "Gather supporting documents: flight school completion, designation letters, orders",
              "Note exactly what data is incorrect",
            ],
          },
          {
            step: "Contact Your Aviation Personnel Officer",
            details: [
              "Your squadron or group has an aviation admin who handles flight pay issues",
              "They can submit corrections to MMOA (Manpower Management Officer Assignments)",
              "Aviation pay corrections may also require coordination with DFAS",
            ],
          },
          {
            step: "Follow Up Regularly",
            details: [
              "Aviation pay corrections can take 60-90 days to process",
              "Check your LES each pay period to verify changes took effect",
              "If back pay is owed, ensure it is properly calculated and paid",
            ],
          },
        ],
      },
    ],
  },
  "mol-awards": {
    title: "Awards",
    description: "Your Awards record is your official history of recognition for service and achievement. This is not just about wearing the right ribbons - it is your documented proof of what you have done in your career. Missing or incorrect awards can affect promotion boards, reenlistment, and your legacy as a Marine.",
    capabilities: ["View personal decorations", "View service medals", "View campaign ribbons", "View unit awards", "Print awards summary", "Verify award accuracy", "Check order of precedence"],
    userTypes: ["All Marines"],
    guide: [
      {
        title: "Why This Matters",
        steps: [
          {
            step: "JEPES Points Impact",
            details: [
              "Awards aren't just for your 'stack' - they carry JEPES points for Sergeants and below",
              "For Staff NCOs and Officers, awards look favorable on Promotion Boards",
              "If a Sea Service Deployment Ribbon or NAM is missing, you are literally losing points toward your next rank",
            ],
          },
          {
            step: "Official Documentation",
            details: [
              "If it's not in MOL, it's not in your OMPF (Official Military Personnel File)",
              "If it's not in your OMPF, you aren't authorized to wear it",
              "This record follows you into veteran status and is difficult to reconstruct later",
            ],
          },
        ],
      },
      {
        title: "How to Review Your Awards",
        steps: [
          {
            step: "Step 1: Access Your Record",
            details: [
              "Log in to MOL at https://mol.tfs.usmc.mil/",
              "Navigate to Personal Info > Award Information",
              "The page opens in Summary View by default",
            ],
          },
          {
            step: "Step 2: Summary View (Default)",
            details: [
              "This is your 'Quick Look' showing award code, description, and Quantity",
              "If you have a '2' next to National Defense Service Medal, the system thinks you've earned it twice",
              "Summary View is good for a quick check but lacks details",
            ],
          },
          {
            step: "Step 3: Full List View",
            details: [
              "Click the 'Full List View' link at the top of the table",
              "This shows the Effective Date (when the award was earned) and Device Description (Bronze Star, Oak Leaf Cluster, etc.)",
              "Use this view to verify dates and devices are correct",
            ],
          },
          {
            step: "Step 4: Check Award Precedence (Ribbon Rack Order)",
            details: [
              "While in Full List View, click the 'Award Precedence Display' link",
              "A new window opens showing your ribbons in the exact order they should be worn on your uniform",
              "Use this when going to the PX to get a new ribbon rack built",
            ],
          },
          {
            step: "Step 5: Print for Reference",
            details: [
              "Use the 'Print' button to generate a clean copy",
              "Standard browser printing usually cuts off ribbon images - use the formatted Print link",
              "Keep this with your personal copies of award certificates",
            ],
          },
        ],
      },
      {
        title: "Common Pitfalls to Avoid",
        steps: [
          {
            step: "Missing Devices",
            details: [
              "You might see the medal listed, but the 'Device' column is blank",
              "If you've been on three deployments but your Sea Service ribbon shows quantity of '1' with no stars, you need to get that corrected",
              "Devices (stars, oak leaf clusters) must be added separately",
            ],
          },
          {
            step: "Effective Date Errors",
            details: [
              "If the date listed is years off, it can cause issues with your cutting score calculations",
              "Verify dates against your actual award certificates",
            ],
          },
          {
            step: "The 'Unit Award' Lag",
            details: [
              "Ribbons like the Meritorious Unit Commendation (MUC) are often awarded to an entire unit",
              "It can take months for these to trickle down to your individual MOL record",
              "Check MARADMIN messages for unit award announcements to verify eligibility",
            ],
          },
          {
            step: "Printing the Screen",
            details: [
              "Don't just use standard browser printing - it usually cuts off the images of the ribbons",
              "Always use the formatted 'Print' link to get the proper document",
            ],
          },
        ],
      },
      {
        title: "How to Fix Missing or Incorrect Awards",
        steps: [
          {
            step: "The Paper Trail Requirement",
            details: [
              "If an award is missing, you cannot just tell your NCO - you need the Award Citation or the signed 1650 form",
              "Without physical proof, S-1 cannot run the entry",
              "Keep copies of all award certificates in a safe place",
            ],
          },
          {
            step: "S-1 / IPAC Run",
            details: [
              "Take your physical proof (the certificate or citation) to your S-1",
              "They will run the entry in MCTFS",
              "Once S-1 runs the entry, it usually takes 24-72 hours to show up in MOL",
            ],
          },
          {
            step: "Final Check",
            details: [
              "Check back in MOL after 24-72 hours to ensure the 'Quantity' or 'Device' updated correctly",
              "Verify the Effective Date is accurate",
              "If still incorrect, follow up with S-1",
            ],
          },
          {
            step: "Alternative: Submit an EPAR",
            details: [
              "Your admin section can help navigate the correction process",
              "They can verify unit award eligibility through official channels",
              "Complex cases may require coordination with HQMC Awards Branch",
            ],
          },
        ],
      },
    ],
  },
  "mol-bir": {
    title: "Basic Individual Record (BIR)",
    description: "The BIR is arguably the most important page in MOL—the 'Master Cheat Sheet' of your entire Marine Corps career. Think of it as your digital DNA. It pulls data directly from the Central Master File (CMF), combining your service dates, rank, MOS, contract status, and dependent information into one consolidated view. This is often the first document staff and boards look at when evaluating you, so accuracy is critical.",
    capabilities: ["View service data", "View contract information", "View dependent data", "View administrative information", "Print BIR for records", "Verify key dates", "Check MOS assignments"],
    userTypes: ["All Marines"],
    guide: [
      {
        title: "Why This Matters",
        steps: [
          {
            step: "Your Official Identity",
            details: [
              "The BIR is often the first document reviewed in any administrative action",
              "Boards, career planners, and monitors use this to make decisions about you",
              "Incorrect data here can affect assignments, pay, and eligibility for schools or billets",
            ],
          },
          {
            step: "Critical Dates That Drive Your Career",
            details: [
              "PEBD (Pay Entry Base Date): Determines pay longevity and retirement eligibility",
              "EAS (End of Active Service): Your contract end date - affects reenlistment windows",
              "Date of Rank: Determines time-in-grade for promotion eligibility",
              "TAFMS (Total Active Federal Military Service): Used for retirement calculations",
            ],
          },
          {
            step: "Dependent Data Affects Pay",
            details: [
              "BAH (Basic Allowance for Housing) rate depends on dependency status",
              "DEERS enrollment for dependents requires accurate BIR data",
              "Incorrect dependent info can cause pay issues or loss of benefits",
            ],
          },
        ],
      },
      {
        title: "How to Review Your BIR",
        steps: [
          {
            step: "Step 1: Access the Record",
            details: [
              "Log in to MOL at https://mol.tfs.usmc.mil/",
              "Navigate to Personal Info > Basic Individual Record",
              "The BIR loads as a single consolidated view",
              "Note: The 'Printer Friendly' view opens in a new window—ensure pop-ups are allowed in your browser",
            ],
          },
          {
            step: "Step 2: Review the Three Main Pillars",
            details: [
              "Service Information: Your rank, MOS, PEBD, EAS, and critical service dates",
              "Contract Information: Your current enlistment/reenlistment details",
              "Dependent Information: Spouse, children, and anyone else the Marine Corps recognizes as your dependent",
            ],
          },
          {
            step: "Step 3: Verify Service Data",
            details: [
              "Check your current rank and date of rank are correct",
              "Verify your PMOS (Primary MOS) is accurate",
              "Confirm AMOS and NMOS if applicable",
              "Check PEBD matches your original enlistment or commission date",
              "Verify EAS reflects your current contract",
            ],
          },
          {
            step: "Step 4: Review Personal Data",
            details: [
              "Confirm name spelling matches your ID card exactly",
              "Verify blood type is recorded correctly (important for emergencies)",
              "Check marital status is current",
              "Verify Home of Record if relevant for state tax purposes",
            ],
          },
          {
            step: "Step 5: Check Dependent Information",
            details: [
              "Verify all dependents are listed with correct names and dates of birth",
              "Confirm dependency status (spouse, child, etc.) is correct",
              "Ensure no former dependents are incorrectly still listed",
            ],
          },
          {
            step: "Step 6: Print for Reference",
            details: [
              "Print or save the BIR as a PDF",
              "Keep a copy in your personal records",
              "Bring a copy to career planning and reenlistment appointments",
            ],
          },
        ],
      },
      {
        title: "Common Pitfalls to Avoid",
        steps: [
          {
            step: "Wrong PEBD",
            details: [
              "This affects your pay longevity steps and retirement date",
              "If you had prior service (another branch, broken service), verify PEBD is adjusted correctly",
              "Wrong PEBD can cost you money every paycheck",
            ],
          },
          {
            step: "The PEBD vs. AFADBD Confusion",
            details: [
              "Marines often confuse their PEBD (Pay Entry Base Date—when you signed the contract) with their AFADBD (Active Federal Active Duty Begin Date—the day you actually left for boot camp)",
              "For most Marines, these are different dates",
              "PEBD drives pay longevity; AFADBD is used in other calculations",
            ],
          },
          {
            step: "Outdated Marital Status",
            details: [
              "Divorce or marriage not updated can cause BAH issues",
              "You could be overpaid (and owe money back) or underpaid",
              "Update within 30 days of any change with proper documentation",
            ],
          },
          {
            step: "Outdated Dependents",
            details: [
              "If you get divorced or have a child and don't update this record, your pay will be incorrect",
              "This usually results in the Marine Corps taking money back from you later (a 'debt to the government')",
              "Always update dependent information within 30 days of any life event",
            ],
          },
          {
            step: "Missing or Incorrect MOS",
            details: [
              "If you completed a lateral move or earned an AMOS, verify it shows on your BIR",
              "Missing MOS qualifications can affect assignment eligibility",
              "Check after completing any MOS-producing school",
            ],
          },
          {
            step: "Not Checking After Major Life Events",
            details: [
              "Always review your BIR after: marriage, divorce, birth of a child, reenlistment, promotion, PCS",
              "Changes take time to process - give it 30-60 days then verify",
            ],
          },
        ],
      },
      {
        title: "How to Fix Errors",
        steps: [
          {
            step: "Gather Supporting Documents",
            details: [
              "Marriage/divorce certificates for dependent changes",
              "DD-214 or enlistment documents for PEBD issues",
              "School completion certificates for MOS issues",
              "Promotion warrant for date of rank issues",
            ],
          },
          {
            step: "Submit Corrections",
            details: [
              "Use EPAR for most administrative corrections",
              "Work with your S-1/Admin shop for complex issues",
              "Some changes (like PEBD corrections) may require HQMC action",
              "Keep copies of everything you submit",
            ],
          },
        ],
      },
    ],
  },
  "mol-btr": {
    title: "Basic Training Record (BTR)",
    description: "The Basic Training Record is your complete professional development history and the engine behind your JEPES (Junior Enlisted Performance Evaluation System) Mental Agility score for E-1 to E-4. It documents every school, course, and qualification you have earned from boot camp through your current rank. This record directly affects your competitiveness for promotion, special duty assignments, and reenlistment.",
    capabilities: ["View training history", "View education records", "View MOS qualifications", "View PME completion", "Print training record", "Verify school completions", "Check language scores"],
    userTypes: ["All Marines"],
    guide: [
      {
        title: "Why This Matters",
        steps: [
          {
            step: "Promotion Board Review",
            details: [
              "Boards look at your BTR to see your professional development",
              "PME completion is often a prerequisite for promotion",
              "Missing schools or qualifications make you less competitive",
              "The BTR tells the story of how you have invested in your career",
            ],
          },
          {
            step: "Assignment Eligibility",
            details: [
              "Many billets require specific schools or qualifications",
              "Career monitors check BTRs when matching Marines to assignments",
              "Missing a required course can disqualify you from a desired billet",
              "Special duty assignments (DI, Recruiter, MSG) require BTR verification",
            ],
          },
          {
            step: "Bonus and Incentive Eligibility",
            details: [
              "Some reenlistment bonuses require specific school completions",
              "FLPB (Foreign Language Proficiency Bonus) requires DLPT scores on record",
              "Certain incentive pays are tied to qualifications shown in your BTR",
            ],
          },
        ],
      },
      {
        title: "How to Review Your BTR",
        steps: [
          {
            step: "Step 1: Access the Record",
            details: [
              "Log in to MOL at https://mol.tfs.usmc.mil/",
              "Navigate to Personal Info > Basic Training Record",
              "The BTR shows your complete training history chronologically",
            ],
          },
          {
            step: "Step 2: Verify Formal Schools",
            details: [
              "Confirm recruit training (boot camp, OCS, etc.) is recorded",
              "Check that your MOS school is listed with correct completion date",
              "Verify any advanced MOS schools or functional courses",
              "Look for Joint courses, sister service schools, or civilian courses",
            ],
          },
          {
            step: "Step 3: Check PME Status",
            details: [
              "Verify your required PME is recorded: Corporals Course, Sergeants Course, etc.",
              "Check resident vs. non-resident status is correct",
              "Confirm completion dates are accurate",
              "Look for any missing PME that you completed",
            ],
          },
          {
            step: "Step 4: Review Additional Qualifications",
            details: [
              "AMOS (Additional MOS) from lateral moves or schools",
              "NMOS (Necessary MOS) from specialized training",
              "Language proficiency (DLPT scores)",
              "Special qualifications: Airborne, Combatant Diver, etc.",
            ],
          },
          {
            step: "Step 5: Print for Reference",
            details: [
              "Print or save as PDF for your personal records",
              "Bring to career planning and reenlistment sessions",
              "Use when applying for special duty assignments",
            ],
          },
        ],
      },
      {
        title: "Common Pitfalls to Avoid",
        steps: [
          {
            step: "Missing PME",
            details: [
              "Just because you completed the course does not mean it was recorded",
              "MarineNet courses may not automatically post to your BTR",
              "Resident PME from schoolhouses should post within 30-60 days",
              "If missing after 90 days, submit a correction request",
            ],
          },
          {
            step: "MCI/MarineNet Lag",
            details: [
              "MCIs (Marine Corps Institute courses) and MarineNet completions can take weeks to appear in your BTR",
              "If you completed an online course and don't see it after 30 days, contact S-3 or the MarineNet help desk",
              "Keep your course completion certificates as proof until the entry appears",
            ],
          },
          {
            step: "Duplicate Entries",
            details: [
              "Sometimes schools or courses appear twice on your BTR",
              "This can happen when both the schoolhouse and your S-3 both enter the same course",
              "Duplicate entries can confuse boards and auditors—report them to S-3 for correction",
            ],
          },
          {
            step: "Rifle Range 'Ghost Scores'",
            details: [
              "Occasionally, rifle qualification scores from the range don't transmit correctly to MCTFS",
              "You may see an old score, no score, or the wrong qualification (Marksman vs. Expert)",
              "If your range score is missing or wrong, bring your scorebook to S-3 for manual entry",
            ],
          },
          {
            step: "Outdated DLPT Scores",
            details: [
              "DLPT scores expire and must be retested periodically",
              "Expired scores may drop from your record or show as outdated",
              "If you receive FLPB, ensure your current scores are posted",
            ],
          },
          {
            step: "Not Checking After Each School",
            details: [
              "Always verify your BTR 60-90 days after completing any course",
              "This includes unit-level schools, MTTs, and mobile training",
              "Keep certificates as backup documentation",
            ],
          },
          {
            step: "Assuming S-3 Updated It",
            details: [
              "Training sections are busy and errors happen",
              "You are ultimately responsible for your own record accuracy",
              "Verify; do not assume",
            ],
          },
        ],
      },
      {
        title: "How to Fix Missing Training",
        steps: [
          {
            step: "Gather Documentation",
            details: [
              "School completion certificates",
              "Training orders or TAD orders to the school",
              "MarineNet course completion screenshots",
              "DLPT score sheets from testing center",
            ],
          },
          {
            step: "Contact the Right Section",
            details: [
              "For formal schools: Contact your S-3/Training with certificates",
              "For PME: Contact the schoolhouse that ran the course",
              "For DLPT: Contact the testing center or language program manager",
              "For MOL-based courses: May need to work through MCTIMS",
            ],
          },
          {
            step: "Submit EPAR If Needed",
            details: [
              "Some training corrections require an EPAR",
              "Attach all supporting documentation",
              "Provide course name, location, and completion date",
              "Be specific about what is missing or incorrect",
            ],
          },
          {
            step: "Follow Up",
            details: [
              "Training corrections can take 30-90 days to process",
              "Check your BTR monthly until the correction appears",
              "Escalate to your chain of command if stuck in the system",
            ],
          },
        ],
      },
    ],
  },
  "mol-brs-tsp": {
    title: "BRS/TSP Information",
    description: "This is your command center for tracking your retirement savings and mid-career bonuses. The Marine Corps moved away from the 'all or nothing' legacy retirement. With BRS, even if you don't stay for 20 years, you walk away with a retirement account that the government has helped fund.",
    capabilities: ["View TSP contributions", "View BRS election status", "Decline TSP auto-enrollment", "View continuation pay info", "View lump sum election", "Check government matching status", "Monitor contribution percentages"],
    userTypes: ["All Marines"],
    guide: [
      {
        title: "Why This Matters",
        steps: [
          {
            step: "Your Retirement Money",
            details: [
              "BRS provides portable retirement savings even if you leave before 20 years",
              "Government matches up to 5% of your base pay - that's FREE money",
              "If you aren't contributing at least 5%, you are literally throwing away free money",
              "This page helps you verify your elections and catch issues before they cost you",
            ],
          },
          {
            step: "Continuation Pay Bonus",
            details: [
              "If you have between 8 and 12 years of service, you may be eligible for BRS Continuation Pay",
              "This is a one-time cash bonus in exchange for additional service commitment",
              "You CANNOT request it after your 12th year anniversary - the bonus is gone forever if you miss the deadline",
            ],
          },
        ],
      },
      {
        title: "How to Manage Your BRS/TSP",
        steps: [
          {
            step: "Step 1: Access the Report",
            details: [
              "Log in to MOL at https://mol.tfs.usmc.mil/",
              "Navigate to Personal Info > BRS/TSP Information",
              "Review your current TSP contribution rates and BRS status",
            ],
          },
          {
            step: "Step 2: Verify Your Elections",
            details: [
              "Traditional vs. Roth: Traditional is pre-tax (pay taxes later); Roth is after-tax (withdraw tax-free later)",
              "Check what percentage of your Base Pay, Incentive Pay, and Bonuses are being saved",
              "Ensure you are contributing at least 5% to get the full government match",
            ],
          },
          {
            step: "Step 3: Check Continuation Pay Eligibility",
            details: [
              "If you have between 8 and 12 years of service, check the BRS-CP section",
              "If eligible, you must submit a Statement of Understanding (SOU) via EPAR in MOL before your 12th year",
              "The bonus usually hits your bank account within 30 days of your 12th year anniversary",
            ],
          },
          {
            step: "Step 4: Decline Auto Re-Enrollment (If Needed)",
            details: [
              "If you stopped contributions but don't want the system to restart them automatically on January 1st",
              "Click the 'Decline TSP Re-Enrollment' button in MOL during the month of December",
            ],
          },
        ],
      },
      {
        title: "Common Pitfalls to Avoid",
        steps: [
          {
            step: "The December Reset",
            details: [
              "If you stop your TSP contributions during the year, the system will automatically restart them at 5% on January 1st",
              "You must manually decline it in MOL during December to prevent this",
            ],
          },
          {
            step: "Missing the 5% Match",
            details: [
              "If you aren't contributing at least 5% of your own pay, you are losing free money",
              "The government only matches up to 5% - contributing less means leaving money on the table",
            ],
          },
          {
            step: "The Continuation Pay Deadline",
            details: [
              "You CANNOT request Continuation Pay once you hit your 12-year anniversary (PEBD)",
              "If you wait until 12 years and 1 day, the bonus is gone forever",
              "Set a reminder to submit your SOU before your 12th year",
            ],
          },
          {
            step: "MOL vs. myPay Confusion",
            details: [
              "MOL is for VIEWING your status",
              "myPay (https://mypay.dfas.mil) is for CHANGING your contribution percentage",
              "You cannot change your contribution percentage inside MOL",
            ],
          },
        ],
      },
      {
        title: "What to Do After Checking",
        steps: [
          {
            step: "Changing Contributions",
            details: [
              "Go to myPay, select 'Thrift Savings Plan,' and update your percentages",
              "Changes usually take 1-2 pay cycles to reflect on your LES",
            ],
          },
          {
            step: "Allocating Your Funds",
            details: [
              "Log in to TSP.gov to choose where your money is invested",
              "Options include C-Fund (stocks), G-Fund (government bonds), and others",
              "If you don't choose, it defaults to a Lifecycle (L) Fund based on your expected retirement year",
            ],
          },
          {
            step: "Print for Records",
            details: [
              "Click 'Printer Friendly' at the top, then click 'Print' in the new window",
              "Keep a copy for your personal records",
            ],
          },
        ],
      },
    ],
  },
  "mol-cei": {
    title: "Civilian Employment Information (CEI)",
    description: "This is a mandatory requirement for all Reservists (SMCR, IMA, and IRR) to ensure the Department of Defense understands your civilian career and skillsets. Reporting your CEI is required by federal law (Title 10 U.S.C.).",
    capabilities: ["View civilian employment record", "Update employer information", "Complete employment questionnaire", "Report employment status changes", "Report first responder status", "Track critical skills"],
    userTypes: ["Reserve Marines", "Individual Reserve Component Members", "IRR Marines"],
    guide: [
      {
        title: "Why This Matters",
        steps: [
          {
            step: "National Safety",
            details: [
              "Ensures the military doesn't mobilize so many first responders from one city that it leaves the community unprotected",
              "Helps DoD understand the civilian skill base of the reserve force",
            ],
          },
          {
            step: "Your Rights (USERRA)",
            details: [
              "Allows the DoD to inform your employer of their legal obligations to hold your job under USERRA if you are activated",
              "Provides documentation of your civilian employment for legal protections",
            ],
          },
          {
            step: "Skill Tracking",
            details: [
              "If you are a cyber security expert or heavy equipment mechanic in the civilian world, the Marine Corps wants to know",
              "Critical skills can be utilized during mobilization for specialized roles",
            ],
          },
        ],
      },
      {
        title: "How to Update the Questionnaire",
        steps: [
          {
            step: "Step 1: Access the Page",
            details: [
              "Log in to MOL at https://mol.tfs.usmc.mil/",
              "Navigate to Personal Info > Civilian Employment Information",
            ],
          },
          {
            step: "Step 2: Start the Update",
            details: [
              "Click the 'Edit' link to open the questionnaire, then click 'Continue'",
            ],
          },
          {
            step: "Step 3: Enter Employment Status",
            details: [
              "Select your current status:",
              "A: Full-Time",
              "B: Part-Time",
              "C: Voluntary Service",
              "D: Student",
              "E: Unemployed",
            ],
          },
          {
            step: "Step 4: Employer Details",
            details: [
              "Enter the Name and Physical Address (not a PO Box)",
            ],
          },
          {
            step: "Step 5: Job Title & Date",
            details: [
              "Type your official position title and the date you started (Format: 01 JAN 2026)",
            ],
          },
          {
            step: "Step 6: Find Your SOC Code",
            details: [
              "Use the tree-view to find your Standard Occupational Classification (SOC)",
              "Click the plus (+) signs to expand categories until you find the job that best matches your daily duties",
            ],
          },
          {
            step: "Step 7: Final Questions",
            details: [
              "Select Yes or No for: Self-employment status",
              "First Responder status (Police, Fire, EMT)",
              "Consent: Whether you allow Commanders to see this to help with billet/deployment selection",
            ],
          },
          {
            step: "Step 8: Submit",
            details: [
              "Click 'Submit', then click 'Confirm'",
            ],
          },
        ],
      },
      {
        title: "Common Pitfalls to Avoid",
        steps: [
          {
            step: "The Orders Block",
            details: [
              "If your CEI is expired, the MROWS system will physically block your S-1 from authenticating your orders for Annual Training (AT) or a mobilization",
              "Don't wait until you need orders to update this",
            ],
          },
          {
            step: "Student Status",
            details: [
              "If you are a full-time student, you are still required to report",
              "Use your University as the employer and 'Student' as the position",
            ],
          },
          {
            step: "Vague Titles",
            details: [
              "Avoid using generic titles like 'Staff' or 'Manager'",
              "Use the SOC tree to find a specific match so your skills are searchable",
            ],
          },
          {
            step: "Address Errors",
            details: [
              "Ensure the Zip Code is the full 9 digits if possible",
              "The system sends this data to the Defense Manpower Data Center (DMDC), and it must be accurate for mailing USERRA notices",
            ],
          },
          {
            step: "Annual Verification",
            details: [
              "You must update or verify this during your CRCR anniversary month",
              "Even if nothing changed, you must still click Submit",
            ],
          },
        ],
      },
      {
        title: "What Happens After You Finish",
        steps: [
          {
            step: "Data Transfer",
            details: [
              "Your info is sent to the DMDC archive, which catalogues the history of all personnel for healthcare and administrative needs",
            ],
          },
          {
            step: "CRCR Sync",
            details: [
              "Once submitted, your CEI status will show as 'Verified' on your Career Retirement Credit Report (CRCR)",
            ],
          },
          {
            step: "Readiness Status",
            details: [
              "Your 'CEI Compliance' will flip to Green on your unit's readiness tracker",
            ],
          },
          {
            step: "Annual Requirement",
            details: [
              "Mark your calendar - you will need to 'Re-Certify' this information every year, even if your job hasn't changed",
            ],
          },
        ],
      },
    ],
  },
  "mol-chro": {
    title: "Chronological Record (CHRO)",
    description: "This is the modern, digital version of the old 'Page 3' from the paper Service Record Book (SRB). It documents every major event in your career in order—from when you joined a unit, to your deployments, and even specific duties you've performed. If there is a gap or a deployment isn't listed, it can look like unexplained 'missing time' to a promotion board.",
    capabilities: ["View career timeline", "View duty station history", "View deployment history", "View special assignments", "Print chronological record", "Verify service dates", "Audit career sequence"],
    userTypes: ["All Marines"],
    guide: [
      {
        title: "Why This Matters",
        steps: [
          {
            step: "Your Official Timeline",
            details: [
              "The Chronological Record documents every major event in your career in sequential order",
              "It is the primary way the Marine Corps verifies where you were and what you were doing at any given time",
              "Promotion boards look for a continuous, logical flow of duty from the day you stepped on the yellow footprints to today",
            ],
          },
          {
            step: "Gaps Look Bad",
            details: [
              "If there is a gap in your timeline, it looks like you have unexplained 'missing time'",
              "If a deployment isn't listed, you may not get credit for that time in combat or overseas",
              "Incomplete records can affect VA claims, retirement, and promotion competitiveness",
            ],
          },
        ],
      },
      {
        title: "How to View Your Timeline",
        steps: [
          {
            step: "Step 1: Access the Record",
            details: [
              "Log in to MOL at https://mol.tfs.usmc.mil/",
              "Navigate to Personal Info > Chronological Record",
            ],
          },
          {
            step: "Step 2: Audit the Sequence",
            details: [
              "Look at the entries from top to bottom",
              "Each line should have: Date (when the event happened), Event/Duty (a brief code or description like 'JOINED,' 'TAD,' 'PROMOTED'), and Unit/RUC (the unit where the event took place)",
            ],
          },
          {
            step: "Step 3: Cross-Reference",
            details: [
              "Compare this list to your BIR (Basic Individual Record)",
              "If your BIR says you joined your current unit on the 10th, but your Chronological Record says the 15th, one of them is wrong",
            ],
          },
          {
            step: "Step 4: Print/Save",
            details: [
              "Click 'Printer-Friendly View' - a new window will open",
              "Click 'Print' to save as a PDF for your records, then close the new window or tab to return to MOL",
            ],
          },
        ],
      },
      {
        title: "Common Pitfalls to Avoid",
        steps: [
          {
            step: "Missing TAD/Deployments",
            details: [
              "This is the most common error",
              "If you went on a 7-month deployment but don't see an entry for it, your record is incomplete",
            ],
          },
          {
            step: "Overlapping Dates",
            details: [
              "Sometimes S-1 runs an entry that accidentally overlaps with a previous one",
              "This creates a 'double-entry' for the same time period and can flag your record for an audit",
            ],
          },
          {
            step: "Code Confusion",
            details: [
              "You will see abbreviations like 'FR' (From) or 'TR' (To)",
              "Don't ignore these—make sure the 'To' and 'From' units match your actual movements",
            ],
          },
          {
            step: "Assuming It's Done",
            details: [
              "Just because you have a set of orders doesn't mean the event hit your Chronological Record",
              "Always check this page about a week after you check into a new unit",
            ],
          },
        ],
      },
      {
        title: "What to Do After You Review",
        steps: [
          {
            step: "Fixing Errors",
            details: [
              "If you find a gap or mistake, take your Original Orders (with the 'Reporting/Detaching' endorsements) to your S-1",
              "They are the only ones who can fix the 'Page 3' entries in MCTFS",
            ],
          },
          {
            step: "Board Readiness",
            details: [
              "If you are within a year of a promotion board, ensure this record is seamless",
              "Boards look for a continuous, logical flow from day one to today",
            ],
          },
          {
            step: "Record Integrity",
            details: [
              "Once S-1 makes a correction, it typically takes 24-48 hours for the new entry to appear on this page in MOL",
            ],
          },
        ],
      },
    ],
  },
  "mol-education": {
    title: "Education",
    description: "This is the official list of every school, course, and degree you have completed since joining the Marine Corps. The Education report is the engine behind your JEPES Mental Agility score (for E-1 to E-4) and your Master Brief Sheet (for E-5 and above). If your off-duty college courses or MarineNet CEUs aren't listed here, you are leaving promotion points on the table.",
    capabilities: ["View civilian education", "View military education", "View MCI course completions", "View professional certifications", "Check JEPES education points", "Verify degree status"],
    userTypes: ["All Marines"],
    guide: [
      {
        title: "Why This Matters",
        steps: [
          {
            step: "Promotion Points",
            details: [
              "In 2026, the Marine Corps weights 'Self-Education' and 'Degrees' heavily",
              "The Education report directly feeds your JEPES Mental Agility score",
              "Missing courses or degrees means you are losing promotion points every single month",
            ],
          },
          {
            step: "Board Competitiveness",
            details: [
              "For E-5 and above, education appears on your Master Brief Sheet",
              "Boards see your civilian degrees and military education history",
              "A complete education record shows you invest in your professional development",
            ],
          },
        ],
      },
      {
        title: "How to Review Your Education",
        steps: [
          {
            step: "Step 1: Access the Page",
            details: [
              "Log in to MOL at https://mol.tfs.usmc.mil/",
              "Navigate to Personal Info > Education",
            ],
          },
          {
            step: "Step 2: Review the Sections",
            details: [
              "Service Schools: MOS schools, PME (like Career School or Leading Marines), and formal military training",
              "MarineNet/MCI: Every course you finish with a CEU value should appear here",
              "Off-Duty Education: Civilian college credits and degrees (Associate, Bachelor, etc.)",
              "Academic Tests: ASVAB scores and DLAB/DLPT (language) results",
            ],
          },
          {
            step: "Step 3: Print/Save",
            details: [
              "Click 'Printer Friendly' - a new window will open",
              "Click 'Print' (Save as PDF) to keep a copy for your records",
              "Click 'Close' to return to the main Education page",
            ],
          },
        ],
      },
      {
        title: "Common Pitfalls to Avoid",
        steps: [
          {
            step: "The MarineNet Lag",
            details: [
              "Just because you got a certificate on MarineNet doesn't mean it's in MOL",
              "It can take 48-72 hours for the systems to sync",
            ],
          },
          {
            step: "Civilian Transcript Ghosting",
            details: [
              "Civilian degrees do NOT update automatically",
              "You must have your college send an official transcript to your S-1 or the Joint Services Transcript (JST) operations center",
            ],
          },
          {
            step: "Duplicate Entries",
            details: [
              "Sometimes the same course will be listed twice with different dates",
              "This can glitch your JEPES points - notify your S-1 if you see duplicates",
            ],
          },
          {
            step: "Proctor Codes",
            details: [
              "Many Marines finish a course but forget that it requires a proctored exam to actually 'count' for credit",
              "Check that the course status says 'Completed' and not just 'Enrolled'",
            ],
          },
        ],
      },
      {
        title: "What to Do After Review",
        steps: [
          {
            step: "Verify JEPES Points",
            details: [
              "Once a course appears on this page, check your JEPES dashboard",
              "Under 'Mental Agility,' you should see your score increase based on new 'Self-Education' credits",
            ],
          },
          {
            step: "Updating Civilian Education",
            details: [
              "If your college degree is missing, request an official transcript",
              "Most units require you to bring a sealed copy (or have an e-script sent) to the Education Center or S-1",
            ],
          },
          {
            step: "Quarterly Audit",
            details: [
              "Check this page every three months",
              "As you complete more training, ensure the 'Service Schools' section stays updated so you are always board ready",
            ],
          },
        ],
      },
    ],
  },
  "mol-fcp": {
    title: "Family Care Plan (FCP)",
    description: "The Family Care Plan record shows your dependent care arrangements required for deployment readiness. Single parents and dual-military couples must maintain current FCPs.",
    capabilities: ["View FCP status", "View care provider information", "Check FCP expiration", "Print FCP documentation"],
    userTypes: ["All Marines", "Single Parents", "Dual-Military Couples"],
    guide: [
      {
        title: "Accessing Your FCP",
        steps: [
          { step: "Log in to MOL at https://mol.tfs.usmc.mil/" },
          { step: "Navigate to Personal Info > Family Care Plan" },
          { step: "Review your current FCP status and information" },
        ],
      },
      {
        title: "FCP Requirements",
        steps: [
          {
            step: "Who Needs an FCP",
            details: [
              "Single parents with custody of minor children",
              "Dual-military couples with minor children",
              "Marines with adult dependents requiring care",
              "Marines with special needs family members",
            ],
          },
          {
            step: "FCP Components",
            details: [
              "Short-term care provider (immediate deployment)",
              "Long-term care provider (extended deployment)",
              "Financial arrangements",
              "Medical/legal powers of attorney",
              "Transportation arrangements",
            ],
          },
        ],
      },
      {
        title: "Maintaining Your FCP",
        steps: [
          { step: "FCPs must be reviewed and updated annually" },
          { step: "Update whenever care providers change" },
          { step: "Ensure care providers have signed consent forms" },
          { step: "Verify all contact information is current" },
          { step: "Submit updates through your unit's Family Readiness Officer" },
        ],
      },
    ],
  },
  "mol-grade-report": {
    title: "Grade Report",
    description: "Your official 'promotion eligibility' sheet. While other pages show what you've done, this page shows where you stand in the eyes of the Marine Corps promotion system. It tracks Time in Grade (TIG), Time in Service (TIS), and whether you've completed your required PME. If this page has an error—like a 'Promotion Restriction' code that shouldn't be there—you will be passed over even if your JEPES score is high.",
    capabilities: ["View promotion eligibility", "Check TIG/TIS status", "Verify PME completion", "View restriction codes", "Check selection status", "Print grade report"],
    userTypes: ["All Marines"],
    guide: [
      {
        title: "Why This Matters",
        steps: [
          {
            step: "The Final Word on Promotion",
            details: [
              "This report is the final word on whether or not you are eligible to pick up the next rank",
              "Even if you are the best Marine in the shop, an error here can block your promotion",
              "Boards and promotion systems pull data directly from this report",
            ],
          },
          {
            step: "What It Tracks",
            details: [
              "Time in Grade (TIG): How long you have been at your current rank",
              "Time in Service (TIS): Your total time in the Marine Corps",
              "PME Completion: Whether you have finished required Professional Military Education",
              "Restriction Codes: Any administrative holds that block promotion",
            ],
          },
        ],
      },
      {
        title: "How to Navigate the Grade Report",
        steps: [
          {
            step: "Step 1: Access the Report",
            details: [
              "Log in to MOL at https://mol.tfs.usmc.mil/",
              "Navigate to Personal Info > Grade Report",
            ],
          },
          {
            step: "Step 2: Verify Key Data Elements",
            details: [
              "Current Grade/Date of Rank: Ensure your actual rank and the day you pinned it on match the system",
              "Promotion Eligibility: Look for your 'Eligibility Date' - the earliest date the system says you can move up",
              "Selection Status: If you are E-5 or above, this will show if you have been 'Selected' by a board",
              "Mandatory Requirements: Check the section for 'PME Completion' - it should say YES for your current grade",
            ],
          },
          {
            step: "Step 3: Check for Restrictions",
            details: [
              "Look for any 'Non-recommendation' or 'Restriction' codes",
              "If you aren't on legal hold or under a weight control program, this section should be clear",
              "Common restriction codes: Legal Hold, BCP (Body Composition Program), Medical Hold",
            ],
          },
          {
            step: "Step 4: Print/Save",
            details: [
              "Click 'Printer Friendly' - a new window opens with a clean, formatted document",
              "Click 'Print' (or Save as PDF)",
              "Click 'Close' to return to the standard Grade Report page",
            ],
          },
        ],
      },
      {
        title: "Common Pitfalls to Avoid",
        steps: [
          {
            step: "The PME Gap",
            details: [
              "You finished the course on MarineNet, but the Grade Report still says NO for requirement completion",
              "This usually means the data hasn't migrated from the Education folder to the Grade folder",
              "It can take 48-72 hours for systems to sync - check back after a few days",
            ],
          },
          {
            step: "Incorrect TIG/TIS",
            details: [
              "If you had a 'broken service' period (left and came back) or a reduction in rank, these dates can get scrambled",
              "Always verify your PEBD and Date of Rank are accurate",
            ],
          },
          {
            step: "Ignoring Restriction Codes",
            details: [
              "Sometimes a 'Pro-Pay' or 'Legal' restriction code stays on your record long after the issue is resolved",
              "If you see a code you don't recognize, ask your S-1 immediately",
              "These codes can silently block your promotion without you realizing it",
            ],
          },
          {
            step: "The Selection Link",
            details: [
              "For those waiting on board results, don't just look at the MOL homepage",
              "The Grade Report is often the first place the 'Selected' status appears officially",
            ],
          },
        ],
      },
      {
        title: "What to Do After Review",
        steps: [
          {
            step: "Fixing Eligibility",
            details: [
              "If you meet the score and PME but the report says 'Ineligible,' take a printout of this report and your BTR to your Company Clerk or S-1",
              "They can investigate and submit corrections to MCTFS",
            ],
          },
          {
            step: "Monthly JEPES Cycle",
            details: [
              "For Sergeants and below, ensure this report is 'Green' before the cutoff date (usually the 20th of the month)",
              "This ensures you are in the running for the next month's promotion",
            ],
          },
          {
            step: "Board Preparation",
            details: [
              "If you are E-5 or above, this report must be 100% accurate before your Digital Photo and OMPF are sent to the promotion board",
              "Errors here will be seen by every board member reviewing your record",
            ],
          },
        ],
      },
    ],
  },
  "mol-imr": {
    title: "Individual Medical Readiness (IMR)",
    description: "Your 'medical scoreboard' that determines if you are deployable or if you'll be spending your morning at the BAS catching up on shots. Medical readiness is a go/no-go criteria for deployments, schools, and even leave in some units. This page helps you track your PHA, dental class, and immunizations so you can fix issues BEFORE your name shows up on the 'Hit List' at morning formation.",
    capabilities: ["View medical readiness status", "Check immunization status", "View dental readiness", "Check deployment eligibility", "View PHA due date", "Track HIV testing currency"],
    userTypes: ["All Marines"],
    guide: [
      {
        title: "Why This Matters",
        steps: [
          {
            step: "Deployability",
            details: [
              "If you are 'Red' on your IMR, you are considered non-deployable",
              "Your name will appear on the command's non-deployment list",
              "You may be barred from schools, TAD, or certain opportunities until you are green",
            ],
          },
          {
            step: "HIPAA Protection",
            details: [
              "Your medical data is protected by HIPAA",
              "Only you and authorized medical personnel can see the specifics of your record",
            ],
          },
        ],
      },
      {
        title: "How to Check Your Status",
        steps: [
          {
            step: "Step 1: Access the Page",
            details: [
              "Log in to MOL at https://mol.tfs.usmc.mil/",
              "Navigate to Personal Info > Individual Medical Readiness (IMR)",
            ],
          },
          {
            step: "Step 2: Check Your Overall Status",
            details: [
              "Fully Medically Ready (1FMR): You are green across the board",
              "Partially Medically Ready (2PMR): You're missing something small, like a flu shot or booster",
              "Not Medically Ready (3NMR): You have a condition (like Light/Limited Duty) that prevents deployment",
              "Medical Readiness Indeterminate (4MRI): You are overdue for your big annual requirements (PHA or Dental)",
            ],
          },
          {
            step: "Step 3: Review the Details",
            details: [
              "PHA: Must be done every 365 days",
              "Dental: You must be Class 1 or 2. Class 3 means you need urgent work; Class 4 means you're overdue for an exam",
              "Immunizations: Check for 'Overdue' status on things like Tetanus or the annual Flu shot",
              "Labs: Ensure your HIV draw (required every 2 years) and DNA are on file",
            ],
          },
          {
            step: "Step 4: Print/Save",
            details: [
              "Click 'Printer Friendly' - a new window will open",
              "Click 'Print' to save as a PDF (keep this in your 'I Love Me' folder, especially before checking into a new unit)",
              "Click 'Close' to return to MOL",
            ],
          },
        ],
      },
      {
        title: "Common Pitfalls to Avoid",
        steps: [
          {
            step: "The 3-Month Overdue Rule",
            details: [
              "A PHA or Dental exam is technically 'overdue' if not finished within 3 months of your due month",
              "Don't wait until the last day",
            ],
          },
          {
            step: "MOL vs. Reality",
            details: [
              "If you just got a shot at a civilian pharmacy (like CVS) or a different base, it won't show up here automatically",
              "You must bring the documentation to your BAS or Medical Clinic to have them manually update the MRRS system",
            ],
          },
          {
            step: "HIV Draw Delays",
            details: [
              "Results for HIV tests can take 1-2 weeks to reflect in the system",
              "Don't wait until the day before a deployment to get your blood drawn",
            ],
          },
          {
            step: "Dental Class 3",
            details: [
              "If you are Dental Class 3, you are 'Red' even if you had your exam",
              "You aren't 'Green' until the actual dental work (like a cavity fill) is completed and signed off",
            ],
          },
        ],
      },
      {
        title: "What to Do After Review",
        steps: [
          {
            step: "Correcting Errors",
            details: [
              "If you see something 'Red' that you know you finished, take your yellow shot card or dental paperwork to Medical/Dental Admin",
              "They update the MRRS database, which then 'talks' to MOL",
            ],
          },
          {
            step: "Scheduling the PHA",
            details: [
              "If your PHA is overdue, complete the online Periodic Health Assessment Questionnaire (PHAQ) before calling for an appointment",
            ],
          },
          {
            step: "24-72 Hour Sync",
            details: [
              "After Medical updates your record, it usually takes 1 to 3 days for the status to flip to 'Green' on your MOL homepage",
            ],
          },
        ],
      },
    ],
  },
  "mol-pay-leave": {
    title: "Pay and Leave Summary",
    description: "Your personal dashboard for tracking your money and your 'days off' (leave). While the LES is your monthly receipt, this MOL report shows your career-long history and specific specialized leave balances. Leave is a right, but tracking it is your responsibility.",
    capabilities: ["View current pay", "View leave balances", "View earnings breakdown", "View deductions", "Track leave accrual", "View combat leave balance", "Check respite leave"],
    userTypes: ["All Marines"],
    guide: [
      {
        title: "Why This Matters",
        steps: [
          {
            step: "Your Leave Balance",
            details: [
              "If the Marine Corps thinks you have 0 days of leave when you actually have 30, you won't be able to take that vacation you planned",
              "Leave balances directly affect your ability to take time off",
            ],
          },
          {
            step: "Combat Leave Tax Benefits",
            details: [
              "If you've been in a combat zone, you earn Combat Leave which has massive tax benefits",
              "When you use Combat Leave days, they are tax-exempt",
              "If you don't ensure that leave is coded correctly, you could end up paying taxes on money that should be tax-free",
            ],
          },
        ],
      },
      {
        title: "How to Check Your Balances",
        steps: [
          {
            step: "Step 1: Access the Report",
            details: [
              "Log in to MOL at https://mol.tfs.usmc.mil/",
              "Navigate to Personal Info > Pay and Leave Summary Report",
            ],
          },
          {
            step: "Step 2: Audit Your Leave Types",
            details: [
              "Current Leave Balance: This is your 'Annual Leave.' Check your End Balance—this is what you have available to use right now",
              "Combat Leave: If you deployed to a Combat Zone Tax Exclusion (CZTE) area, check this balance. When you use these days, they are tax-exempt",
              "Respite Leave: If you've been deployed beyond normal rotation thresholds, check here for 'administrative absence' days (extra days off that don't count against your annual balance)",
            ],
          },
          {
            step: "Step 3: Review Leave Period History",
            details: [
              "Look at the From/To dates for every time you've been on leave",
              "If you see a period where you stayed home but leave was deducted, or vice-versa, flag it",
            ],
          },
          {
            step: "Step 4: Print/Save",
            details: [
              "Click 'Printer-Friendly View'",
              "Click 'Print' (or 'Save as PDF') - great document to bring to checkout if you are about to go on Terminal Leave",
              "Click 'Close' to return to the main portal",
            ],
          },
        ],
      },
      {
        title: "Common Pitfalls to Avoid",
        steps: [
          {
            step: "The Use/Lose Trap",
            details: [
              "You can only carry over 60 days of leave into the next fiscal year (October 1st)",
              "Check this report in August—if you have 70 days, you need to take 10 days of leave or you will lose them",
            ],
          },
          {
            step: "Combat Leave vs. Annual Leave",
            details: [
              "When you submit a leave request, ensure you specify if you are using Combat Leave",
              "If you don't, the system will pull from your regular Annual Leave first, and you'll miss the tax break",
            ],
          },
          {
            step: "Accrual Errors",
            details: [
              "You earn 2.5 days of leave per month",
              "If your balance hasn't gone up in three months, your pay record is likely glitched in MCTFS",
            ],
          },
          {
            step: "Pending Requests",
            details: [
              "This report shows processed leave only",
              "If you have a leave request currently sitting in your OIC's inbox, those days won't be deducted from your balance yet",
            ],
          },
        ],
      },
      {
        title: "What to Do After Review",
        steps: [
          {
            step: "Correcting the Balance",
            details: [
              "If your leave balance is wrong (e.g., you were charged twice for the same trip), take a printout of this report and your Approved Leave Request from MOL to your S-1",
            ],
          },
          {
            step: "Selling Back Leave",
            details: [
              "If you are at the end of your enlistment and want to 'sell' your leave, this report tells you exactly how many days you can cash out (up to 60 days over a career)",
            ],
          },
          {
            step: "Submit a Request",
            details: [
              "Now that you know your balance, you can go to the Leave/Lib tab in MOL to actually request your next period of absence",
            ],
          },
        ],
      },
    ],
  },
  "mol-pers-tempo": {
    title: "Pers-Tempo",
    description: "Your official record of how much time you've spent away from your home station. In the Marine Corps, we track every day you aren't in your own bed, whether you're in a fighting hole in another country or just at a training exercise a few hours away. Congress mandates this tracking to prevent burnout and ensure Marines aren't deployed excessively without compensation.",
    capabilities: ["View deployment history", "Track time deployed", "View Pers-Tempo points", "Monitor deployment tempo", "Check HDP-T eligibility", "Track dwell time"],
    userTypes: ["All Marines"],
    guide: [
      {
        title: "Why This Matters",
        steps: [
          {
            step: "Pay Eligibility",
            details: [
              "If your PersTempo exceeds certain thresholds (like being deployed for more than 220 consecutive days), you may become eligible for Hardship Duty Pay – Tempo (HDP-T)",
              "HDP-T is paid at a monthly rate set by the DoD - check the latest official pay tables for the current amount",
            ],
          },
          {
            step: "Family Benefits",
            details: [
              "These records are often used to verify eligibility for Family Separation Allowance (FSA)",
            ],
          },
          {
            step: "Dwell Time",
            details: [
              "It helps the Marine Corps calculate your 'Dwell Time'—the amount of time you should stay home before being sent out again",
              "This affects future deployment decisions and assignment planning",
            ],
          },
        ],
      },
      {
        title: "How to View Your Pace",
        steps: [
          {
            step: "Step 1: Access the Report",
            details: [
              "Log in to MOL at https://mol.tfs.usmc.mil/",
              "Navigate to Personal Info > PersTempo Report",
            ],
          },
          {
            step: "Step 2: Understand the Codes",
            details: [
              "Look for the Type Code (a 3-character identifier)",
              "WAO: Forward Presence Operations (standard deployment)",
              "WAA: Deployment (often triggers FSA)",
              "WBJ: Joint or Combined Exercise",
            ],
          },
          {
            step: "Step 3: Audit Your Dates",
            details: [
              "Ensure the 'Start Date' and 'End Date' match your actual travel dates",
              "Even a one-day error can affect your total count toward high-tempo pay",
            ],
          },
          {
            step: "Step 4: Print/Save",
            details: [
              "Click 'Printer-Friendly View'",
              "Click 'Print' (Save as PDF) - vital proof if you ever need to claim back-pay for a deployment",
              "Click 'Close' to return to the PersTempo page",
            ],
          },
        ],
      },
      {
        title: "Common Pitfalls to Avoid",
        steps: [
          {
            step: "Open Events",
            details: [
              "If a deployment ended months ago but the report shows no 'End Date,' you are still 'clocking' PersTempo in the system",
              "This can block you from being joined to new orders later",
            ],
          },
          {
            step: "Training vs. Deployment",
            details: [
              "Not all time away is a 'Deployment'",
              "Exercises (like ITX or MWX) are tracked as Non-Deployment events",
              "They still count toward your total PersTempo, but they don't count toward certain 'deployment-only' pays",
            ],
          },
          {
            step: "The 220-Day Mark",
            details: [
              "If you are approaching 220 days away, check this report daily",
              "If it isn't accurate, your HDP-T pay won't trigger automatically",
            ],
          },
          {
            step: "Leave Within Deployment",
            details: [
              "If you take 'Rest and Recuperation' (R&R) leave for more than 30 days, your consecutive day counter might reset to zero",
            ],
          },
        ],
      },
      {
        title: "What to Do After Review",
        steps: [
          {
            step: "Identify Gaps",
            details: [
              "If a major training exercise or deployment is missing, grab your TAD Orders or Voucher and go to your S-1",
              "They must run a 'PersTempo Entry' in MCTFS",
            ],
          },
          {
            step: "Watch Your LES",
            details: [
              "If your PersTempo shows you've hit a high-threshold, keep an eye on your Leave and Earnings Statement for a new line item under 'Entitlements'",
            ],
          },
          {
            step: "Check Dwell Time",
            details: [
              "Use your total days away to talk to your Career Planner about your 'Dwell' status before you volunteer for another TAD or deployment",
            ],
          },
        ],
      },
    ],
  },
  "mol-psmc": {
    title: "Personal Statement of Military Compensation (PSMC)",
    description: "One of the most eye-opening documents you can pull from MOL. While your LES shows what you take home, the PSMC shows the actual value of your service in 'civilian dollars.' Most Marines look at their base pay and think they aren't making much, but because a huge chunk of your pay (BAH and BAS) is tax-free, your actual purchasing power is much higher.",
    capabilities: ["View total compensation", "View tax advantage calculations", "View benefits value", "Print compensation statement", "Calculate grossed-up income", "Compare to civilian salary"],
    userTypes: ["All Marines"],
    guide: [
      {
        title: "Why This Matters",
        steps: [
          {
            step: "Buying a House",
            details: [
              "When you apply for a mortgage, a bank might only look at your taxable income (W-2)",
              "The PSMC proves your 'grossed-up' income, helping you qualify for a larger loan",
            ],
          },
          {
            step: "Civilian Job Hunting",
            details: [
              "If you are thinking about getting out, you shouldn't accept a civilian job that pays 'the same as your base pay'",
              "You need to find a job that pays what your PSMC says, or you will actually be taking a pay cut",
            ],
          },
        ],
      },
      {
        title: "How to View and Print Your PSMC",
        steps: [
          {
            step: "Step 1: Access the Report",
            details: [
              "Log in to MOL at https://mol.tfs.usmc.mil/",
              "Navigate to Personal Info > Personal Statement of Military Compensation",
            ],
          },
          {
            step: "Step 2: Summary View (Default)",
            details: [
              "This gives you the big-picture numbers: Basic Pay, Allowances, and the 'Tax Advantage'",
              "The Tax Advantage shows how much money you saved by not paying taxes on BAH/BAS",
            ],
          },
          {
            step: "Step 3: Detailed View",
            details: [
              "Click the 'Detailed PSMC' link at the top",
              "This breaks down 'Indirect Compensation' like the value of your medical/dental coverage (Tricare)",
              "It also shows the estimated value of using the Commissary/Exchange",
            ],
          },
          {
            step: "Step 4: Print/Save",
            details: [
              "Click 'Printer Friendly' link",
              "Click 'Print' - if the watermark or background colors don't show up, enable 'Print Background Colors and Images' in your browser settings",
              "Choose 'Save as PDF' to keep this for your mortgage lender or transition binder",
              "Click 'Close' to return to the main portal",
            ],
          },
        ],
      },
      {
        title: "Common Pitfalls to Avoid",
        steps: [
          {
            step: "Assuming It's 100% Exact",
            details: [
              "The PSMC is an estimate",
              "It doesn't always account for specific state tax laws or sudden changes in special pays (like Jump Pay or Dive Pay)",
            ],
          },
          {
            step: "The Tax Advantage Confusion",
            details: [
              "Marines often overlook the 'Federal Tax Advantage' line",
              "This represents the amount of extra gross salary a civilian would have to earn to have the same 'take-home' pay as you",
            ],
          },
          {
            step: "Browser Issues",
            details: [
              "If you are using Chrome or Edge and the report looks weird or won't print, try enabling 'Background Graphics' in your browser's print menu",
            ],
          },
          {
            step: "Ignoring Indirect Benefits",
            details: [
              "Don't ignore the 'Medical/Dental' value",
              "In the civilian world, a family health plan can cost $1,500+ a month",
              "The PSMC adds this value so you can see your true worth",
            ],
          },
        ],
      },
      {
        title: "What to Do After Review",
        steps: [
          {
            step: "Transition Planning",
            details: [
              "If you are within 18 months of EAS, bring this report to your TRS (Transition Readiness Seminar)",
              "It will help you build a realistic budget for civilian life",
            ],
          },
          {
            step: "Loan Applications",
            details: [
              "If you are applying for a car or home loan, provide the PSMC alongside your LES",
              "It gives the lender a more accurate picture of your ability to pay",
            ],
          },
          {
            step: "Financial Health Check",
            details: [
              "Compare your PSMC with your BRS/TSP Information page",
              "If your 'Total Compensation' is high but your TSP contributions are low, it might be time to increase your savings",
            ],
          },
        ],
      },
    ],
  },
  "mol-red": {
    title: "Record of Emergency Data (RED)",
    description: "The most important administrative document you will ever sign. Also known as the DD Form 93, this is the official 'In Case of Emergency' document the Marine Corps uses to notify your family if something happens to you. If you are injured or killed, the Marine Corps uses this exact page to find your next of kin.",
    capabilities: ["View emergency contacts", "Update beneficiaries", "Certify RED", "Update next of kin", "Manage death gratuity ($100K)", "Designate PADD", "Manage family addresses", "Update spouse preferred language", "Support NEO planning", "Manage parent information", "Designate pay arrears beneficiaries", "Configure do not notify", "Track private insurance policies", "Provide NOK directions", "Set MIA notification contacts", "Manage 100% rule distributions"],
    userTypes: ["All Marines"],
    guide: [
      {
        title: "Why This Matters",
        steps: [
          {
            step: "Notification",
            details: [
              "Lists who the Casualty Assistance Program should contact first if you are injured or killed",
              "Physical addresses are required - the Marine Corps sends a Casualty Assistance Calls Officer (CACO) in person",
            ],
          },
          {
            step: "Death Gratuity",
            details: [
              "Designates who receives the immediate $100,000 tax-free payment to cover funeral and travel costs",
              "This is separate from your SGLI life insurance",
            ],
          },
          {
            step: "Unpaid Pay",
            details: [
              "Ensures your final paycheck and unused leave go to the person you choose",
              "Without this designation, pay goes to the next person in line by law (which may not be who you want)",
            ],
          },
        ],
      },
      {
        title: "How to Update and Certify Your RED",
        steps: [
          {
            step: "Step 1: Access the Page",
            details: [
              "Log in to MOL at https://mol.tfs.usmc.mil/",
              "Navigate to Personal Info > Record of Emergency Data (RED)",
            ],
          },
          {
            step: "Step 2: Verify the Data",
            details: [
              "Check your spouse, children, and parents",
              "Ensure addresses and phone numbers are current",
              "Verify beneficiary designations are correct",
            ],
          },
          {
            step: "Step 3: To Update (Edit)",
            details: [
              "Click the 'Edit' link next to the section you need to change (e.g., 'Emergency Contact' or 'Beneficiary')",
              "Enter the new information",
              "Saving an edit automatically 'certifies' that section",
            ],
          },
          {
            step: "Step 4: To Certify (No Changes)",
            details: [
              "If everything is correct, click the 'Certify' button at the bottom",
              "Click 'Confirm' on the pop-up",
              "The 'Certification Date' will update once the system (MCTFS) processes it",
            ],
          },
          {
            step: "Step 5: Print/Save",
            details: [
              "Click 'Printer-Friendly View'",
              "Click 'Print' (Save as PDF) - this is a required document for every pre-deployment 'shred' or 'audit'",
            ],
          },
        ],
      },
      {
        title: "Family Information Section",
        steps: [
          {
            step: "Why Family Data Matters",
            details: [
              "If you are deployed or in a training environment, your command must know exactly where your spouse and children are",
              "In a worst-case scenario, the Marine Corps needs the current address of your family for casualty notification",
              "For Marines stationed OCONUS (like Okinawa or Iwakuni), this data is used for Non-combatant Evacuation Operations (NEO)",
              "The 'Spouse Preferred Language' field ensures translators are available if needed during emergency contact",
            ],
          },
          {
            step: "Understanding Status Indicators",
            details: [
              "Bold text means a change is pending and hasn't posted to MCTFS yet",
              "Red text means a record is marked for removal",
              "Normal text means the data is current and certified",
            ],
          },
        ],
      },
      {
        title: "Managing Family Addresses",
        steps: [
          {
            step: "Mailing Address",
            details: [
              "Click 'Edit Address' under Mailing Address to change where you receive mail",
              "If the link is missing, go to the Personal Contact Information page in MOL",
            ],
          },
          {
            step: "Spouse/Child Address (Separate Locations)",
            details: [
              "If your family does not live with you (e.g., you are on a Geobachelor tour), click 'Edit Address' next to their name",
              "Provide their specific physical location - not just 'same as mine'",
              "This is critical for casualty notification and evacuation planning",
            ],
          },
          {
            step: "Syncing Addresses",
            details: [
              "If a child moves back in with your spouse, click 'Use Spouse Address' to quickly sync the child's record",
              "This prevents having to re-enter the same address multiple times",
            ],
          },
          {
            step: "Transaction Details",
            details: [
              "If you see a bold entry and can't remember what you changed, click 'Details'",
              "This shows a side-by-side comparison of old vs. new data",
            ],
          },
        ],
      },
      {
        title: "Editing U.S. Addresses",
        steps: [
          {
            step: "Step 1: Format Selection",
            details: [
              "Click 'Reformat This Address' if the boxes don't match a standard U.S. street address",
            ],
          },
          {
            step: "Step 2: Street Address",
            details: [
              "Type the physical street address - avoid PO Boxes for family physical locations",
            ],
          },
          {
            step: "Step 3: State/City/County Sequence (Critical)",
            details: [
              "Select the State first - this 'unlocks' the City list",
              "Select the City from the dropdown",
              "Once the city is selected, the County field will populate",
              "If a city spans multiple counties (like Dallas, TX), you must select the correct one",
              "County selection is important for local emergency services and legal jurisdiction",
            ],
          },
          {
            step: "Step 4: Zip Code",
            details: [
              "Enter the 5 or 9-digit Zip Code",
              "Click 'Submit Changes', then 'Apply Changes'",
            ],
          },
        ],
      },
      {
        title: "Editing Foreign Addresses",
        steps: [
          {
            step: "Step 1: Select Foreign Format",
            details: [
              "Click the 'Foreign (Non-APO/FPO Address)' link",
              "This is for family members living overseas not at a military installation",
            ],
          },
          {
            step: "Step 2: Location Selection",
            details: [
              "Select the Country first to populate the City list",
              "Select the appropriate City from the dropdown",
            ],
          },
          {
            step: "Step 3: Address Details",
            details: [
              "Type the full foreign address in the boxes provided",
              "Follow that country's local format for best results",
              "Click 'Submit Changes', then 'Apply Changes'",
            ],
          },
        ],
      },
      {
        title: "Spouse and Child Data",
        steps: [
          {
            step: "Preferred Language",
            details: [
              "If your spouse speaks a language other than English as their primary language, click 'Add/Edit Spouse Preferred Language'",
              "This is critical for casualty or emergency notifications",
              "The Marine Corps can send a representative who speaks their language or provide a translator",
            ],
          },
          {
            step: "Removing Records",
            details: [
              "Click 'Remove Child' or 'Remove Spouse' only in the event of legal changes (divorce or loss of dependency)",
              "For Marines, adding a spouse or child must be done through IPAC/S-1 with legal documentation (marriage/birth certificates)",
              "Address updates can be done here by the individual Marine",
            ],
          },
          {
            step: "Canceling Changes",
            details: [
              "If you made a mistake, click 'Cancel Pending Transaction' before the change posts to MCTFS",
              "If a record is marked in red for removal, click 'Cancel Removal' to stop the deletion",
            ],
          },
        ],
      },
      {
        title: "Common Pitfalls to Avoid",
        steps: [
          {
            step: "The SGLI Trap",
            details: [
              "Updating your RED does NOT update your SGLI (Life Insurance)",
              "You must go to milConnect (SOES) to change your life insurance beneficiaries",
              "These are two separate systems - update BOTH",
            ],
          },
          {
            step: "PO Boxes",
            details: [
              "Do NOT use a PO Box for emergency notification addresses",
              "The Marine Corps needs a physical address where a CACO can find your family",
            ],
          },
          {
            step: "The Ex-Spouse Error",
            details: [
              "If you get divorced and don't update this page, your $100,000 death gratuity will legally go to your ex-spouse",
              "This is true regardless of what your will says",
              "Update immediately after any change in marital status",
            ],
          },
          {
            step: "The Geobachelor Gap",
            details: [
              "Many Marines forget to update their family's address when they go on Unaccompanied orders",
              "Ensure your spouse's actual physical location is listed, not just your current barracks",
              "Do not assume your spouse's address is updated just because yours is",
            ],
          },
          {
            step: "Pending vs. Posted",
            details: [
              "Changes take 24-48 hours to process through MCTFS",
              "Do not re-submit the same change if you see it in bold - it's already in the queue",
              "Bold text returning to normal means the change has posted",
            ],
          },
          {
            step: "Remove vs. Edit",
            details: [
              "Do not 'Remove' a spouse because they moved - use 'Edit Address' instead",
              "'Remove' should only be used if the person is no longer your legal dependent (divorce, age-out)",
            ],
          },
          {
            step: "The City First Mistake",
            details: [
              "You cannot type a city name and expect the state to appear",
              "You must select the State first for the system to filter the correct cities",
            ],
          },
          {
            step: "County Confusion",
            details: [
              "Many Marines ignore the County field or leave the default",
              "If your family lives in an area where the city is in two counties, choosing the wrong one can cause administrative delays during a crisis",
            ],
          },
          {
            step: "Browser Timeouts",
            details: [
              "If you take too long to find an address, MOL may time out",
              "Have all your family's zip codes and county names ready before you start",
            ],
          },
        ],
      },
      {
        title: "What Happens After You Finish",
        steps: [
          {
            step: "MCTFS Processing",
            details: [
              "It usually takes 24-48 hours for your certification to post",
              "Once it does, the red 'Out of Date' flag on your MOL homepage will disappear",
              "Check that bold text has returned to normal to confirm processing",
            ],
          },
          {
            step: "Verify the PADD",
            details: [
              "Navigate to the PADD (Person Authorized to Direct Disposition) section",
              "Ensure the correct person is designated to handle final arrangements",
              "This is the person you trust to make your funeral decisions",
            ],
          },
          {
            step: "Audit Your SGLI",
            details: [
              "Go to milConnect and check your SGLI Online Enrollment System (SOES)",
              "Ensure your life insurance beneficiaries match your current family status",
              "Your SGLV 8286 should align with your RED designations",
            ],
          },
        ],
      },
      {
        title: "Spouse Preferred Language",
        steps: [
          {
            step: "Why This Setting Matters",
            details: [
              "If a Casualty Assistance Calls Officer (CACO) is dispatched to your home, the Marine Corps uses this data to ensure they have a translator or can communicate in your spouse's primary language",
              "During natural disasters or NEO evacuations, your command needs to provide instructions your spouse can understand immediately",
              "This helps the Marine Corps honor your family's background by ensuring they aren't left in the dark due to a language barrier",
            ],
          },
          {
            step: "How to Set the Language",
            details: [
              "On the RED Family Information page, click 'Add Spouse Preferred Language' or 'Edit Spouse Preferred Language'",
              "Select the correct language from the Preferred Language dropdown menu",
              "Click 'Submit Changes'",
              "Review the selection and click 'Apply Changes' to save",
              "If you made a mistake, click 'Cancel' to return without saving",
            ],
          },
          {
            step: "Spouse Language Pitfalls",
            details: [
              "Many Marines leave this blank assuming English is 'fine' - if your spouse is more comfortable in their native tongue for complex or emotional matters, list that language",
              "After applying changes, the language appears in bold (Pending) for 24-48 hours while MCTFS processes",
              "This is for your spouse - your own language skills are tracked in Self-Professed Language Skills or Operational Cultural Information",
            ],
          },
          {
            step: "After Setting the Language",
            details: [
              "Once bold text turns normal, your spouse's preferred language is officially part of your certified RED",
              "If your spouse's language is rare, mention this to your Unit's Family Readiness Officer (FRO)",
              "Check if you have also listed that language in your Operational Cultural Information Report if you speak it",
            ],
          },
        ],
      },
      {
        title: "Parents Information",
        steps: [
          {
            step: "Why Parent Data Matters",
            details: [
              "While a spouse is typically the Primary Next of Kin (PNOK), parents are Secondary Next of Kin and still entitled to official notification",
              "For deceased or missing Marines, a uniformed CACO is dispatched to the parents' address",
              "If the address is outdated, the Marine Corps may be forced to search for them or deliver news telephonically - not the standard of care your family deserves",
              "Even if married, your parents are often assigned their own CACO if they live in a different state",
            ],
          },
          {
            step: "Parent Status Indicators",
            details: [
              "Normal Text: Active record",
              "Bold Text: Recent change (Pending)",
              "'D' Indicator: Parent is officially listed as deceased in MCTFS",
            ],
          },
          {
            step: "Managing Parent Records",
            details: [
              "Click 'Edit' next to a parent's name to update their physical address or phone number",
              "Click 'Remove This Address' if a parent has moved and you don't have their new location yet",
              "Removing the address does not remove the parent from your record - it only clears the address field",
              "Click 'Cancel Removal' if you accidentally marked an address for removal",
            ],
          },
          {
            step: "Updating a Deceased Parent",
            details: [
              "Check the 'Deceased' box next to the parent's name",
              "Click 'Submit Changes' - the system automatically removes any existing address records",
              "This prevents the Marine Corps from attempting to locate them during a crisis",
            ],
          },
          {
            step: "U.S. Parent Address",
            details: [
              "Click 'Reformat This Address' if the boxes don't match a standard U.S. address format",
              "Type the street address - do not use any punctuation (commas, periods, or dashes)",
              "If using a PO Box or Rural Route, you must also provide physical directions on the Next of Kin Directions page",
              "Type the city, two-letter state initials, and 5 or 9-digit Zip Code",
            ],
          },
          {
            step: "International Parent Address",
            details: [
              "Click 'Reformat This Address' to configure boxes for foreign (non APO/FPO) listing",
              "Type the full address as it appears in that country - no punctuation",
            ],
          },
          {
            step: "Parent Information Pitfalls",
            details: [
              "If you are estranged or don't know a parent's location, type 'Unknown' in the address field - do not leave it blank",
              "Ensure you distinguish between Parent One, Parent Two, and Step-Parents - CACO prioritizes biological/adoptive parents unless you specify otherwise in the Remarks section",
              "If a parent is in extremely poor health (dementia, heart condition), use the 'Do Not Notify' section to prevent stressful notification",
              "MCTFS often rejects entries with punctuation - type '123 Main St Apt 4' not '123 Main St., Apt. #4'",
            ],
          },
        ],
      },
      {
        title: "Pay Arrears (Unpaid Pay and Allowances)",
        steps: [
          {
            step: "What Pay Arrears Includes",
            details: [
              "Unpaid Salary: Any base pay earned but not yet deposited",
              "Unused Leave: Payment for accrued leave days (up to 60 days)",
              "Allowances: Unpaid BAH, BAS, or specialized pays (Jump Pay, Sea Pay, etc.)",
              "Travel Reimbursements: Any pending travel claims from PCS or TAD",
              "This is NOT your life insurance (SGLI) - that is handled separately via milConnect",
            ],
          },
          {
            step: "The 100% Rule",
            details: [
              "The total of all beneficiaries must equal exactly 100%",
              "If you have one person at 50% and no one else listed, the remaining 50% is distributed by law, not your preference",
              "You cannot save a new beneficiary if your current list already totals 100%",
              "You must first edit an existing person (e.g., change 100% to 50%) to free up percentage points",
            ],
          },
          {
            step: "Adding or Editing a Beneficiary",
            details: [
              "Locate the 'Beneficiary(ies) Unpaid Pay/Allowances' section on your RED",
              "Click 'Add New Pay Arrears Record'",
              "Enter the beneficiary's full legal name, relationship, address, and percentage",
              "Click 'Submit' and then 'Apply Changes'",
            ],
          },
          {
            step: "Address Formatting (No Punctuation Rule)",
            details: [
              "Type '123 Main St Apt 4' instead of '123 Main St., Apt. #4'",
              "Use two-letter state initials (CA, NC)",
              "If using a PO Box, you must also provide physical directions on the Next of Kin Directions page",
              "For foreign addresses, click 'Reformat This Address' and type without punctuation",
            ],
          },
          {
            step: "Removing or Canceling",
            details: [
              "Click 'Remove' next to a beneficiary - the name turns red with strikethrough",
              "Click 'Cancel Removal' before the transaction processes to restore the record",
              "Click 'Remove This Address' to clear an address while keeping the beneficiary valid",
            ],
          },
          {
            step: "Pay Arrears Pitfalls",
            details: [
              "If your beneficiary moves and you don't update, the check is mailed to the old address - significant delays for your family",
              "Don't confuse Pay Arrears with Death Gratuity ($100,000) or SGLI (Life Insurance) - these are three separate systems",
              "Bold text means pending (24-48 hours), red text means it's about to be deleted",
              "If your Pay Arrears beneficiary is the same as your PADD, ensure addresses match exactly in both sections",
            ],
          },
          {
            step: "After Updating Pay Arrears",
            details: [
              "Verify your percentages add up to exactly 100% on the main RED page",
              "Check Death Gratuity designation for the larger $100,000 sum",
              "Audit annually - check this page every time you have a life event (marriage, birth, divorce)",
              "Verify on your Basic Individual Record (BIR) in two days that changes are reflected",
            ],
          },
        ],
      },
      {
        title: "Do Not Notify Information",
        steps: [
          {
            step: "Why This Feature Exists",
            details: [
              "Protects vulnerable family members from the sudden shock of casualty notification",
              "If a parent has severe heart condition, advanced dementia, or is hospitalized, a sudden CACO visit could cause a medical crisis",
              "Allows you to tell the Marine Corps: 'Do not go to this person directly - go to this other person first so they can break the news gently'",
              "This does not mean the person will never find out - it ensures they are told by a loved one rather than a stranger in uniform",
            ],
          },
          {
            step: "Adding a Do Not Notify Record",
            details: [
              "Click 'Add New Do Not Notify Record'",
              "Provide the name of the person who should NOT be notified directly",
              "Provide the reason (e.g., 'Heart condition', 'Advanced age/Dementia')",
              "Provide the name and contact info of the person who SHOULD be contacted to handle the notification",
            ],
          },
          {
            step: "Managing Records",
            details: [
              "Click 'Details' to see the full context of a record",
              "Click 'Edit' to update a phone number for the intermediary contact",
              "Click 'Remove' if a family member's health improves - text turns red with strikethrough",
              "Click 'Cancel Removal' if you accidentally clicked remove (within 24-48 hours)",
            ],
          },
          {
            step: "Address Formatting",
            details: [
              "Click 'Reformat This Address' to toggle between U.S. and Foreign address structures",
              "Do not use periods, commas, or dashes - type '123 Main St Apt 4' not '123 Main St., Apt. #4'",
              "Enter Street, City, State (initials only), and Zip Code for U.S. addresses",
            ],
          },
          {
            step: "Who Should Be on This List",
            details: [
              "Medical Frailty: Grandparent or parent with history of heart failure or stroke",
              "Mental Health: Family member currently in psychiatric facility or severe mental health crisis",
              "Dementia/Alzheimer's: Relative who would not understand and might become dangerously agitated",
              "This is NOT primarily for people you are estranged from - it's for medical safety",
            ],
          },
          {
            step: "Do Not Notify Pitfalls",
            details: [
              "Simply putting someone on this list is only half the job - you must identify who SHOULD break the news in your NOK or PADD section",
              "Even though you're requesting 'No Notification,' the Marine Corps still needs their address for complete family records",
              "Clicking 'Remove This Address' only deletes the location, not the instruction - use 'Remove' to clear the whole instruction",
              "Changes appear in bold for 24-48 hours while pending",
            ],
          },
          {
            step: "After Adding Do Not Notify",
            details: [
              "Inform the intermediary that they are listed on your RED and what their role would be",
              "Check the 'Directions' section if the notify-instead person lives in a rural or hard-to-find area",
              "Audit annually - if a parent recovers, remove them so they can receive direct notification with honor",
            ],
          },
        ],
      },
      {
        title: "Insurance Information (Private Policies)",
        steps: [
          {
            step: "Why Private Insurance Matters",
            details: [
              "When a CACO sits down with your family, they use this list to help identify which insurance companies to call",
              "If a policy isn't listed here, your family might not know it exists - leaving thousands unclaimed",
              "This consolidates USAA, Navy Federal, civilian employer policies, etc. into one official military record",
              "Having policy numbers pre-loaded allows the CACO to help start claims within days",
              "This is SEPARATE from SGLI - do NOT list your SGLI here (that's managed via milConnect SOES)",
            ],
          },
          {
            step: "Managing Insurance Records (Up to 5 Policies)",
            details: [
              "Click 'Add New Insurance Record'",
              "Provide: Insurance Company Name, Policy Number, Company Address and Phone Number",
              "Click 'Edit' to update if coverage amount changes or company merges/changes name",
              "Click 'Remove' to delete an expired or cancelled policy",
              "Click 'Cancel Removal' before the 24-48 hour sync window closes if you made a mistake",
            ],
          },
          {
            step: "The 25-Character Constraint",
            details: [
              "MOL limits this field to a maximum of 25 characters",
              "Prioritize the Policy Number - company names are easy to guess, policy numbers are unique and vital",
              "Abbreviate heavily: 'Northwestern Mutual 555-1234' becomes 'NW Mut5551234'",
              "Example: 'State Farm Insurance 987654' becomes 'StateFrm987654'",
              "Keep at least 4-5 letters of company name so it's recognizable",
              "Avoid using #, -, or . as they take up valuable character spaces",
            ],
          },
          {
            step: "Insurance Pitfalls",
            details: [
              "Don't just write 'MetLife' - specify the branch or policy type if possible",
              "If you renew a term-life policy and get a new number, you must update it here",
              "An incorrect policy number can delay a claim for months",
              "This information is viewable by S-1 and command leadership - include only what's necessary for claims",
            ],
          },
          {
            step: "After Updating Insurance",
            details: [
              "Check SGLI/SOES on milConnect to ensure military insurance beneficiaries are also current",
              "Inform your beneficiaries where you keep original hard-copy documents - MOL is the 'pointer' but they'll need actual papers",
              "Verify on BIR in 48 hours that carriers are listed in the Insurance section",
              "Make sure your PADD knows these policies exist",
            ],
          },
        ],
      },
      {
        title: "Next of Kin (NOK) Contact Information",
        steps: [
          {
            step: "Why NOK Data Is Critical",
            details: [
              "The Marine Corps has a strict 8-hour goal to notify your family in person after a casualty",
              "Primary Next of Kin (PNOK): First person contacted - spouse if married, parents if single",
              "Secondary Next of Kin (SNOK): Other relatives or close friends who should be notified",
              "For deaths, a uniformed CACO is sent to the address you provide - wrong address means delayed notification",
              "Wrong addresses often lead to families hearing news through social media first - a situation the Marine Corps works to avoid",
            ],
          },
          {
            step: "Managing NOK Records (Up to 3)",
            details: [
              "Click 'Add Next of Kin Record' (up to three) or 'Edit' an existing one",
              "Ensure your PNOK is listed first",
              "Provide a valid physical address and 24-hour phone number",
              "Click 'Remove' to delete someone (divorce, estrangement) - text turns red until processed",
              "Click 'Apply Changes' to send update to MCTFS",
            ],
          },
          {
            step: "Phone Number Formatting",
            details: [
              "Click 'reformat this phone' to toggle between U.S. and Overseas formats",
              "U.S. Format: 10 digits (Area Code + Number)",
              "Overseas Format: Up to 15 digits (Country Code + City Code + Number)",
              "Provide a 24-hour contact number",
              "Include extension in the extension box only for office extensions (e.g., x102)",
              "For foreign numbers, verify correct prefix at countrycallingcodes.com",
            ],
          },
          {
            step: "Relationship Hierarchy",
            details: [
              "The 'Relationship' you select defines the legal order of notification",
              "Select accurately: Spouse, Mother, Father, Sibling, etc.",
              "Spouse is Primary Next of Kin (PNOK) for married Marines",
              "Parents are usually PNOK for single Marines",
            ],
          },
          {
            step: "NOK Pitfalls",
            details: [
              "Update this every time you move or your family moves - avoid the 'Social Media Risk'",
              "Don't use periods or commas in addresses - use '123 Main St Apt 4' not '123 Main St., Apt. 4'",
              "Don't put last four digits of phone in extension box - that's only for office extensions",
              "Ensure phone here matches number in RED Family Information section",
              "Bold text takes 24-48 hours to return to normal while syncing",
            ],
          },
          {
            step: "After Updating NOK",
            details: [
              "Audit your PADD to ensure correct person handles funeral honors",
              "If NOK is a spouse who recently moved, update DEERS via local ID card office",
              "Review 'Do Not Notify' list if any NOK has severe health issues",
              "Check BTR in two days to verify relationship and phone migrated correctly",
            ],
          },
        ],
      },
      {
        title: "Next of Kin Directions (The CACO Map)",
        steps: [
          {
            step: "Why Directions Matter",
            details: [
              "A CACO's mission is to deliver news in person with dignity and speed - they don't want to be stuck at a locked gate",
              "The Marine Corps cannot deliver notification to a PO Box - directions are the ONLY way they'll know which house is your family's",
              "GPS often fails in rural 'back-country' areas - landmarks are more reliable than digital maps",
              "A CACO may arrive at 02:00 in a city they don't know - your directions prevent wasted time when minutes count",
            ],
          },
          {
            step: "Writing Effective Directions (5 Boxes, 35 Characters Each)",
            details: [
              "Don't waste space with directions from the interstate - start from nearest major landmark or neighborhood entrance",
              "Do not use special characters like &, #, or @ - MCTFS often crashes on these",
              "Example: 'Gatcode 1234 Apt 2B back of bldg'",
              "For PO Box/Rural: Describe physical house - 'White house with red door on Rt 9'",
              "For Overseas: Include local phone number in direction boxes as backup",
            ],
          },
          {
            step: "Specific Scenarios",
            details: [
              "Gated Community: Provide gate code or call box instructions",
              "Rural Area: Use landmarks - 'Turn left at the red barn, third house on right with gravel driveway'",
              "Apartment Complex: 'Gate code is 1234, Apartment 4B is in back left corner of complex'",
              "PO Box Users: MUST provide physical location description here",
            ],
          },
          {
            step: "Directions Pitfalls",
            details: [
              "Using symbols like & or % can cause MCTFS to reject - use 'and' or omit",
              "'Third house on the left' is vague at night - use 'Third house on left, brown fence'",
              "Don't think a phone number is enough - the goal is IN-PERSON notification",
              "Bold text appears for 24-48 hours while syncing",
            ],
          },
          {
            step: "After Writing Directions",
            details: [
              "Test: Read your 175 characters to a friend - if they can't visualize it, rewrite for clarity",
              "Verify on BTR in two days that NOK Directions section reflects your input",
              "If the person is also your PADD, you've secured the most critical part of your emergency data",
            ],
          },
        ],
      },
      {
        title: "MIA Notification Information",
        steps: [
          {
            step: "Why MIA Designation Is Different",
            details: [
              "Missing in Action status involves long-term uncertainty, legal shifts in pay status, and media interest",
              "A dedicated CACO is assigned who specializes in long-term cases as official liaison between family and DoD",
              "This designated person is authorized to receive sensitive updates regarding search and recovery efforts",
              "Your pay continues to accrue during MIA status - this person handles administrative issues",
            ],
          },
          {
            step: "Managing MIA Records",
            details: [
              "Click 'Add New MIA Notify Record'",
              "Provide full legal name, relationship, 24-hour phone number, and physical directions to residence",
              "Click 'Edit' if your designated person moves or changes their number",
              "Click 'Remove' to designate a different person",
              "Changes appear in bold for 24-48 hours while pending",
            ],
          },
          {
            step: "Required Information",
            details: [
              "Name: Full legal name (First, Middle Initial, Last)",
              "Directions: 5 lines of 35 characters each for physical location",
              "If PO Box/Rural: Describe physical house (e.g., '3rd house past grain silo, green mailbox')",
              "If Overseas: Include international phone number in direction boxes as backup",
              "Phone Numbers: Provide TWO different numbers if possible (Cell + Work, or Cell + Home)",
              "Include area code for all U.S. numbers",
            ],
          },
          {
            step: "MIA Pitfalls",
            details: [
              "Don't leave this blank assuming NOK section covers it - systems pull from this specific field for MIA cases",
              "Don't type 'Same as Next of Kin' in directions - automated systems may not read that instruction",
              "Avoid periods and commas - use 'Apt 4' not 'Apt. #4'",
              "Don't leave second phone box blank if there's any other way to reach family",
              "Ensure the person you list can handle potential media scrutiny - MIA cases attract public attention",
            ],
          },
          {
            step: "After Updating MIA",
            details: [
              "Inform the contact that they are your MIA Notify person and would receive official DoD updates",
              "Coordinate with your PADD - often the same person for both roles",
              "Review Pay Arrears section since pay continues during MIA status",
              "Verify on BTR in two business days that MIA section is populated correctly",
            ],
          },
        ],
      },
      {
        title: "Death Gratuity Information ($100,000)",
        steps: [
          {
            step: "Purpose of the Death Gratuity",
            details: [
              "A $100,000 tax-free payment made by DoD to your survivors within days of death",
              "Unlike SGLI (which can take weeks), this is designed as immediate cash injection for your family",
              "Covers travel for funeral, housing costs, and urgent expenses before other benefits kick in",
              "By law, automatically directed to surviving spouse or children unless you designate Additional Beneficiaries",
            ],
          },
          {
            step: "Managing Death Gratuity Beneficiaries",
            details: [
              "Check the main RED page to see who is currently listed",
              "You generally cannot edit a spouse's info here - that must be done via DEERS/IPAC",
              "Click 'Add Additional Death Gratuity Record' to add beneficiaries",
              "Provide full legal name, relationship, and specific percentage (e.g., 50% Mom, 50% Dad)",
              "Click 'Edit' if an additional beneficiary has moved or changed phone number",
              "Click 'Remove' to delete - turns red to show marked for deletion",
              "Click 'Cancel Removal' if you made a mistake",
            ],
          },
          {
            step: "The 100% Rule and By-Law Distribution",
            details: [
              "Total percentages among additional beneficiaries must equal exactly 100%",
              "If designations don't total 100%, system reverts remainder to 'By-Law' status",
              "'By-Law' means government decides based on standard line of succession - not your choice",
              "If you're married and designate anyone other than spouse, system triggers official notification to your command",
              "Your CO will then be required to inform your spouse of your decision",
              "You can list up to 10 additional beneficiaries",
            ],
          },
          {
            step: "Address and Phone Formatting",
            details: [
              "Use 'Reformat This Address' to switch between U.S. and Foreign layouts",
              "Do not use periods or commas - type '123 Main St Apt 4' not '123 Main St., Apt. #4'",
              "U.S.: Street, city, 2-letter state initials, Zip Code",
              "Foreign: Type address as it appears locally, include Country Code and City Code for phone",
              "Phone must be 24-hour contact - Area Code-Prefix-Suffix format for U.S.",
            ],
          },
          {
            step: "Death Gratuity Pitfalls",
            details: [
              "Don't confuse with SGLI - SGLI is up to $500,000 (you pay for it), Death Gratuity is flat $100,000 (government provides)",
              "Updates appear in bold for 24-48 hours while MCTFS processes",
              "If beneficiaries add up to 99%, the remaining 1% triggers By-Law distribution - complicates entire payout",
              "For minor children, money may be held in trust or require legal guardian - delays 'immediate' nature",
              "Outdated phone numbers mean money stays in government account instead of family's hands",
              "MCTFS rejects entries with dashes in phone or periods in address",
            ],
          },
          {
            step: "After Updating Death Gratuity",
            details: [
              "Double-check that percentages equal exactly 100%",
              "Review PADD section - person receiving $100,000 is often best person to handle funeral arrangements",
              "Death Gratuity provides cash for funeral, so coordinate PADD and beneficiary designations",
              "Verify on BIR in two days that Death Gratuity section reflects your designations",
            ],
          },
        ],
      },
      {
        title: "Person Authorized to Direct Disposition (PADD)",
        steps: [
          {
            step: "Why PADD Is Your Most Important Legal Designation",
            details: [
              "The PADD is the ONLY person legally authorized by DoD to make decisions regarding your remains",
              "Without a designated PADD, funeral arrangements can be delayed by weeks if family members disagree",
              "Your PADD decides: level of military honors, type of headstone, final resting place (private vs Arlington)",
              "Marine Corps provides PADD with specific allowances and a CACO to navigate funeral logistics",
            ],
          },
          {
            step: "The Default Order of Precedence (If You Leave PADD Blank)",
            details: [
              "1. Unremarried Surviving Spouse",
              "2. Children (in order of seniority)",
              "3. Parents (in order of seniority)",
              "4. Siblings (in order of seniority)",
              "5. Grandparents / Other Relatives",
              "By designating a PADD, you choose exactly who takes charge regardless of their position in this list",
            ],
          },
          {
            step: "Designating Your PADD",
            details: [
              "Locate the PADD section on your RED",
              "Click the 'Edit' link to open the Update RED PADD page",
              "Most Marines choose their Primary Next of Kin (Spouse or Parent), but you can designate any adult",
              "The person must be legally competent and reachable",
              "PADD must be at least 18 years old - enter their DOB in DD MMM YYYY format (e.g., 04 JUL 1990)",
              "Ensure name, address, and 24-hour phone number are 100% accurate",
              "Click 'Submit Changes' and then 'Apply Changes'",
            ],
          },
          {
            step: "Address Format Requirements",
            details: [
              "Use 'Reformat This Address' to switch between U.S., APO/FPO, and Foreign layouts",
              "U.S. Address: Use 2-letter state initials and Zip+4 code (9 digits)",
              "APO/FPO: Enter PSC/Box or Unit/UIC, select correct region (AA, AE, or AP)",
              "Foreign: Provide full address as formatted in that country",
              "No punctuation - type '123 Main St Apt 4' not '123 Main St., Apt. #4'",
              "If you don't know Zip+4, look it up on USPS website - system often requires full 9 digits",
            ],
          },
          {
            step: "PADD Pitfalls",
            details: [
              "You can only name ONE PADD - you cannot name 'My Mom and Dad'",
              "If you don't choose, law follows strict order of precedence which may not match your family dynamic",
              "If PADD is same as Primary Next of Kin, ensure addresses match exactly in both sections",
              "DOB format matters - type '02 JAN 1980' not '01/02/1980' or system may reject",
              "After 'Apply Changes', system returns to MOL Home Page - this is normal",
              "PADD appears in bold until certified (24-48 hours) - not legally valid until bold disappears",
              "Click 'Details' link to verify exactly what was submitted",
            ],
          },
          {
            step: "After Designating PADD",
            details: [
              "Have 'The Talk' - ensure the person KNOWS they are PADD and discuss your burial vs cremation wishes",
              "Discuss your preferred location for final honors",
              "Coordinate finances - PADD handles funeral costs (Marine Corps reimburses later)",
              "Ensure PADD is also listed in Death Gratuity or Pay Arrears for immediate funds",
              "Confirm PADD is comfortable with responsibility and has valid ID to access military installations",
              "Verify on BTR in two business days that PADD section is no longer 'Pending'",
              "Final RED Review - once PADD is set, review entire RED for any other bold (pending) text",
            ],
          },
        ],
      },
    ],
  },
  "mol-red-family": {
    title: "RED Family Information",
    description: "Update spouse and dependent information in your Record of Emergency Data. This section ensures the Marine Corps can locate and notify your family members in case of emergency, and properly manage benefits and evacuation planning.",
    capabilities: ["Update spouse information", "Add/edit dependent children", "Manage family addresses", "Set spouse preferred language", "Update contact numbers", "Support NEO planning"],
    userTypes: ["All Marines"],
    guide: [
      {
        title: "Why This Matters",
        steps: [
          {
            step: "Emergency Notification",
            details: [
              "Your spouse is typically the Primary Next of Kin (PNOK) and will be contacted first in any emergency",
              "Physical addresses are required - the Marine Corps sends a Casualty Assistance Calls Officer (CACO) in person",
              "Outdated addresses delay critical notifications to your family",
            ],
          },
          {
            step: "NEO Planning",
            details: [
              "If stationed overseas, family address data supports Noncombatant Evacuation Operations (NEO)",
              "Accurate dependent information ensures your family is accounted for during evacuations",
            ],
          },
        ],
      },
      {
        title: "Updating Spouse Information",
        steps: [
          { step: "Log in to MOL at https://mol.tfs.usmc.mil/" },
          { step: "Navigate to Personal Info > Record of Emergency Data (RED) > Family Information" },
          { step: "Click 'Edit' next to your spouse's name to update address or phone" },
          { step: "Verify all contact information is current and accurate" },
          { step: "Click 'Submit Changes', then 'Apply Changes'" },
        ],
      },
      {
        title: "Managing Children",
        steps: [
          {
            step: "Adding Children",
            details: [
              "Click 'Add Child' to add a new dependent",
              "Enter full legal name, date of birth, and relationship",
              "Provide current physical address if different from yours",
            ],
          },
          {
            step: "Child Address Sync",
            details: [
              "If a child lives with your spouse, click 'Use Spouse Address' to sync",
              "If a child lives elsewhere (college, with relatives), enter their specific address",
            ],
          },
        ],
      },
      {
        title: "Spouse Preferred Language",
        steps: [
          {
            step: "Why It Matters",
            details: [
              "If your spouse is more comfortable receiving critical news in their native language, set this preference",
              "The CACO will attempt to arrange interpreter services for notification",
            ],
          },
          { step: "Click 'Add Spouse Preferred Language' or 'Edit Spouse Preferred Language'" },
          { step: "Select the correct language from the dropdown" },
          { step: "Submit and apply changes" },
        ],
      },
      {
        title: "Common Pitfalls",
        steps: [
          {
            step: "Outdated Addresses",
            details: [
              "Family members move frequently - verify addresses after every PCS",
              "Use physical street addresses, not PO Boxes, for emergency notification",
            ],
          },
          {
            step: "Missing Phone Numbers",
            details: [
              "Include cell phone numbers - landlines are less reliable for urgent contact",
              "Update numbers immediately when family members change phones",
            ],
          },
        ],
      },
    ],
  },
  "mol-red-parents": {
    title: "RED Parents Information",
    description: "Update parent contact and beneficiary details in your Record of Emergency Data. Parents are Secondary Next of Kin and entitled to official notification even if you are married.",
    capabilities: ["Update parent addresses", "Mark parent as deceased", "Edit contact information", "Manage step-parent records", "Update international addresses"],
    userTypes: ["All Marines"],
    guide: [
      {
        title: "Why This Matters",
        steps: [
          {
            step: "Notification Rights",
            details: [
              "Parents are Secondary Next of Kin and entitled to official notification",
              "A uniformed CACO is dispatched to parents' addresses for deceased or missing Marines",
              "Even if married, parents are often assigned their own CACO if they live in a different state",
            ],
          },
          {
            step: "Address Accuracy",
            details: [
              "If the address is outdated, the Marine Corps may have to search for parents or deliver news telephonically",
              "This is not the standard of care your family deserves during a crisis",
            ],
          },
        ],
      },
      {
        title: "Managing Parent Records",
        steps: [
          { step: "Log in to MOL and navigate to RED > Parents Information" },
          { step: "Click 'Edit' next to a parent's name to update address or phone" },
          { step: "Click 'Remove This Address' if parent has moved and you don't have new location" },
          { step: "Click 'Cancel Removal' if you accidentally marked an address for removal" },
        ],
      },
      {
        title: "Recording a Deceased Parent",
        steps: [
          { step: "Check the 'Deceased' box next to the parent's name" },
          { step: "Click 'Submit Changes' - the system automatically removes any existing address records" },
          { step: "This prevents the Marine Corps from attempting to locate them during a crisis" },
        ],
      },
      {
        title: "Address Entry Tips",
        steps: [
          {
            step: "U.S. Addresses",
            details: [
              "Do not use punctuation (commas, periods, or dashes)",
              "If using PO Box or Rural Route, also provide physical directions on NOK Directions page",
            ],
          },
          {
            step: "International Addresses",
            details: [
              "Click 'Reformat This Address' to configure for foreign listing",
              "Type the full address as it appears in that country - no punctuation",
            ],
          },
        ],
      },
      {
        title: "Common Pitfalls",
        steps: [
          {
            step: "Unknown Parent Location",
            details: [
              "If estranged or don't know location, type 'Unknown' in address field - do not leave blank",
            ],
          },
          {
            step: "Step-Parents",
            details: [
              "Distinguish between biological/adoptive parents and step-parents",
              "CACO prioritizes biological/adoptive parents unless specified otherwise in Remarks",
            ],
          },
          {
            step: "Health Concerns",
            details: [
              "If a parent has dementia or heart condition, use 'Do Not Notify' section to prevent stressful notification",
            ],
          },
        ],
      },
    ],
  },
  "mol-red-nok": {
    title: "RED Next of Kin (NOK)",
    description: "Designate your emergency notification contacts and provide detailed directions to help Casualty Assistance officers locate your family members.",
    capabilities: ["Set Primary NOK", "Set Secondary NOK", "Provide address directions", "Add special instructions", "Update contact preferences"],
    userTypes: ["All Marines"],
    guide: [
      {
        title: "Why This Matters",
        steps: [
          {
            step: "In-Person Notification",
            details: [
              "The Marine Corps delivers serious news in person through a Casualty Assistance Calls Officer (CACO)",
              "Your NOK designations determine who gets contacted first and in what order",
              "Directions help CACOs find rural, gated, or hard-to-locate addresses",
            ],
          },
        ],
      },
      {
        title: "NOK Hierarchy",
        steps: [
          {
            step: "Primary Next of Kin (PNOK)",
            details: [
              "Typically your spouse if married",
              "If unmarried, usually a parent or sibling",
              "The PNOK is contacted first in any emergency",
            ],
          },
          {
            step: "Secondary Next of Kin (SNOK)",
            details: [
              "Typically parents if married",
              "May be siblings or other close family",
              "Contacted after PNOK has been notified",
            ],
          },
        ],
      },
      {
        title: "Providing Directions",
        steps: [
          { step: "Navigate to RED > Next of Kin Directions" },
          {
            step: "When Directions Are Essential",
            details: [
              "Rural addresses without GPS coverage",
              "Gated communities requiring access codes",
              "Apartment complexes with multiple buildings",
              "Properties at the end of unnamed roads",
            ],
          },
          { step: "Provide clear, written directions from the nearest major intersection" },
          { step: "Include gate codes, building numbers, and parking instructions" },
        ],
      },
      {
        title: "Special Instructions",
        steps: [
          {
            step: "Contact Preferences",
            details: [
              "Note if NOK works night shifts and best times to reach them",
              "Include work addresses if they spend significant time away from home",
              "List alternative phone numbers in priority order",
            ],
          },
        ],
      },
    ],
  },
  "mol-red-insurance": {
    title: "RED Insurance Information",
    description: "View and update SGLI and other insurance beneficiary designations. Track private insurance policies for your family's awareness.",
    capabilities: ["View SGLI status", "Track FSGLI coverage", "Record private policies", "Update beneficiaries", "Review coverage amounts"],
    userTypes: ["All Marines"],
    guide: [
      {
        title: "Why This Matters",
        steps: [
          {
            step: "SGLI Coverage",
            details: [
              "Servicemembers' Group Life Insurance provides up to $500,000 in coverage",
              "Beneficiaries must be designated - default rules may not match your wishes",
              "SGLI is separate from Death Gratuity ($100K immediate payment)",
            ],
          },
          {
            step: "Private Policy Tracking",
            details: [
              "RED allows you to record private insurance policies for your family's reference",
              "This ensures survivors know about all available benefits",
            ],
          },
        ],
      },
      {
        title: "Viewing Insurance Status",
        steps: [
          { step: "Log in to MOL and navigate to RED > Insurance Information" },
          { step: "Review your current SGLI coverage amount" },
          { step: "Verify FSGLI (Family SGLI) coverage for spouse and children" },
          { step: "Check that beneficiary designations are current" },
        ],
      },
      {
        title: "Recording Private Policies",
        steps: [
          { step: "Click 'Add Private Insurance Policy'" },
          { step: "Enter insurance company name and policy number" },
          { step: "Note coverage amount and beneficiaries" },
          { step: "Include agent contact information if available" },
        ],
      },
      {
        title: "Common Pitfalls",
        steps: [
          {
            step: "The SGLI Trap",
            details: [
              "SGLI beneficiaries are NOT automatically updated when you marry or have children",
              "You must actively designate beneficiaries through SOES (SGLI Online Enrollment System)",
              "Old beneficiaries (ex-spouses, former partners) remain valid until you change them",
            ],
          },
          {
            step: "Forgetting Private Policies",
            details: [
              "Many Marines have employer or private life insurance their families don't know about",
              "Recording these in RED ensures survivors can claim all benefits",
            ],
          },
        ],
      },
    ],
  },
  "mol-red-death-gratuity": {
    title: "RED Death Gratuity",
    description: "Designate who receives the immediate $100,000 tax-free death gratuity payment. This is separate from SGLI life insurance.",
    capabilities: ["Designate beneficiaries", "Set percentage splits", "Update designations", "View current elections", "Understand the 100% rule"],
    userTypes: ["All Marines"],
    guide: [
      {
        title: "Why This Matters",
        steps: [
          {
            step: "Immediate Financial Support",
            details: [
              "The Death Gratuity is paid within 24-72 hours of notification",
              "It provides immediate funds for funeral costs, travel, and living expenses",
              "$100,000 tax-free payment - separate from SGLI",
            ],
          },
          {
            step: "Beneficiary Control",
            details: [
              "You decide who receives this payment and in what percentages",
              "Without designation, payment follows statutory order (which may not be your preference)",
            ],
          },
        ],
      },
      {
        title: "Designating Beneficiaries",
        steps: [
          { step: "Log in to MOL and navigate to RED > Death Gratuity" },
          { step: "Click 'Edit' or 'Add Beneficiary'" },
          { step: "Enter beneficiary name, relationship, and percentage" },
          { step: "Ensure all percentages total exactly 100%" },
          { step: "Submit and apply changes" },
        ],
      },
      {
        title: "The 100% Rule",
        steps: [
          {
            step: "How It Works",
            details: [
              "All designations must total exactly 100%",
              "You can split among multiple beneficiaries (e.g., spouse 60%, parents 40%)",
              "If percentages don't equal 100%, the system rejects the submission",
            ],
          },
          {
            step: "Common Splits",
            details: [
              "100% to spouse (most common)",
              "50% spouse, 25% each parent",
              "33% each to three children",
            ],
          },
        ],
      },
      {
        title: "Common Pitfalls",
        steps: [
          {
            step: "Outdated Beneficiaries",
            details: [
              "Ex-spouses or former partners remain beneficiaries until you change them",
              "Review and update after any major life event (marriage, divorce, birth)",
            ],
          },
          {
            step: "Statutory Default",
            details: [
              "If you don't designate, payment goes in statutory order: spouse, children, parents, executor",
              "This may not match your actual wishes",
            ],
          },
        ],
      },
    ],
  },
  "mol-red-padd": {
    title: "RED Person Authorized to Direct Disposition (PADD)",
    description: "Designate the person authorized to make decisions about the disposition of your remains. This is one of the most personal decisions in your RED.",
    capabilities: ["Designate PADD", "Set priority order", "Provide contact information", "Add special instructions", "Update designations"],
    userTypes: ["All Marines"],
    guide: [
      {
        title: "Why This Matters",
        steps: [
          {
            step: "Final Arrangements",
            details: [
              "The PADD decides burial location, cremation vs. burial, funeral arrangements",
              "Without designation, decisions fall to next of kin by default",
              "Family conflicts can arise if multiple people believe they have authority",
            ],
          },
          {
            step: "Your Wishes",
            details: [
              "Designating a specific PADD ensures someone who understands your wishes has legal authority",
              "Consider designating someone who can handle difficult decisions under stress",
            ],
          },
        ],
      },
      {
        title: "Designating Your PADD",
        steps: [
          { step: "Log in to MOL and navigate to RED > Person Authorized to Direct Disposition" },
          { step: "Enter the name of your primary PADD" },
          { step: "Provide complete contact information including phone and address" },
          { step: "Consider designating an alternate PADD" },
          { step: "Submit and apply changes" },
        ],
      },
      {
        title: "Who to Designate",
        steps: [
          {
            step: "Common Choices",
            details: [
              "Spouse (most common)",
              "Parent if unmarried",
              "Adult child or sibling",
              "Close friend who knows your wishes",
            ],
          },
          {
            step: "Consider",
            details: [
              "Who knows your preferences (burial vs. cremation, location)",
              "Who can make difficult decisions under emotional stress",
              "Who is likely to be reachable during a crisis",
            ],
          },
        ],
      },
      {
        title: "Special Instructions",
        steps: [
          {
            step: "Remarks Section",
            details: [
              "Use the Remarks section to document specific wishes",
              "Note preferred burial location, religious considerations, or special requests",
              "Keep instructions clear and concise",
            ],
          },
        ],
      },
    ],
  },
  "mol-red-pay-arrears": {
    title: "RED Pay Arrears (Unpaid Pay/Allowances)",
    description: "Designate who receives any unpaid pay and allowances in the event of your death. This includes your final paycheck, unused leave, and outstanding allowances.",
    capabilities: ["Designate beneficiary", "Set percentage splits", "View current designation", "Understand what's included", "Update elections"],
    userTypes: ["All Marines"],
    guide: [
      {
        title: "Why This Matters",
        steps: [
          {
            step: "What Pay Arrears Includes",
            details: [
              "Unpaid Salary: Any base pay earned but not yet deposited",
              "Unused Leave: Cashed out at your daily rate (up to 60 days)",
              "Unpaid Allowances: BAH, BAS, COLA, and other allowances due",
              "Unpaid Bonuses: Any bonus installments not yet paid",
              "Travel Claims: Outstanding travel reimbursements",
            ],
          },
          {
            step: "Why Designate",
            details: [
              "Without designation, pay goes to next of kin by statutory order",
              "You can direct funds to someone other than your primary beneficiaries if desired",
            ],
          },
        ],
      },
      {
        title: "Designating Your Beneficiary",
        steps: [
          { step: "Log in to MOL and navigate to RED > Pay Arrears" },
          { step: "Click 'Edit' or 'Add Beneficiary'" },
          { step: "Enter beneficiary name and relationship" },
          { step: "Optionally set percentage splits among multiple beneficiaries" },
          { step: "Submit and apply changes" },
        ],
      },
      {
        title: "The Leave Balance Factor",
        steps: [
          {
            step: "Understanding Leave Cash-Out",
            details: [
              "Marines with significant leave balances may have substantial payouts",
              "A Senior Marine with 60 days saved could have $15,000+ in leave value",
              "Designate someone who can use these funds appropriately",
            ],
          },
        ],
      },
      {
        title: "Common Pitfalls",
        steps: [
          {
            step: "Forgetting to Update",
            details: [
              "Review after marriage, divorce, or birth of children",
              "Ensure designated person is still appropriate and reachable",
            ],
          },
          {
            step: "Assuming It Goes with Death Gratuity",
            details: [
              "Pay Arrears and Death Gratuity are separate designations",
              "You can send them to different people if desired",
            ],
          },
        ],
      },
    ],
  },
  "mol-red-do-not-notify": {
    title: "RED Do Not Notify",
    description: "Specify persons who should NOT be notified in case of emergency or death. Use this to protect family members who shouldn't receive traumatic news.",
    capabilities: ["Add do not notify entries", "Provide reasoning", "Protect vulnerable family members", "Update list as needed"],
    userTypes: ["All Marines"],
    guide: [
      {
        title: "Why This Matters",
        steps: [
          {
            step: "Protecting Vulnerable Family",
            details: [
              "Some family members may have health conditions that make notification dangerous",
              "Elderly parents with heart conditions or dementia may be at risk from sudden news",
              "Estranged family members may not need or want notification",
            ],
          },
          {
            step: "Controlling the Process",
            details: [
              "You can specify who should NOT be contacted by official channels",
              "This allows other family members to deliver news in an appropriate manner",
            ],
          },
        ],
      },
      {
        title: "Adding Do Not Notify Entries",
        steps: [
          { step: "Log in to MOL and navigate to RED > Do Not Notify" },
          { step: "Click 'Add Person'" },
          { step: "Enter the person's name and relationship" },
          { step: "Provide the reason for exclusion (health condition, estrangement, etc.)" },
          { step: "Submit and apply changes" },
        ],
      },
      {
        title: "When to Use This",
        steps: [
          {
            step: "Health Reasons",
            details: [
              "Parent with severe heart condition",
              "Grandparent with dementia who won't understand",
              "Family member with mental health concerns",
            ],
          },
          {
            step: "Relationship Reasons",
            details: [
              "Estranged parent or sibling",
              "Ex-spouse who should not be contacted",
              "Someone you haven't communicated with in years",
            ],
          },
        ],
      },
      {
        title: "Important Notes",
        steps: [
          {
            step: "Alternative Notification",
            details: [
              "Communicate with other family members about who will inform excluded persons",
              "Ensure someone else can deliver news in an appropriate manner",
              "The CACO will follow your instructions but won't manage family dynamics",
            ],
          },
        ],
      },
    ],
  },
  "mol-red-mia": {
    title: "RED MIA (Missing in Action) Notification",
    description: "Designate who should be notified if you are declared Missing in Action. MIA notification has unique considerations separate from casualty notification.",
    capabilities: ["Designate MIA notification contacts", "Set notification preferences", "Provide special instructions", "Update designations"],
    userTypes: ["All Marines"],
    guide: [
      {
        title: "Why This Matters",
        steps: [
          {
            step: "Different from Casualty Notification",
            details: [
              "MIA status means your location and condition are unknown",
              "Notification is ongoing as information becomes available",
              "Families may need to wait extended periods for updates",
            ],
          },
          {
            step: "Emotional Preparation",
            details: [
              "MIA notification is uniquely stressful due to uncertainty",
              "Designate someone who can handle ongoing ambiguity",
              "Consider who can be the family point of contact for updates",
            ],
          },
        ],
      },
      {
        title: "Designating MIA Contacts",
        steps: [
          { step: "Log in to MOL and navigate to RED > MIA Notification" },
          { step: "Review your current MIA notification designations" },
          { step: "Ensure contacts are prepared for the unique nature of MIA notification" },
          { step: "Update contact information to ensure reachability" },
        ],
      },
      {
        title: "What to Expect",
        steps: [
          {
            step: "Initial Notification",
            details: [
              "CACO delivers initial MIA notification in person",
              "Limited information may be available initially",
              "Updates are provided as they become available",
            ],
          },
          {
            step: "Ongoing Communication",
            details: [
              "CACO remains assigned throughout MIA status",
              "Regular updates (even if no new information)",
              "Support services available for family",
            ],
          },
        ],
      },
    ],
  },
  "mol-reserve-drill": {
    title: "Reserve Drill Summary",
    description: "Your official record of attendance for Inactive Duty Training (IDT). If you are an SMCR or IMA Marine, this page is where you verify that you are being credited—and paid—for your time. For a Reservist, your drill points are your 'currency.'",
    capabilities: ["View drill attendance", "Track missed drills", "View rescheduled drills", "Monitor participation status", "Verify drill pay", "Check retirement points"],
    userTypes: ["Reserve Marines", "Individual Reserve Component Members", "IMA Marines"],
    guide: [
      {
        title: "Why This Matters",
        steps: [
          {
            step: "Pay",
            details: [
              "Every drill period (4 hours) equals 1/30th of your monthly base pay",
              "If a drill is missed or not recorded, your paycheck will be short",
            ],
          },
          {
            step: "Retirement Points",
            details: [
              "Each drill counts as one point toward retirement",
              "You need 50 points in an anniversary year for a 'satisfactory year'",
            ],
          },
          {
            step: "Career Readiness",
            details: [
              "If you have too many 'Unexcused Absences' (UA), you can be processed for administrative separation",
              "This report allows you to catch administrative errors before they affect your career",
            ],
          },
        ],
      },
      {
        title: "How to Navigate the Summary",
        steps: [
          {
            step: "Step 1: Access the Report",
            details: [
              "Log in to MOL at https://mol.tfs.usmc.mil/",
              "Navigate to Personal Info > Reserve Drill Summary",
            ],
          },
          {
            step: "Step 2: Review the Drill Status",
            details: [
              "Satisfactory (SAT): You attended and were mustered",
              "Rescheduled (RS): You moved a drill to a different date with prior approval",
              "Excused Absence (EA): You were cleared to miss the drill but won't be paid/receive points",
              "Unexcused Absence (UA): You missed drill without approval - FIX THIS IMMEDIATELY",
            ],
          },
          {
            step: "Step 3: Identify Drill Types",
            details: [
              "Regular (Reg): Your standard 48 drills per year",
              "ATP (Additional Training Period): Extra drills for specific training or prep",
              "RMP (Readiness Management Period): Drills used for medical, admin, or unit prep",
            ],
          },
          {
            step: "Step 4: Print/Save",
            details: [
              "Click 'Printer Friendly View'",
              "Click 'Print' (Save as PDF) - vital document if there is a pay discrepancy",
              "Click 'Close' to return to the main page",
            ],
          },
        ],
      },
      {
        title: "Common Pitfalls to Avoid",
        steps: [
          {
            step: "The Muster Delay",
            details: [
              "It often takes 3-5 days after a drill weekend for the S-1 to finish the 'Muster' process",
              "Don't panic if your Saturday drill isn't showing as 'SAT' on Sunday evening",
            ],
          },
          {
            step: "Double Drills",
            details: [
              "One calendar day can have a maximum of two drill periods",
              "If you worked 12 hours but only see two drills, that is normal",
            ],
          },
          {
            step: "Fiscal Year vs. Anniversary Year",
            details: [
              "Your 48 paid drills are tied to the Fiscal Year (Oct-Sept)",
              "But your retirement points are tied to your Anniversary Year",
              "Make sure you are checking the right window",
            ],
          },
          {
            step: "Ghost Drills",
            details: [
              "If you see 'Scheduled' drills from months ago that were never updated to 'SAT' or 'EA', notify your Platoon Sergeant",
              "These 'hanging' drills can prevent you from getting paid for future drills",
            ],
          },
        ],
      },
      {
        title: "What to Do After Review",
        steps: [
          {
            step: "Fixing a UA",
            details: [
              "If you were present but are marked 'UA', provide your Muster Sheet (the paper you signed at drill) to your S-1 or I&I Staff",
            ],
          },
          {
            step: "Verify Pay",
            details: [
              "Once a drill shows as 'SAT', check your myPay account about a week later",
              "You should see a 'Net Pay' entry for that specific drill period",
            ],
          },
          {
            step: "Update Your CRCR",
            details: [
              "Every 'SAT' drill on this summary should eventually migrate to your Career Retirement Credit Report (CRCR)",
              "Check your CRCR once a month to ensure the totals match",
            ],
          },
        ],
      },
    ],
  },
  "mol-ros": {
    title: "Record of Service (ROS)",
    description: "The primary report for enlisted Marines (Sergeant and below) to track their promotion metrics. It serves as the bridge between your past performance and your current standing in the Junior Enlisted Performance Evaluation System (JEPES). In the 2026 Marine Corps, your promotion is almost entirely data-driven, and the ROS is where you verify the 'Command Input' part of your score.",
    capabilities: ["View proficiency marks", "View conduct marks", "View composite scores", "Track performance history", "View JEPES command input", "Check average in grade"],
    userTypes: ["All Marines"],
    guide: [
      {
        title: "Why This Matters",
        steps: [
          {
            step: "Promotion Score",
            details: [
              "The ROS is where you verify the 'Command Input' (the subjective part of your score)",
              "This includes Character, MOS/Mission, and Leadership marks",
              "If your command marks aren't being reported or are lower than expected, your JEPES score will stay stagnant",
            ],
          },
          {
            step: "Historical Record",
            details: [
              "Shows your historical Proficiency and Conduct marks",
              "If you were in the Corps before 2021, old Pro/Con marks have been converted to the JEPES scale",
              "Your total career 'average in grade' is calculated here",
            ],
          },
        ],
      },
      {
        title: "How to Navigate Your ROS",
        steps: [
          {
            step: "Step 1: Access the Report",
            details: [
              "Log in to MOL at https://mol.tfs.usmc.mil/",
              "Navigate to Personal Info > Record of Service",
            ],
          },
          {
            step: "Step 2: Review Command Marks (JEPES)",
            details: [
              "Look for the three pillars: Individual Character, MOS/Mission Accomplishment, and Leadership",
              "These are scored on a scale of 0.0 to 5.0",
              "2.0-3.0 means you 'meet expectations'",
              "3.0-4.0 means you are 'above average'",
              "4.0-5.0 is reserved for exceptional 'Water Walkers'",
            ],
          },
          {
            step: "Step 3: Check Composite/JEPES Score",
            details: [
              "Verify your total points",
              "This report shows how your marks contribute to the 250 points available in the 'Command Input' category of JEPES",
            ],
          },
          {
            step: "Step 4: Historical Pro/Con",
            details: [
              "If you were in the Corps before 2021, you will see your old Proficiency and Conduct marks",
              "These have been converted into the JEPES scale",
            ],
          },
          {
            step: "Step 5: Print/Save",
            details: [
              "Click 'Printer-Friendly View'",
              "Click 'Print' (Save as PDF) - keep this copy for remedial promotion requests",
              "Click 'Close' to return to the main ROS page",
            ],
          },
        ],
      },
      {
        title: "Common Pitfalls to Avoid",
        steps: [
          {
            step: "The N/A Trap",
            details: [
              "If your ROS shows 'N/A' for recent marks, your command hasn't run an 'occasion' (like a Semi-Annual or Transfer) for you",
              "Without these marks, your JEPES score is incomplete",
            ],
          },
          {
            step: "Comparing to the Old System",
            details: [
              "Don't confuse a 4.5 in the old system with a 4.5 now",
              "A 4.5 in JEPES is extremely rare and requires high-level approval",
              "It was common in the old Pro/Con system",
            ],
          },
          {
            step: "Cutoff Dates",
            details: [
              "The Marine Corps pulls data for promotions around the 20th of each month",
              "If your ROS updates on the 25th, it won't affect your rank until the following month",
            ],
          },
          {
            step: "Missing Averages",
            details: [
              "Ensure your 'Average in Grade' is calculated",
              "If the math looks wrong, it usually means a historical entry is missing a 'Date To' or 'Date From'",
            ],
          },
        ],
      },
      {
        title: "What to Do After Review",
        steps: [
          {
            step: "Verify on JEPES Dashboard",
            details: [
              "Once you see new marks on your ROS, head over to the JEPES Marine Dashboard in MOL",
              "You should see your 'Command Input' score update within 24 hours",
            ],
          },
          {
            step: "Address Low Marks",
            details: [
              "If your marks are below a 2.0, your command is required to provide you with counseling and documentation",
              "Use this report as a talking point with your NCOs to find out how to improve",
            ],
          },
          {
            step: "Monitor Cutting Scores",
            details: [
              "Compare the score on your ROS to the monthly Cutting Scores posted on the Manpower & Reserve Affairs website",
              "If you are above the score and PME complete, you're in the window for promotion",
            ],
          },
        ],
      },
    ],
  },
  "mol-cultural-info": {
    title: "Operational Cultural Information Report",
    description: "This page tracks your specific 'human intelligence' assets: the languages you speak and your experience in foreign countries. The Marine Corps is an expeditionary force, and when a unit is preparing for deployment to a specific region, the command needs to know who already understands the local language or culture. If you speak Arabic, Tagalog, or Mandarin—even from growing up in a bilingual home—you are a high-value asset.",
    capabilities: ["View language skills", "Self-profess language abilities", "Track foreign travel history", "Verify DLPT scores", "Check FLPB eligibility", "Update cultural experience"],
    userTypes: ["All Marines"],
    guide: [
      {
        title: "Why This Matters",
        steps: [
          {
            step: "Mission Asset",
            details: [
              "When a unit is preparing for a deployment to a specific region, command needs to know who understands the local language or culture",
              "Your language skills and cultural experience make you a candidate for unique missions or billets",
              "This includes Foreign Area Officer (FAO) and Civil Affairs Marine opportunities",
            ],
          },
          {
            step: "Extra Pay (FLPB)",
            details: [
              "Keeping this report updated ensures you are eligible for Foreign Language Proficiency Bonus (FLPB)",
              "FLPB provides extra pay for maintaining language skills in strategic languages",
            ],
          },
        ],
      },
      {
        title: "How to Manage Your Cultural Data",
        steps: [
          {
            step: "Step 1: Access the Report",
            details: [
              "Log in to MOL at https://mol.tfs.usmc.mil/",
              "Navigate to Personal Info > Operational Cultural Information Report",
            ],
          },
          {
            step: "Step 2: Verify Formal Skills",
            details: [
              "Look at the 'Survival Level Language Training' section",
              "This pulls from MarineNet or formal schoolhouses (like the Defense Language Institute)",
            ],
          },
          {
            step: "Step 3: Self-Profess Your Skills",
            details: [
              "If you are fluent in a language but haven't taken a test, ensure it's listed under 'Self-Professed Language Skills'",
              "Go into the 'Self-Service' or 'Edit' portion of your profile to add a new language",
            ],
          },
          {
            step: "Step 4: Audit Foreign Travel",
            details: [
              "Look at the list of foreign travel periods",
              "This should include both official deployments and personal leave taken out of the country",
            ],
          },
          {
            step: "Step 5: Print/Save",
            details: [
              "Click 'Printer Friendly View'",
              "Click 'Print' (Save as PDF)",
              "Click 'Close' to return to the main portal",
            ],
          },
        ],
      },
      {
        title: "Common Pitfalls to Avoid",
        steps: [
          {
            step: "The Self-Professed Cap",
            details: [
              "Just listing a language as 'Self-Professed' doesn't automatically trigger extra pay",
              "You must take the DLPT (Defense Language Proficiency Test) and score at least 1+/1+ or 2/2 (depending on the language) to get FLPB",
            ],
          },
          {
            step: "Missing Leave Travel",
            details: [
              "Many Marines forget to report personal travel",
              "If you took leave to visit family in Mexico or Japan, that counts as cultural experience and should be documented",
            ],
          },
          {
            step: "Perishable Skills",
            details: [
              "If you haven't spoken a language in five years, don't list yourself as 'Fluent'",
              "Be honest about your actual proficiency level (Elementary, Intermediate, or Professional)",
            ],
          },
          {
            step: "Browser Blocks",
            details: [
              "This report often opens in a pop-up window",
              "If nothing happens when you click 'Printer Friendly,' check your browser's address bar for a 'Pop-up Blocked' icon",
            ],
          },
        ],
      },
      {
        title: "What to Do After Review",
        steps: [
          {
            step: "Schedule a DLPT",
            details: [
              "If you see a language on your report that you are good at, contact your Unit Training NCO or Education Center to schedule a proctored DLPT",
            ],
          },
          {
            step: "Verify Pay",
            details: [
              "Once you pass a DLPT, check your LES for the 'FLPB' entitlement",
              "It may take 1-2 pay cycles to appear after your score posts",
            ],
          },
          {
            step: "Update Your S-1",
            details: [
              "If your travel history is missing a major deployment, take your orders to S-1 to ensure the dates in MCTFS match your actual time in country",
            ],
          },
        ],
      },
    ],
  },
  "mol-rank-mos": {
    title: "Rank/MOS Report",
    description: "Your 'scouting report' that allows you to see exactly where you stand compared to every other Marine in your rank and MOS across the entire Marine Corps. Promotions are competitive—you aren't just trying to be 'good,' you are competing for a limited number of promotion slots. This report is vital for career planning.",
    capabilities: ["View peer comparison", "Check TIG standings", "Analyze MOS strength", "Research lateral move options", "Sort by date of rank", "Filter by component"],
    userTypes: ["All Marines"],
    guide: [
      {
        title: "Why This Matters",
        steps: [
          {
            step: "For Sergeants and Below",
            details: [
              "It helps you understand if your MOS is 'fast-moving' or 'stagnant' by looking at the Time in Grade (TIG) of your peers",
              "You can see how many Marines are ahead of or behind you in seniority",
            ],
          },
          {
            step: "For SNCOs and Officers",
            details: [
              "It allows you to see the lineal standing of your peers",
              "This is critical when preparing for a promotion board",
            ],
          },
        ],
      },
      {
        title: "How to Research Your Peers",
        steps: [
          {
            step: "Step 1: Access the Report",
            details: [
              "Log in to MOL at https://mol.tfs.usmc.mil/",
              "Navigate to Personal Info > Rank/MOS Report",
            ],
          },
          {
            step: "Step 2: Adjust the Criteria",
            details: [
              "By default, MOL shows Marines who match your exact Rank, MOS, and Component (Active/Reserve)",
              "To look at a different field (for example, if you are considering a Lateral Move), select a new Rank, MOS, or Component from the dropdown menus",
              "Click the 'Go' button to refresh the list",
            ],
          },
          {
            step: "Step 3: Analyze the Data",
            details: [
              "Sort the List: Click any column heading (like 'Date of Rank') to sort. Click it again to reverse the order",
              "This helps you see who the 'senior' and 'junior' Marines are in your specific peer group",
              "Use 'Next Page' or 'Previous Page' buttons, or type a page number and hit 'Go' to navigate large lists",
            ],
          },
          {
            step: "Step 4: Print/Save",
            details: [
              "Click 'Printer-Friendly View'",
              "Click 'Print' (Save as PDF)",
              "Click 'Close' to return to the main report page",
            ],
          },
        ],
      },
      {
        title: "Common Pitfalls to Avoid",
        steps: [
          {
            step: "Comparing Apples to Oranges",
            details: [
              "Ensure you have the correct Component selected",
              "Active duty promotion timelines are very different from the Reserves",
            ],
          },
          {
            step: "Outdated Data",
            details: [
              "This report is a snapshot",
              "If a peer was promoted yesterday, it might take 24-48 hours to reflect their new rank on this list",
            ],
          },
          {
            step: "Privacy and PII",
            details: [
              "While you can see names and ranks, never share or post this report publicly",
              "It is for your official career planning use only",
            ],
          },
          {
            step: "The Lateral Move Trap",
            details: [
              "Just because an MOS has very few people in it doesn't mean it's easy to promote into",
              "It might be a 'closed' MOS",
              "Always talk to a Career Planner before making decisions based on this report",
            ],
          },
        ],
      },
      {
        title: "What to Do After Review",
        steps: [
          {
            step: "Identify Your Standing",
            details: [
              "See where you fall in the 'Lineal Rank'",
              "If you are at the bottom of the list for TIG, you know you have time to focus on PME and extra qualifications",
            ],
          },
          {
            step: "Consult a Career Planner",
            details: [
              "If you notice that your MOS is extremely crowded (over-strength) or has very slow promotion timelines, take a copy of this report to your Career Planner",
              "Discuss Lateral Move (LatMove) opportunities",
            ],
          },
          {
            step: "Board Preparation",
            details: [
              "If you are in-zone for promotion, use this list to ensure your record (PFT, CFT, Rifle) is statistically higher than the 'average' peer on this list",
            ],
          },
        ],
      },
    ],
  },
  "mol-slate": {
    title: "Slate Report",
    description: "Your window into the future of your unit and your MOS. It allows you to see the 'movement' of your peers and helps you predict when you—or the person in the billet you want—might be rotating to a new duty station. Knowing your Estimated Rotation Date (ERD) is critical for life planning: weddings, buying a house, or timing your next school.",
    capabilities: ["View ERD dates", "Research MOS rotations", "Plan career moves", "Check peer rotations", "Monitor billet openings", "Update duty preferences"],
    userTypes: ["All Marines"],
    guide: [
      {
        title: "Why This Matters",
        steps: [
          {
            step: "Life Planning",
            details: [
              "Whether you are planning a wedding, looking to buy a house, or trying to time your next school, the Slate Report tells you when the Marine Corps expects you to move",
              "Your ERD is the starting point for all major life decisions",
            ],
          },
          {
            step: "Career Opportunities",
            details: [
              "It allows you to see the 'gaps' in your MOS",
              "If you see that 50% of the Sergeants in your MOS are rotating out in June, you know there's a high chance for promotion or a prime billet opening up",
            ],
          },
        ],
      },
      {
        title: "How to View Rotation Dates",
        steps: [
          {
            step: "Step 1: Access the Report",
            details: [
              "Log in to MOL at https://mol.tfs.usmc.mil/",
              "Navigate to Personal Info > Slate Report",
            ],
          },
          {
            step: "Step 2: Verify the Defaults",
            details: [
              "By default, the page displays your current Rank and MOS",
            ],
          },
          {
            step: "Step 3: Change the Criteria",
            details: [
              "To research a different MOS (perhaps for a LatMove) or a different Rank, type the four-digit MOS in the MOS box",
              "Select a different Rank from the dropdown menu",
              "Click the 'Go' button to refresh the list",
            ],
          },
          {
            step: "Step 4: Analyze the Data",
            details: [
              "Look for the ERD (Estimated Rotation Date) column - this is the 'best guess' date for when a Marine is scheduled to leave their current station",
              "Sort the List: Click any column heading (like 'Name' or 'ERD') to sort. Click it again to reverse the order",
              "This helps you see who is leaving the earliest",
            ],
          },
          {
            step: "Step 5: Print/Save",
            details: [
              "Click 'Printer-Friendly View'",
              "Click 'Print' (Save as PDF)",
              "Click 'Close' to return to the Slate Report page",
            ],
          },
        ],
      },
      {
        title: "Common Pitfalls to Avoid",
        steps: [
          {
            step: "The 'Estimated' Part",
            details: [
              "The 'E' in ERD stands for Estimated - it is not a guarantee",
              "Orders can be extended or cut short based on the 'Needs of the Marine Corps'",
            ],
          },
          {
            step: "Confusing ERD with EAS",
            details: [
              "Your ERD is when you move to a new unit",
              "Your EAS (End of Active Service) is when you leave the Marine Corps",
              "These are often different dates",
            ],
          },
          {
            step: "MOL vs. Web Orders",
            details: [
              "Just because a date changes in the Slate Report doesn't mean you have orders yet",
              "Official moves are only confirmed when you see Web Orders in the 'Orders' section of MOL",
            ],
          },
          {
            step: "Glossary Check",
            details: [
              "If you don't understand an abbreviation (like MCC or RUC), scroll to the Glossary at the bottom of the Slate Report page for definitions",
            ],
          },
        ],
      },
      {
        title: "What to Do After Review",
        steps: [
          {
            step: "Monitor the Monitor",
            details: [
              "If your ERD is within the next 6-9 months, start checking your Web Orders daily",
              "Talk to your Career Planner or Monitor about your preferences",
            ],
          },
          {
            step: "Update Your Preferences",
            details: [
              "Now that you know your rotation window, go to the Standard Letter section in MOL to update your 'Duty Station Preferences'",
              "This ensures the Monitor knows where you want to go",
            ],
          },
          {
            step: "Plan Your Move",
            details: [
              "Use the ERD as a baseline to start researching your next potential duty station's housing and school options",
            ],
          },
        ],
      },
    ],
  },
  "mol-w2": {
    title: "W2 Tax Statements",
    description: "The official record of your earnings and the taxes withheld by the government, which you need to file your taxes every year. Your W-2 is the 'source of truth' for the IRS. If you don't download it, you can't file your taxes, which can lead to late fees or missed refunds.",
    capabilities: ["View W-2 statements", "Download W-2 PDFs", "Manage delivery preferences", "Access prior year W-2s", "View W-2C corrections", "Set electronic delivery"],
    userTypes: ["All Marines"],
    guide: [
      {
        title: "Why This Matters",
        steps: [
          {
            step: "Tax Filing Requirement",
            details: [
              "Your W-2 is the source of truth for the IRS",
              "You cannot file your taxes without it",
              "Late filing can lead to penalties and missed refunds",
            ],
          },
          {
            step: "Delivery Method Security",
            details: [
              "Keeping your delivery method updated ensures your sensitive financial info isn't mailed to an old barracks room",
              "Electronic delivery is faster and more secure",
            ],
          },
        ],
      },
      {
        title: "How to Get Your W-2",
        steps: [
          {
            step: "Step 1: Access the Page",
            details: [
              "Log in to MOL at https://mol.tfs.usmc.mil/",
              "Navigate to Personal Info > Tax Statements (W-2)",
            ],
          },
          {
            step: "Step 2: Check Delivery Method",
            details: [
              "If you see 'Electronic Only', you are good to go",
              "If it says 'Hard Copy' or 'None', click the link to change it to 'Electronic Only'",
              "You must set electronic delivery BEFORE the year's W-2 will appear in the dropdown menu",
            ],
          },
          {
            step: "Step 3: Download the Form",
            details: [
              "Select the year you need from the 'Available W-2s' drop-down list",
              "Click 'Submit'",
              "The PDF will generate - save this file to a secure location (encrypted thumb drive or password-protected folder)",
            ],
          },
          {
            step: "Step 4: Verify Information",
            details: [
              "Look at the address on the W-2",
              "If it is wrong, go to the Personal Contact Information page in MOL and update it immediately",
              "This ensures next year's form is correct",
            ],
          },
        ],
      },
      {
        title: "Common Pitfalls to Avoid",
        steps: [
          {
            step: "The Restricted Message",
            details: [
              "If the screen says the option is restricted, it's because you haven't opted into electronic delivery yet",
              "Click the 'Hard Copy' or 'None' link to flip it to 'Electronic Only'",
            ],
          },
          {
            step: "Separated/Retired Status",
            details: [
              "If you have already left the Marine Corps, you only have ONE YEAR to grab your W-2 from MOL",
              "After that, you'll have to deal with DFAS directly, which is a much slower process",
            ],
          },
          {
            step: "The W-2C",
            details: [
              "If you see a 'W-2C' in the list, that means your original W-2 was corrected",
              "ALWAYS use the W-2C for your taxes as it contains the most accurate, updated info",
            ],
          },
          {
            step: "System Timeouts",
            details: [
              "If you get a 'Web service failed' message, don't panic",
              "The servers are usually slammed in late January/early February",
              "Close your browser and try again during off-peak hours (late at night or early morning)",
            ],
          },
        ],
      },
      {
        title: "What to Do After You Get It",
        steps: [
          {
            step: "File Your Taxes",
            details: [
              "Use the data from your W-2 to file via MilTax (available through Military OneSource) or another tax service",
            ],
          },
          {
            step: "Check myPay",
            details: [
              "If MOL is giving you errors, you can always go directly to myPay (https://mypay.dfas.mil) to find your tax statements",
              "They are usually posted there a few days before they hit MOL",
            ],
          },
          {
            step: "Audit Your Address",
            details: [
              "While you're in the tax mindset, double-check your State of Legal Residence on your LES",
              "If you moved and didn't update your state, you might be paying taxes to a state you no longer live in",
            ],
          },
        ],
      },
    ],
  },
  // ============================================
  // MOL SELF-CERTIFIED TRANSACTIONS
  // ============================================
  "mol-brs-opt-in": {
    title: "Blended Retirement Opt-In/Out",
    description: "The Blended Retirement System (BRS) Opt-In/Out transaction allows eligible service members to elect into the Blended Retirement System or decline enrollment. This is a one-time, irrevocable decision.",
    capabilities: ["Elect BRS enrollment", "View BRS election status", "Complete required training", "Understand retirement options"],
    userTypes: ["All Marines", "Eligible Service Members"],
    guide: [
      {
        title: "Eligibility Requirements",
        steps: [
          {
            step: "Who Can Opt-In",
            details: [
              "Members with a DIEMS (Date of Initial Entry to Military Service) before January 1, 2018",
              "Must have less than 12 years of service as of December 31, 2017",
              "Grandfathered members under the legacy (High-3) retirement system",
            ],
          },
          {
            step: "New Accessions",
            details: [
              "Members with DIEMS on or after January 1, 2018 are automatically enrolled in BRS",
              "No opt-in decision required for new accessions",
            ],
          },
        ],
      },
      {
        title: "Required Training",
        steps: [
          { step: "Complete the mandatory BRS Opt-In Course on MarineNet before making your election" },
          { step: "Training covers retirement benefits comparison, TSP matching, and continuation pay" },
          { step: "You cannot make an election until training is complete" },
        ],
      },
      {
        title: "Making Your Election",
        steps: [
          { step: "Log in to MOL at https://mol.tfs.usmc.mil/" },
          { step: "Navigate to Personal Info > BRS/TSP Information" },
          { step: "Click 'BRS Election' to access the election form" },
          { step: "Review the terms and conditions carefully" },
          { step: "Select 'Opt-In' to enroll in BRS or remain in legacy system" },
          { step: "Confirm your election - THIS DECISION IS IRREVOCABLE" },
        ],
      },
      {
        title: "Important Considerations",
        steps: [
          {
            step: "BRS Benefits",
            details: [
              "Government TSP matching up to 5% of base pay",
              "Continuation pay at 12 years of service",
              "Lump sum option at retirement",
              "Reduced pension multiplier (2.0% vs 2.5%)",
            ],
          },
          {
            step: "Legacy System Benefits",
            details: [
              "Higher pension multiplier (2.5% per year)",
              "No TSP matching contribution",
              "No continuation pay",
              "Full pension after 20 years",
            ],
          },
        ],
      },
    ],
  },
  "mol-acknowledgements": {
    title: "Acknowledgements",
    description: "The Acknowledgment Record is your digital paper trail. When you click 'Acknowledge,' you are legally stating that you have been informed of a specific requirement. Keeping this clear ensures your record stays 'Green' and prevents leadership from having to track you down for missing signatures.",
    capabilities: ["View pending acknowledgements", "Complete required acknowledgements", "View acknowledgement history", "Print acknowledgement records", "Maintain record integrity"],
    userTypes: ["All Marines"],
    guide: [
      {
        title: "Why This Matters",
        steps: [
          {
            step: "Legal Documentation",
            details: [
              "The Acknowledgment Record is your digital paper trail",
              "When you click 'Acknowledge,' you are legally stating you have been informed of a specific requirement",
              "Examples include new policies on Montgomery GI Bill benefits or changes in MOS status",
              "Keeping this clear ensures your record stays 'Green'",
              "Prevents your leadership from having to hunt you down for missing signatures",
            ],
          },
        ],
      },
      {
        title: "How to Clear Your Pending List",
        steps: [
          {
            step: "Step 1: Access the Record",
            details: [
              "Log in to MOL at https://mol.tfs.usmc.mil/",
              "Navigate to Personal Information section",
              "Select Acknowledgment Record",
            ],
          },
          {
            step: "Step 2: Identify the Task",
            details: [
              "Look at the Pending Acknowledgments section",
              "If you see a link that says 'Acknowledge' - that is your To-Do list",
              "If you see '(Pending)' in parentheses - you've already done your part, it's waiting for MCTFS to finish processing",
            ],
          },
          {
            step: "Step 3: Read the Description",
            details: [
              "Before clicking, read the Description column",
              "This tells you exactly what you are signing for",
              "Make sure you understand the policy or requirement",
            ],
          },
          {
            step: "Step 4: The Digital Signature",
            details: [
              "Click the 'Acknowledge' link",
              "A pop-up or new page will appear with the full text of the statement",
              "Scroll to the bottom and confirm your acknowledgement",
            ],
          },
          {
            step: "Step 5: Verify History",
            details: [
              "Once processed, the item moves from 'Pending' to 'Historical Acknowledgments'",
              "This is your proof that you completed it",
              "You can reference this at any time in your career",
            ],
          },
        ],
      },
      {
        title: "Common Pitfalls to Avoid",
        steps: [
          {
            step: "The 'Printer-Friendly' Trap",
            details: [
              "Some Marines think they need to print and sign these - you don't",
              "The digital click IS your signature",
              "Only use 'Printer-Friendly View' if your S-1 specifically asks for a hard copy for a package",
            ],
          },
          {
            step: "Walking Away Too Early",
            details: [
              "If you click 'Acknowledge' but don't hit the final 'Confirm' or 'Submit,' the status won't change",
              "Always refresh the page to make sure the link is gone",
              "Verify the item moved to Historical Acknowledgments",
            ],
          },
          {
            step: "Ignoring the Dates",
            details: [
              "If an item stays in '(Pending)' for more than a week, it might have glitched in MCTFS",
              "If it doesn't move to 'Historical' after a few days, let your NCO know",
              "They can check your record in 3270/MCTFS to troubleshoot",
            ],
          },
        ],
      },
      {
        title: "What Happens After You Click",
        steps: [
          {
            step: "System Update",
            details: [
              "The change is sent to the Marine Corps Total Force System (MCTFS)",
              "Processing typically takes a few minutes to a few days",
            ],
          },
          {
            step: "MOL Homepage Notification",
            details: [
              "Once the system fully processes the entry, you'll see a notification on your main MOL dashboard",
              "This confirms the update was successful",
            ],
          },
          {
            step: "Record Integrity",
            details: [
              "The item is permanently stored in your Historical Acknowledgments",
              "You can look back at this at any time in your career",
              "Use this to prove you were briefed on a certain topic if ever questioned",
            ],
          },
        ],
      },
    ],
  },
  "mol-career-designation": {
    title: "Career Designation (Officer)",
    description: "The Career Designation transaction allows eligible officers to indicate their intent to remain on active duty as a career officer. This is a significant career milestone for commissioned officers.",
    capabilities: ["Submit career designation", "View designation status", "Understand career implications"],
    userTypes: ["Commissioned Officers", "Warrant Officers"],
    guide: [
      {
        title: "Career Designation Overview",
        steps: [
          {
            step: "What is Career Designation",
            details: [
              "Formal declaration of intent to serve as a career officer",
              "Typically occurs between 5-10 years of commissioned service",
              "Demonstrates commitment to long-term military service",
              "May affect assignment and promotion considerations",
            ],
          },
        ],
      },
      {
        title: "Eligibility",
        steps: [
          {
            step: "Requirements",
            details: [
              "Must be a commissioned or warrant officer",
              "Must meet time-in-service requirements",
              "Must be recommended by commanding officer",
              "Must meet performance standards",
            ],
          },
        ],
      },
      {
        title: "Submitting Career Designation",
        steps: [
          { step: "Log in to MOL at https://mol.tfs.usmc.mil/" },
          { step: "Navigate to Personal Info > Career Designation" },
          { step: "Review your eligibility status" },
          { step: "Complete the career designation form" },
          { step: "Submit for command review and approval" },
        ],
      },
      {
        title: "After Designation",
        steps: [
          { step: "Career designation is recorded in your official record" },
          { step: "May affect future assignment opportunities" },
          { step: "Demonstrates commitment for promotion boards" },
        ],
      },
    ],
  },
  "mol-career-retirement-cert": {
    title: "Career Retirement Certification",
    description: "The Career Retirement Certification allows eligible reserve Marines to certify their Career Retirement Credit Report (CRCR) for retirement point accounting purposes. This is your official statement that your retirement points are accurate—certifying with errors can cause major problems when you actually try to retire.",
    capabilities: ["View CRCR", "Certify retirement credits", "Print certification", "Track retirement eligibility"],
    userTypes: ["Reserve Marines", "Individual Reserve Component Members"],
    guide: [
      {
        title: "Why This Matters",
        steps: [
          {
            step: "Your Retirement Depends on It",
            details: [
              "You need 20 'good years' (50+ points each) to qualify for reserve retirement",
              "Once you certify a year, you are attesting that the points are accurate",
              "Errors discovered later are much harder to fix after certification",
            ],
          },
          {
            step: "The 50-Point Rule",
            details: [
              "Each anniversary year must have at least 50 points to count as a 'good year'",
              "15 membership points are automatic just for being in the Selected Reserve",
              "The remaining 35+ points must come from drills, AT, schools, or correspondence courses",
            ],
          },
        ],
      },
      {
        title: "How to Audit Before Certifying",
        steps: [
          {
            step: "Step 1: Access the CRCR",
            details: [
              "Log in to MOL at https://mol.tfs.usmc.mil/",
              "Navigate to Personal Info > Career Retirement Credit Report",
            ],
          },
          {
            step: "Step 2: Review Each Anniversary Year",
            details: [
              "Your anniversary year runs from your AFABD (Active Federal Active Duty Begin Date), NOT the calendar year",
              "Check that each year shows at least 50 points",
              "Look for any years with 0 or very low points—these may indicate missing data",
            ],
          },
          {
            step: "Step 3: Cross-Reference with Drill Attendance",
            details: [
              "Compare your point totals to your actual drill attendance records",
              "If you attended AT (Annual Training) that year, verify the points are credited",
              "Check that any schools or correspondence courses show up",
            ],
          },
          {
            step: "Step 4: Verify Dates and Totals",
            details: [
              "Ensure the 'Current Anniversary Date' is correct (not zeros or expired)",
              "Confirm the 'Date Entered Armed Forces' (DEAF) is NOT later than your AFABD",
              "If 'Member Points' shows more than 15, there may be an error",
            ],
          },
        ],
      },
      {
        title: "When NOT to Certify",
        steps: [
          {
            step: "Do NOT certify your CRCR if",
            details: [
              "There are mistakes in the report",
              "Current Anniversary Date has expired or displays as zeroes",
              "Current Year CRCR information is missing or more than a year old",
              "Date Entered Armed Forces (DEAF) is later than AFABD",
              "Current Year Member Points score is greater than 15",
            ],
          },
          { step: "If errors exist, click 'Users Manual' link for correction procedures" },
        ],
      },
      {
        title: "Certifying Your CRCR",
        steps: [
          { step: "Review all retirement points for accuracy" },
          { step: "Verify anniversary year dates are correct" },
          { step: "Confirm total points per year are accurate" },
          { step: "Click 'Certify CRCR' link" },
          { step: "Confirm certification when prompted" },
        ],
      },
      {
        title: "Understanding Retirement Points",
        steps: [
          {
            step: "Point Categories",
            details: [
              "Active Duty Points - From active duty periods",
              "Inactive Duty Points - From drills and training",
              "Membership Points - 15 points per year for participation",
              "Minimum 50 points per year for a 'good year'",
              "20 good years required for reserve retirement",
            ],
          },
        ],
      },
      {
        title: "Common Pitfalls to Avoid",
        steps: [
          {
            step: "Blind Certification",
            details: [
              "NEVER certify your CRCR without thoroughly reviewing it first",
              "Once certified, you are stating that the data is accurate",
              "If errors are found after certification, the correction process is much more difficult",
            ],
          },
          {
            step: "Missing a 'Good Year'",
            details: [
              "If a year shows fewer than 50 points, that year does NOT count toward your 20-year requirement",
              "Before certifying, make sure any missing drills, AT, or schools are added",
              "It is much easier to fix a 'bad year' before certification than after",
            ],
          },
          {
            step: "Confusing Anniversary Year with Calendar Year",
            details: [
              "Your anniversary year runs from your AFABD, not January 1st",
              "Points earned in December might count toward a different anniversary year than you expect",
              "Always check the date ranges for each year before certifying",
            ],
          },
        ],
      },
    ],
  },
  "mol-contact-info": {
    title: "Contact Information",
    description: "Keeping your Personal Contact Information up to date is a mandatory part of being 'Green' in the Marine Corps. It is how your command finds you during a recall, how the system knows where to send your W-2, and how the Marine Corps accounts for you during a natural disaster or crisis.",
    capabilities: ["Update mailing address", "Update phone numbers", "Update email address", "Manage contact preferences", "Update physical address", "Set APO/FPO/DPO address"],
    userTypes: ["All Marines"],
    guide: [
      {
        title: "Why This Matters",
        steps: [
          {
            step: "Safety & Accountability",
            details: [
              "If a hurricane, earthquake, or major incident hits, the Marine Corps uses your Physical Address to see who was in the affected area",
              "If your address is old, the unit can't verify that you're safe",
            ],
          },
          {
            step: "Family Readiness",
            details: [
              "Your unit's Family Readiness Officer (FRO) uses this data to keep your family in the loop",
            ],
          },
          {
            step: "Pay & Mail",
            details: [
              "Your Mailing Address is where tax documents (W-2s) and other official correspondence are sent",
              "If this is outdated, you could miss critical deadlines or have your PII sent to an old address",
            ],
          },
        ],
      },
      {
        title: "How to Update (U.S. Address)",
        steps: [
          {
            step: "Step 1: Access the Page",
            details: [
              "Log in to MOL at https://mol.tfs.usmc.mil/",
              "Navigate to Personal Info > Personal Contact Information",
            ],
          },
          {
            step: "Step 2: Select U.S. Address Format",
            details: [
              "Click the 'U.S. Address' link if it isn't already the default",
            ],
          },
          {
            step: "Step 3: Update Mailing Address",
            details: [
              "Enter your street address",
              "Type your five-digit Zip Code and click 'Lookup Zip' to auto-fill the City and State",
            ],
          },
          {
            step: "Step 4: Update Physical Address",
            details: [
              "Enter the street address of where you ACTUALLY live (Barracks, apartment, house)",
              "Do NOT use a PO Box here",
            ],
          },
          {
            step: "Step 5: Phone & Email",
            details: [
              "Update your Home, Work, and Cell numbers",
              "Ensure your Personal Email is one you check regularly (not just .mil)",
            ],
          },
          {
            step: "Step 6: Submit",
            details: [
              "Click 'Submit Changes', then click 'Apply Changes' to confirm",
            ],
          },
        ],
      },
      {
        title: "How to Update (APO/FPO/DPO Address)",
        steps: [
          {
            step: "Step 1: Select Format",
            details: [
              "Click the 'APO/FPO/DPO address' link",
            ],
          },
          {
            step: "Step 2: Enter Mailing Details",
            details: [
              "In the PSC/Box or Unit/UIC box, enter your specific unit info",
            ],
          },
          {
            step: "Step 3: City/State",
            details: [
              "For City, select APO, FPO, or DPO",
              "For State, select AA (Americas), AE (Europe/Africa), or AP (Pacific)",
            ],
          },
          {
            step: "Step 4: Physical Address",
            details: [
              "Even while deployed, enter your physical location (e.g., Camp Hansen, MCAS Iwakuni)",
            ],
          },
          {
            step: "Step 5: Submit",
            details: [
              "Click 'Submit Changes' and then 'Apply Changes'",
            ],
          },
        ],
      },
      {
        title: "How to Update (Foreign Address)",
        steps: [
          {
            step: "Step 1: Select Format",
            details: [
              "Click the 'foreign address' link",
            ],
          },
          {
            step: "Step 2: Enter Details",
            details: [
              "Enter the Street, City, and Country",
            ],
          },
          {
            step: "Step 3: Phone Format",
            details: [
              "Click 'change format to a foreign phone number' to allow for international country codes",
              "Use countrycallingcodes.com if you aren't sure of the code",
            ],
          },
          {
            step: "Step 4: Submit",
            details: [
              "Click 'Submit Changes' and then 'Apply Changes'",
            ],
          },
        ],
      },
      {
        title: "Adding or Removing Info",
        steps: [
          {
            step: "To Add/Edit",
            details: [
              "Click the 'Add' or 'Edit' link next to an address, email, or phone number",
              "Enter the updated info - new info will appear in Bold type until MCTFS finishes processing",
            ],
          },
          {
            step: "To Remove Old Info",
            details: [
              "Click the 'Remove' link next to an old number or address",
              "The item will turn Red with a strike-through",
              "Click 'Apply Changes' to confirm (or 'Cancel Removal' if you change your mind)",
            ],
          },
          {
            step: "Check Pending Changes",
            details: [
              "If you see a 'Details' link at the top, click it to see what you submitted vs. what is currently in the master record",
              "This is a great way to catch a typo before it sticks",
            ],
          },
        ],
      },
      {
        title: "Common Pitfalls to Avoid",
        steps: [
          {
            step: "Physical vs. Mailing",
            details: [
              "Don't put your parent's house in the 'Physical Address' section if you live in the barracks",
              "Your Physical Address must be where you actually sleep so you can be accounted for during a disaster",
            ],
          },
          {
            step: "BOLD Means PENDING",
            details: [
              "If you see bold text, don't keep editing it over and over",
              "It just means the change hasn't hit the main database (MCTFS) yet - wait 24-48 hours",
            ],
          },
          {
            step: "The Email Requirement",
            details: [
              "Every Marine should have a valid personal email listed",
              "If you only use your .mil account, you won't be able to access your records if you are on leave or if the network goes down",
            ],
          },
          {
            step: "PO Box Error",
            details: [
              "Never put a PO Box in the Physical Address field",
              "The Marine Corps needs to know your actual location for emergency accountability",
            ],
          },
          {
            step: "Mailing vs. Home of Record",
            details: [
              "Updating your mailing address in MOL does NOT change your 'Home of Record' or 'State of Legal Residence' for taxes",
              "Those must be changed via an EPAR or at your S-1",
            ],
          },
          {
            step: "Forgetting RED",
            details: [
              "Marines often update this page but forget to update their RED (Record of Emergency Data)",
              "You must do BOTH to stay compliant",
            ],
          },
        ],
      },
      {
        title: "What Happens After You Update",
        steps: [
          {
            step: "MCTFS Processing",
            details: [
              "Your changes are sent to the Marine Corps Total Force System",
              "It takes about 1 to 2 business days for the bold or red strike-through text to normalize",
            ],
          },
          {
            step: "Unit Recall Roster",
            details: [
              "Your new phone number will automatically feed into the unit's digital recall roster",
            ],
          },
          {
            step: "Verify on BIR",
            details: [
              "After 48 hours, check your Basic Individual Record (BIR) to ensure the changes are reflected",
            ],
          },
        ],
      },
    ],
  },
  "mol-foreign-travel": {
    title: "Foreign Travel",
    description: "Your official log of time spent outside the United States. Whether you are going on a 96-hour liberty to Mexico or a 7-month deployment to Okinawa, this record must be accurate to ensure your security clearance and pay remain intact. Foreign travel is a 'reportable activity' under SEAD 3 for anyone with a security clearance.",
    capabilities: ["Add foreign travel entries", "View travel history", "Edit travel records", "Support security clearance", "Track security compliance", "Document CZTE eligibility"],
    userTypes: ["All Marines"],
    guide: [
      {
        title: "Why This Matters",
        steps: [
          {
            step: "Security Clearance",
            details: [
              "Gaps in your travel history can trigger a 'red flag' during your background reinvestigation",
              "If you have a Secret or TS/SCI clearance, investigators WILL cross-reference your MOL travel history with your passport and flight records",
              "Gaps or 'forgotten' trips can lead to your clearance being suspended",
            ],
          },
          {
            step: "Medical Readiness",
            details: [
              "If you travel to an area with endemic diseases (like malaria), having this on your record helps Medical provide the right care if you get sick later",
            ],
          },
          {
            step: "Anti-Terrorism (AT)",
            details: [
              "The Marine Corps needs to know where you are to provide theater-specific threat briefings",
              "Ensures you aren't traveling to restricted areas",
            ],
          },
          {
            step: "Pay & Benefits",
            details: [
              "This record cross-references with your PersTempo and Pay/Leave summaries",
              "Ensures you receive the correct combat zone tax exclusions or family separation allowances",
              "Serves as supporting evidence if you ever have to prove you were in a specific country for CZTE",
            ],
          },
        ],
      },
      {
        title: "How to Add a New Entry",
        steps: [
          {
            step: "Step 1: Access the Page",
            details: [
              "Log in to MOL at https://mol.tfs.usmc.mil/",
              "Navigate to Personal Info > Foreign Travel",
              "Click the 'Add Foreign Travel' link at the top",
            ],
          },
          {
            step: "Step 2: Select the Country",
            details: [
              "In the 'Country Visited' dropdown, select the destination",
              "Note: If you visited multiple countries on one trip (like a cruise), enter each one as a separate entry",
            ],
          },
          {
            step: "Step 3: Choose the Purpose",
            details: [
              "Select the most accurate reason from the list (e.g., Annual Leave, Official Business/Orders, Liberty)",
            ],
          },
          {
            step: "Step 4: Enter the Dates",
            details: [
              "Click the Calendar button to select the Start Date (the day you left the U.S.)",
              "Click the Calendar button to select the Stop Date (the day you returned to the U.S.)",
              "Ensure your Stop Date is not before your Start Date",
            ],
          },
          {
            step: "Step 5: Submit and Confirm",
            details: [
              "Click 'Submit Changes'",
              "A confirmation prompt will appear - click 'Apply Changes' to finalize",
              "If you made a mistake, click 'Cancel' to start over",
            ],
          },
        ],
      },
      {
        title: "Common Pitfalls to Avoid",
        steps: [
          {
            step: "The Bold Delay",
            details: [
              "Don't panic if your new entry stays bold for a few days",
              "It takes 24-48 hours for the system to finalize the entry",
            ],
          },
          {
            step: "Skipping the Brief",
            details: [
              "Simply adding travel to MOL does NOT count as 'reporting'",
              "You still must receive a Terrorist Threat Brief from your S-2 and potentially submit an APACS (Aircraft and Personnel Automated Clearance System) request BEFORE you travel",
            ],
          },
          {
            step: "The One Entry Mistake",
            details: [
              "If you went on an 'Island Hopping' tour, don't just list one country",
              "List every country you stepped foot in",
            ],
          },
          {
            step: "Cruise Ship Confusion",
            details: [
              "If you go on a cruise, you must list EVERY country where the ship docks, not just the departure port",
            ],
          },
          {
            step: "Ignoring Mexico/Canada",
            details: [
              "Many Marines think 'driving across the border' doesn't count - it does",
              "Any time you leave the U.S., it must be in this report",
            ],
          },
          {
            step: "MOL vs. APACS",
            details: [
              "Adding travel to MOL after the fact is for your record",
              "You are still required to submit an APACS or IATP (Individual Anti-Terrorism Plan) request through your S-2 BEFORE you leave",
            ],
          },
        ],
      },
      {
        title: "What to Do After Submitting",
        steps: [
          {
            step: "Verification",
            details: [
              "Check back in 48 hours - once the text is no longer bold, the entry has successfully posted to MCTFS",
            ],
          },
          {
            step: "S-2 Check-in",
            details: [
              "If this was high-threat travel or you have a high-level clearance, tell your S-2 it's in MOL so they can update your security file",
            ],
          },
          {
            step: "Post-Travel Debrief",
            details: [
              "In some cases, you may be required to complete a post-travel questionnaire in MOL or with your S-2",
              "Report any 'suspicious foreign contacts' you encountered",
            ],
          },
          {
            step: "Passport Check",
            details: [
              "If you used your Official (No-Fee) Passport, ensure you returned it to the S-1/Logistics office now that your travel is complete",
            ],
          },
          {
            step: "Verify History",
            details: [
              "Review the existing list to ensure past deployments or vacations are correctly logged",
              "If a country is missing, add it now",
            ],
          },
        ],
      },
    ],
  },
  "mol-gas-mask-helmet": {
    title: "Gas Mask and Helmet Information",
    description: "A small task that has a huge impact on your gear issues and combat readiness. When you deploy or head to a large-scale exercise, the Logistics (S-4) and NBC (CBRN) sections pull reports from MOL to determine how many masks and helmets of each size they need to have in stock.",
    capabilities: ["Update gas mask size", "Update helmet size", "Update mask type", "Support supply readiness", "Ensure proper equipment fit", "Support CIF/IIF preparation"],
    userTypes: ["All Marines"],
    guide: [
      {
        title: "Why This Matters",
        steps: [
          {
            step: "Safety",
            details: [
              "If your record says 'Small' but you actually wear a 'Large,' you might be issued gear that doesn't provide a proper seal",
              "This is a life-threatening issue in a CBRN environment",
            ],
          },
          {
            step: "Supply Chain",
            details: [
              "Keeping this updated ensures the right gear is waiting for you at the window",
              "Prevents delays for your entire platoon during gear draws",
            ],
          },
        ],
      },
      {
        title: "How to Update Your Gear Sizes",
        steps: [
          {
            step: "Step 1: Check Your Actual Gear First",
            details: [
              "Don't guess - go look at your gear first",
              "Gas Mask size is stenciled on the inside of your mask's facepiece",
              "Helmet size is stenciled on the inside of the helmet shell (usually under the padding)",
            ],
          },
          {
            step: "Step 2: Access the Page",
            details: [
              "Log in to MOL at https://mol.tfs.usmc.mil/",
              "Navigate to Personal Info > Gas Mask and Helmet Information",
            ],
          },
          {
            step: "Step 3: Update Gas Mask Info",
            details: [
              "Size: Select the size (Small, Medium, Large, etc.) stenciled on your mask",
              "Type: Select the type (e.g., M50). If you aren't sure, check with your unit CBRN (NBC) NCO",
            ],
          },
          {
            step: "Step 4: Update Helmet Size",
            details: [
              "Look for the size stenciled on the inside of the helmet shell",
              "Select the corresponding size in the dropdown",
            ],
          },
          {
            step: "Step 5: Submit Changes",
            details: [
              "Click 'Submit Changes'",
              "When prompted, click 'Apply Changes' to finalize the update",
            ],
          },
          {
            step: "Step 6: View Pending",
            details: [
              "If you see a 'Details' link, click it to see your 'Pending' vs. 'Current' values",
              "You can print this summary if your CBRN NCO needs a hard copy for your training folder",
            ],
          },
        ],
      },
      {
        title: "Common Pitfalls to Avoid",
        steps: [
          {
            step: "Guessing the Fit",
            details: [
              "Just because you have a 'large' head doesn't mean you wear a 'large' mask",
              "The mask size is determined by your face seal during a fit test (gas chamber)",
              "Use the size that was verified during your last chamber hit",
            ],
          },
          {
            step: "Ignoring the Type",
            details: [
              "The Marine Corps transitioned to the M50 mask years ago, but some specialized units use different types",
              "Ensure the Type matches exactly what is in your gear bag",
            ],
          },
          {
            step: "The Bold Status",
            details: [
              "After you click apply, the new size will appear in bold",
              "This means it is 'Pending' in the system - it usually takes 24-48 hours to process",
              "Don't submit it multiple times",
            ],
          },
          {
            step: "Incorrect Helmet Sizing",
            details: [
              "If you use an aftermarket suspension system or pads, ensure you are still reporting the size of the actual helmet shell, not the pad size",
            ],
          },
        ],
      },
      {
        title: "What Happens After You Finish",
        steps: [
          {
            step: "CBRN Verification",
            details: [
              "Your unit's CBRN NCO will see this update on their readiness roster",
            ],
          },
          {
            step: "IIF/CIF Prep",
            details: [
              "The next time you go to the Consolidated Issue Facility (CIF) for a swap or new issue, their system should reflect these sizes",
              "This makes the process faster",
            ],
          },
          {
            step: "Check Your BTR",
            details: [
              "After 48 hours, verify that these sizes have migrated to your Basic Training Record (BTR)",
              "This ensures your technical data is consistent across your entire file",
            ],
          },
        ],
      },
    ],
  },
  "mol-race-ethnic": {
    title: "Race and Ethnic Information",
    description: "While this might seem like a simple administrative task, this data is used at the highest levels of the Marine Corps to track the health and diversity of the force. The Marine Corps uses this data to ensure that recruiting and promotion systems are fair and representative.",
    capabilities: ["Update race aggregate code", "Update race code", "Update ethnic code", "Self-certify demographic data", "Support EO compliance"],
    userTypes: ["All Marines"],
    guide: [
      {
        title: "Why This Matters",
        steps: [
          {
            step: "Force Health",
            details: [
              "Allows Manpower and Reserve Affairs (M&RA) to see if certain groups are being promoted or retained at different rates",
              "Can lead to policy changes to fix disparities",
            ],
          },
          {
            step: "Equal Opportunity",
            details: [
              "This data is vital for Equal Opportunity (EO) programs to monitor the 'Command Climate' of the Corps",
            ],
          },
          {
            step: "Legal Requirements",
            details: [
              "The Department of Defense is required by federal law to report these demographics to Congress annually",
            ],
          },
        ],
      },
      {
        title: "How to Update Your Codes",
        steps: [
          {
            step: "Step 1: Access the Page",
            details: [
              "Log in to MOL at https://mol.tfs.usmc.mil/",
              "Navigate to Personal Info > Race and Ethnic Information",
            ],
          },
          {
            step: "Step 2: Race Aggregate Code",
            details: [
              "This allows you to select multiple boxes if you come from a multi-racial background",
              "Note: For DoD military personnel, you CANNOT select 'Decline to make an Election' - a selection is required",
            ],
          },
          {
            step: "Step 3: Race Code",
            details: [
              "Select the primary single code that best represents your heritage",
            ],
          },
          {
            step: "Step 4: Ethnic Code",
            details: [
              "This is where you specify if you are of Hispanic or Latino origin",
              "You can select a specific group (e.g., Mexican, Puerto Rican) or select 'Declined to Respond'",
            ],
          },
          {
            step: "Step 5: Submit and Confirm",
            details: [
              "Click 'Submit Changes'",
              "Review the summary of your changes",
              "Click 'Apply Changes' to finalize or 'Cancel' to go back",
            ],
          },
        ],
      },
      {
        title: "Common Pitfalls to Avoid",
        steps: [
          {
            step: "Pending Status",
            details: [
              "After you click 'Apply Changes,' you won't see the update immediately",
              "It will be 'Pending' in the system for 24-48 hours",
              "Use the 'View Details' link to see what you submitted",
            ],
          },
          {
            step: "Multiple Races",
            details: [
              "If you are biracial, ensure you use the Aggregate section to check all boxes that apply",
              "Don't feel forced to pick just one",
            ],
          },
          {
            step: "Declining to Respond",
            details: [
              "While the 'Ethnic' code allows you to decline, the military requires a 'Race' selection for your official file",
              "This is required to comply with MCTFS reporting standards",
            ],
          },
        ],
      },
      {
        title: "What Happens After You Finish",
        steps: [
          {
            step: "Verify on BIR",
            details: [
              "Once the 'Pending' status clears, check your Basic Individual Record (BIR)",
              "This is the document used by promotion boards, so ensure your race/ethnic codes are correctly displayed there",
            ],
          },
          {
            step: "Check Your OMPF",
            details: [
              "If you recently changed your information to reflect a heritage you hadn't declared before",
              "Ensure your Official Military Personnel File (OMPF) reflects any language or cultural skills associated with that background",
            ],
          },
        ],
      },
    ],
  },
  "mol-religion": {
    title: "Religion Information",
    description: "The religious preference you select on this page is pulled into several critical areas of your service—from your dog tags to chaplain support and even your final arrangements. Taking a few minutes to ensure this data is correct can have a lasting impact on how you are supported throughout your career.",
    capabilities: ["Update religious preference", "Self-certify religion data", "Support chaplain services", "Inform dog tag embossing", "Support dietary accommodations", "Guide burial honors"],
    userTypes: ["All Marines"],
    guide: [
      {
        title: "Why This Matters",
        steps: [
          {
            step: "Dog Tags",
            details: [
              "Your religious preference is one of the five lines embossed on your ID tags",
              "In a mass-casualty event, this is how medical and chaplain staff quickly identify how to support you",
            ],
          },
          {
            step: "Chaplain Services",
            details: [
              "When you seek counseling or spiritual support, the Chaplain Corps uses this data to assign you to a chaplain of a similar faith—or to find one if needed",
              "This also informs the unit religious program fund, which buys items like prayer rugs, rosaries, or Buddhist meditation supplies",
            ],
          },
          {
            step: "Dietary Needs",
            details: [
              "In field operations, your religion data can trigger the provision of Halal or Kosher MREs if you need them",
              "In garrison, the mess hall can accommodate religious dietary laws if you request it through your chain of command",
            ],
          },
          {
            step: "Burial Honors",
            details: [
              "In the event of your death, the Casualty Assistance Calls Officer (CACO) will use this data to ensure appropriate religious rites are observed at your funeral",
              "This can include a specific clergy member, religious symbols on your headstone, or ceremonial burial customs",
            ],
          },
        ],
      },
      {
        title: "How to Update Your Religious Preference",
        steps: [
          {
            step: "Step 1: Access MOL",
            details: [
              "Log in to MOL at https://mol.tfs.usmc.mil/",
              "Navigate to Personal Info > Religion",
            ],
          },
          {
            step: "Step 2: View Current Data",
            details: [
              "Your current recorded preference will be displayed",
              "If no preference is listed, this is what will appear on your dog tags and records",
            ],
          },
          {
            step: "Step 3: Update Your Preference",
            details: [
              "Select from the dropdown list of available religions",
              "Major world religions are listed (Christianity, Islam, Judaism, Buddhism, Hinduism, Sikhism, etc.)",
              "Various Christian denominations are available for more specific designation",
              "'No Religious Preference' is a valid option",
              "If your religion is not listed, contact your Chaplain for guidance on proper coding",
            ],
          },
          {
            step: "Step 4: Submit",
            details: [
              "Click 'Submit' to save your change",
              "Changes typically process within 24-48 hours through MCTFS",
            ],
          },
        ],
      },
      {
        title: "Common Pitfalls to Avoid",
        steps: [
          {
            step: "Assuming 'No Preference' Means Atheist",
            details: [
              "'No Religious Preference' is not the same as 'Atheist' or 'Agnostic'",
              "If you actively identify as one of these, look for the specific option in the dropdown",
              "'No Religious Preference' simply means you decline to specify",
            ],
          },
          {
            step: "Forgetting to Update After Conversion",
            details: [
              "If you convert to a new faith during your service, your old religion will remain on record until you change it",
              "This affects everything from dog tags to burial rights",
            ],
          },
          {
            step: "Not Knowing the Dog Tag Impact",
            details: [
              "New dog tags are issued at supply—if your religion changed, you need to request new tags",
              "MOL updates the master record, but you still need to physically obtain new tags from your unit supply",
            ],
          },
        ],
      },
      {
        title: "What Happens After You Update",
        steps: [
          {
            step: "MCTFS Processing",
            details: [
              "Your change will be 'Pending' (bold text) until MCTFS processes it within 24-48 hours",
            ],
          },
          {
            step: "Notify Your Chaplain",
            details: [
              "If you need immediate religious accommodations (dietary, holy day observance), speak with your unit Chaplain directly",
              "They can advocate for accommodations while the system updates",
            ],
          },
          {
            step: "Request New Dog Tags",
            details: [
              "If your religion changed, visit your unit supply section to request new ID tags with the updated preference",
            ],
          },
          {
            step: "Review Your RED",
            details: [
              "Your religious preference is connected to your Record of Emergency Data",
              "Ensure your PADD and beneficiaries align with any changes in your spiritual life",
            ],
          },
        ],
      },
    ],
  },
  "mol-language-skills": {
    title: "Self-Professed Language Skills",
    description: "This page allows you to self-report any language skills beyond English. While this data is 'self-professed' (not officially tested), it feeds into the Marine Corps manpower database and can directly influence your assignment and eligibility for special billets. If you speak a second language—whether learned at home or in school—this is where you let the Corps know.",
    capabilities: ["Add language skills", "Rate proficiency levels", "Support assignment planning", "Track language abilities", "Identify interpreter candidates", "Support Foreign Language Proficiency Bonus eligibility"],
    userTypes: ["All Marines"],
    guide: [
      {
        title: "Why This Matters",
        steps: [
          {
            step: "Billet Identification",
            details: [
              "HQMC Manpower Management uses this data to identify Marines with language skills for special billets",
              "This includes assignments to Foreign Area Officer (FAO) programs, Security Cooperation roles, and Embassies",
            ],
          },
          {
            step: "Deployment Needs",
            details: [
              "Deploying units often need Marines who can communicate with local populations",
              "Your self-reported skill could result in you being selected as a 'provisional interpreter' or cultural liaison",
            ],
          },
          {
            step: "Pathway to Pay",
            details: [
              "While self-professed skills don't qualify you for Foreign Language Proficiency Bonus (FLPB) directly, they can flag you as a candidate for official testing (DLPT)",
              "If you test well on the DLPT, you can earn between $100-$500/month in extra pay depending on the language and your score",
            ],
          },
        ],
      },
      {
        title: "Understanding Proficiency Levels (ILR Scale)",
        steps: [
          {
            step: "Level Reference Guide",
            details: [
              "When selecting your level, use the Interagency Language Roundtable (ILR) scale as a mental guide:",
              "0 (None): No practical ability in the language",
              "0+ (Memorized): Can use memorized phrases (ordering food, basic greetings)",
              "1 (Elementary): Can handle routine travel needs, ask/answer simple questions",
              "1+ (Elementary+): Can handle limited work requirements with frequent errors",
              "2 (Limited Working): Can handle routine social/work situations, discuss current events",
              "2+ (Limited Working+): Can handle most complex situations with some difficulty",
              "3 (General Professional): Can discuss abstract topics, provide counsel, and understand most speech",
              "3+ (General Professional+): Occasional non-native error, broad vocabulary",
              "4 (Advanced Professional): Near-native fluency, can interpret and translate",
              "5 (Native/Bilingual): Native-level fluency in all contexts",
            ],
          },
          {
            step: "Honest Self-Assessment",
            details: [
              "Be honest - the Corps may test you to verify your claim",
              "Overestimating can lead to being placed in a role you can't handle",
              "Underestimating means you miss opportunities",
            ],
          },
        ],
      },
      {
        title: "How to Add or Update Language Skills",
        steps: [
          {
            step: "Step 1: Access MOL",
            details: [
              "Log in to MOL at https://mol.tfs.usmc.mil/",
              "Navigate to Personal Info > Self-Professed Language Skills",
            ],
          },
          {
            step: "Step 2: Review Current Data",
            details: [
              "View any languages you have previously reported",
              "Check if your proficiency levels are still accurate",
            ],
          },
          {
            step: "Step 3: Add a Language",
            details: [
              "Click 'Add Language'",
              "Select the language from the dropdown list",
              "Rate your proficiency in each skill area: Reading, Writing, Speaking, Listening",
              "Click 'Submit'",
            ],
          },
          {
            step: "Step 4: Edit Existing Language",
            details: [
              "Click on an existing language entry to modify your proficiency rating",
              "Update the skill levels as appropriate",
              "Submit your changes",
            ],
          },
        ],
      },
      {
        title: "DLPT vs Self-Professed",
        steps: [
          {
            step: "The Difference",
            details: [
              "Self-Professed: Your own estimate of your ability—not officially tested",
              "DLPT (Defense Language Proficiency Test): The official DoD test that determines language pay",
            ],
          },
          {
            step: "Why Both Exist",
            details: [
              "Not every language has a DLPT available",
              "Self-professed data helps the Corps identify 'hidden' language talent",
              "If you score well on the DLPT, your self-professed entry becomes validated",
            ],
          },
          {
            step: "Foreign Language Proficiency Bonus (FLPB)",
            details: [
              "Only DLPT scores qualify you for FLPB pay",
              "FLPB ranges from $100-$500/month depending on language and proficiency",
              "Self-professed skills can get you noticed for testing opportunities",
            ],
          },
        ],
      },
      {
        title: "Common Pitfalls to Avoid",
        steps: [
          {
            step: "Overestimating to Get a Billet",
            details: [
              "If you claim 'High' proficiency and are selected for an interpreter role you can't handle, you will be replaced and flagged",
              "Be accurate—there will be opportunities to improve and test",
            ],
          },
          {
            step: "Forgetting Heritage Languages",
            details: [
              "Many Marines grew up speaking Spanish, Tagalog, Vietnamese, or other languages at home",
              "Even if you never studied it formally, you may have 'Limited Working' proficiency worth reporting",
            ],
          },
          {
            step: "Not Knowing DLPT Availability",
            details: [
              "Before assuming you can't get tested, check with your Education Center or S-3",
              "Many common languages (Arabic, Chinese, Korean, Spanish, Russian, etc.) have DLPTs available",
            ],
          },
        ],
      },
      {
        title: "What Happens After You Update",
        steps: [
          {
            step: "Data Flows to MCTFS",
            details: [
              "Your self-professed language skills are recorded in the Marine Corps Total Force System",
              "This data is visible to manpower planners at HQMC",
            ],
          },
          {
            step: "Potential DLPT Scheduling",
            details: [
              "If you report a skill in a 'strategic' language, your unit may be notified that you should be scheduled for official testing",
            ],
          },
          {
            step: "Assignment Consideration",
            details: [
              "Future monitors and assignment officers can see your language skills when making billet decisions",
              "This can influence PCS orders, deployment taskings, and special duty assignments",
            ],
          },
        ],
      },
    ],
  },
  "mol-red-certification": {
    title: "RED Certification",
    description: "The RED Certification transaction allows Marines to electronically certify that their Record of Emergency Data (RED) is current and accurate. RED certification is required for deployment readiness.",
    capabilities: ["Certify RED accuracy", "View RED status", "Support deployment readiness"],
    userTypes: ["All Marines"],
    guide: [
      {
        title: "Accessing RED Certification",
        steps: [
          { step: "Log in to MOL at https://mol.tfs.usmc.mil/" },
          { step: "Navigate to Personal Info > Record of Emergency Data" },
          { step: "Review all RED sections for accuracy" },
        ],
      },
      {
        title: "Before Certifying",
        steps: [
          {
            step: "Review All Sections",
            details: [
              "Family Information - Spouse and children addresses",
              "Parents - Parent contact information",
              "Pay Arrears - Beneficiaries for unpaid compensation",
              "Next of Kin - Emergency contacts",
              "Death Gratuity - Beneficiary designations",
              "PADD - Person Authorized to Direct Disposition",
              "Insurance - SGLI and other coverage",
            ],
          },
          { step: "If any information is incorrect, edit that section first" },
          { step: "Editing automatically certifies that section" },
        ],
      },
      {
        title: "Certifying Your RED",
        steps: [
          { step: "If all information is accurate, click 'Certify' button" },
          { step: "Confirm certification when prompted" },
          { step: "Certification date is recorded in your personnel file" },
        ],
      },
      {
        title: "When to Certify",
        steps: [
          {
            step: "Required Certification Times",
            details: [
              "Annually at minimum",
              "Before deployment",
              "After major life events (marriage, divorce, birth of child)",
              "After PCS moves",
              "When directed by command",
            ],
          },
        ],
      },
      {
        title: "Certification Requirements",
        steps: [
          { step: "A certified RED is required for deployment readiness" },
          { step: "Uncertified RED may affect your deployability status" },
          { step: "CMC Casualty view shows pending changes and certification status" },
        ],
      },
    ],
  },
  "mol-w2-electronic": {
    title: "W2/W2C Electronic Delivery",
    description: "The W2/W2C Electronic Delivery transaction allows Marines to opt in or out of electronic delivery for W-2 tax statements. Electronic delivery provides faster access to tax documents.",
    capabilities: ["Opt in to electronic W-2", "Opt out to paper delivery", "Manage delivery preferences"],
    userTypes: ["All Marines"],
    guide: [
      {
        title: "Accessing W2 Delivery Settings",
        steps: [
          { step: "Log in to MOL at https://mol.tfs.usmc.mil/" },
          { step: "Navigate to Personal Info > W2 Tax Statements" },
          { step: "View your current delivery preference" },
        ],
      },
      {
        title: "Opting In to Electronic Delivery",
        steps: [
          { step: "Click to change your delivery preference" },
          { step: "Select 'Electronic Delivery'" },
          { step: "Confirm your email address for notifications" },
          { step: "Submit your preference change" },
        ],
      },
      {
        title: "Benefits of Electronic Delivery",
        steps: [
          {
            step: "Advantages",
            details: [
              "Faster access - available as soon as released",
              "No lost mail - always accessible in MOL",
              "Environmentally friendly",
              "Can print multiple copies as needed",
              "Access prior year W-2s easily",
            ],
          },
        ],
      },
      {
        title: "Opting Out to Paper Delivery",
        steps: [
          { step: "Select 'Hard Copy' or paper delivery option" },
          { step: "W-2 will be mailed to your address of record" },
          { step: "Ensure your mailing address is current" },
          { step: "Paper delivery takes longer to receive" },
        ],
      },
      {
        title: "Important Notes",
        steps: [
          { step: "Separated/Retired Marines cannot change delivery method" },
          { step: "W-2s are typically available by late January" },
          { step: "Keep your contact information current for delivery notifications" },
        ],
      },
    ],
  },
  "mol-personal-information": {
    title: "Personal Information (PI)",
    description: "Provides individual members access to view their own personnel records as recorded within the MCTFS or interfacing application. Self-Certified transactional reporting capabilities are provided to users for select data elements not requiring two-factor review. Reports are generated using a combination of local database queries (MED) and service calls directly to the MCTFS (SOA APIs).",
    capabilities: ["View personnel records", "Self-certified transactions", "Access electronic records (ARCR, ACIP, BIR, BTR, etc.)", "Update contact information", "Manage emergency data", "View W2 statements"],
    userTypes: ["Individual Members"],
    electronicRecords: ["Annual Retirement Credit Report (ARCR)", "Aviation Career Incentive Pay (ACIP)", "Awards", "Basic Individual Record (BIR)", "Basic Training Record (BTR)", "BRS/TSP", "Civilian Employment Information (CEI)", "Chronological Record (CHRO)", "Education", "Family Care Plan (FCP)", "Individual Medical Readiness (IMR)", "Pay and Leave Summary", "Pers-Tempo", "Personal Statement of Military Compensation (PSMC)", "Record of Emergency Data (RED)", "Reserve Drill Summary", "Record of Service (ROS)", "W2 Tax Statements"],
    selfCertifiedTransactions: ["Blended Retirement Opt-In/Out", "Acknowledgements", "Career Designation (Officer)", "Career Retirement Certification", "Civilian Employment Information", "Contact Information", "Foreign Travel", "Gas Mask and Helmet", "Race/Ethnic", "Religion", "Self-professed Language Skills", "RED Certification", "W2/W2C Electronic Delivery"],
    guide: [
      {
        title: "Accessing Personal Information",
        steps: [
          { step: "Log in to MOL at https://mol.tfs.usmc.mil/" },
          { step: "Navigate to the \"Personal Info\" menu item on the main navigation bar" },
          { step: "Select the desired report or update category from the available options" },
        ],
      },
      {
        title: "Personal Reports Overview",
        steps: [
          {
            step: "Available Reports",
            details: [
              "Annual Retirement Credit Report (ARCR) - Retirement point summary for reserve Marines",
              "Aviation Career Incentive Pay (ACIP) - Flight pay eligibility and status",
              "Awards - View decorations, medals, and unit awards",
              "Basic Individual Record (BIR) - Comprehensive personnel snapshot",
              "Basic Training Record (BTR) - Training history and qualifications",
              "BRS/TSP - Blended Retirement System and Thrift Savings Plan info",
              "Chronological Record (CHRO) - Timeline of significant career events",
              "Education - Civilian and military education records",
              "Family Care Plan (FCP) - Dependent care arrangements",
              "Individual Medical Readiness (IMR) - Medical readiness status",
              "Pay and Leave Summary - Current pay and leave balances",
              "Pers-Tempo - Personnel tempo tracking",
              "Personal Statement of Military Compensation (PSMC) - Total compensation breakdown",
              "Record of Emergency Data (RED) - Emergency contacts and beneficiaries",
              "Reserve Drill Summary - Drill attendance for reservists",
              "Record of Service (ROS) - Complete service record",
              "W2 Tax Statements - Annual tax documents",
            ],
          },
        ],
      },
      {
        title: "Civilian Employment Information (CEI)",
        steps: [
          {
            step: "Overview",
            details: [
              "Required for Reserve Component members to track civilian employment",
              "Information may be used by the DoD to contact employers in case of mobilization",
            ],
          },
          {
            step: "Required Information",
            details: [
              "Date: Effective date of the employment record",
              "Employer Name: Name of your current civilian employer",
              "Street Address: Employer's street address",
              "City, State, and Zip Code: Employer's location",
              "Phone Number: Employer's contact phone",
              "Email Address: Employer's contact email",
              "Occupation: Your job title or role",
              "Full Time/Part Time: Employment status indicator",
            ],
          },
          {
            step: "Employment Status Questionnaire",
            details: [
              "Specify if you are a federal civil service employee",
              "Indicate if the position is vital to national defense",
              "Answer if you are a union member or self-employed",
              "Note if you have pre-mobilization orders or permission to mobilize",
              "Identify any employer restrictions on your availability",
            ],
          },
        ],
      },
      {
        title: "Personal Contact Information",
        steps: [
          {
            step: "Address Types",
            details: [
              "US Address: Standard domestic address format (Street, City, State, ZIP)",
              "APO/FPO/DPO: Military postal address format for overseas locations",
              "Foreign Address: International address with country code",
            ],
          },
          {
            step: "Update Process",
            details: [
              "Navigate to Personal Info > Contact Information",
              "Select the appropriate address type (US, APO/FPO/DPO, or Foreign)",
              "Enter all required address fields",
              "Add phone numbers: Primary, Secondary, Work, and Cell",
              "Enter email addresses for official correspondence",
              "Review and submit the update",
            ],
          },
          {
            step: "US Address Fields",
            details: [
              "Effective Date: When the address change takes effect",
              "Street Address: Street number and name (up to 50 characters)",
              "Apartment/Unit: Optional additional address line",
              "City: City or town name",
              "State: Two-letter state abbreviation",
              "ZIP Code: 5-digit or 9-digit ZIP code",
            ],
          },
          {
            step: "APO/FPO/DPO Address Fields",
            details: [
              "Unit/Box Number: Military unit or box designation",
              "APO/FPO/DPO: Select the appropriate military post office type",
              "ZIP Code: Military postal ZIP code",
            ],
          },
          {
            step: "Phone Number Fields",
            details: [
              "Primary Phone: Main contact number (required)",
              "Secondary Phone: Backup contact number",
              "Work Phone: Office or duty station number",
              "Cell Phone: Mobile phone number",
              "Include area codes for all phone numbers",
            ],
          },
        ],
      },
      {
        title: "Foreign Travel",
        steps: [
          {
            step: "Overview",
            details: [
              "Record foreign travel history for security and personnel tracking",
              "Required for certain clearance levels and positions",
            ],
          },
          {
            step: "Adding a Foreign Travel Entry",
            details: [
              "Navigate to Personal Info > Foreign Travel",
              "Click \"Add Foreign Travel\" to create a new entry",
              "Enter the Country visited from the dropdown list",
              "Provide Departure Date (when you left the US)",
              "Provide Return Date (when you returned to the US)",
              "Enter Purpose of Travel (official duty, leave, emergency, etc.)",
              "Add any additional notes or details",
              "Submit the entry for recording",
            ],
          },
        ],
      },
      {
        title: "Gas Mask and Helmet Information",
        steps: [
          {
            step: "Overview",
            details: [
              "Self-report protective equipment sizing for supply and readiness purposes",
              "Ensures correct equipment is available during deployments",
            ],
          },
          {
            step: "Gas Mask Information",
            details: [
              "Navigate to Personal Info > Gas Mask and Helmet",
              "Select your Gas Mask Size from available options (XS, S, M, L, XL)",
              "Confirm the mask type if prompted",
              "Submit to update your record",
            ],
          },
          {
            step: "Helmet Information",
            details: [
              "Select your Helmet Size from available options",
              "Common sizes: Small, Medium, Large, X-Large",
              "Verify the helmet type matches your issued equipment",
              "Submit to update your record",
            ],
          },
        ],
      },
      {
        title: "Personnel Accountability Information",
        steps: [
          {
            step: "Overview",
            details: [
              "Self-report status during disaster declarations and emergencies",
              "Report location, contact information, and dependent status",
              "See the Personnel Accountability (PA) module for detailed disaster response procedures",
            ],
          },
          {
            step: "Reporting Your Status",
            details: [
              "Log into MOL when a disaster is declared",
              "Navigate to Personal Info > Personnel Accountability",
              "Select your current status: Accounted For, Injured, Evacuated, etc.",
              "Update your current location if different from recorded address",
              "Provide a contact phone number where you can be reached",
              "Report the status of your dependents",
              "Submit to notify your chain of command",
            ],
          },
        ],
      },
      {
        title: "Race and Ethnic Information",
        steps: [
          {
            step: "Overview",
            details: [
              "Self-certify race and ethnicity data for personnel records",
              "Used for demographic reporting and equal opportunity compliance",
            ],
          },
          {
            step: "Updating Race/Ethnic Information",
            details: [
              "Navigate to Personal Info > Race/Ethnic",
              "Select your Ethnicity: Hispanic or Latino, or Not Hispanic or Latino",
              "Select one or more Race categories",
              "Race options: American Indian/Alaska Native, Asian, Black/African American, Native Hawaiian/Pacific Islander, White",
              "You may select multiple race categories if applicable",
              "Submit to update your record",
            ],
          },
        ],
      },
      {
        title: "Religion Information",
        steps: [
          {
            step: "Overview",
            details: [
              "Self-certify religious preference for personnel records",
              "Used for chaplain support, dietary considerations, and casualty notification",
            ],
          },
          {
            step: "Updating Religion Preference",
            details: [
              "Navigate to Personal Info > Religion",
              "Select your religious preference from the available list",
              "Options include major world religions and 'No Religious Preference'",
              "Submit to update your record",
              "Changes are reflected in your personnel file and RED",
            ],
          },
        ],
      },
      {
        title: "Self-Professed Language Skills",
        steps: [
          {
            step: "Overview",
            details: [
              "Report language skills beyond your primary language",
              "May be used for assignment considerations and special duty selection",
            ],
          },
          {
            step: "Adding a Language",
            details: [
              "Navigate to Personal Info > Self-Professed Language Skills",
              "Click \"Add Language\" to enter a new skill",
              "Select the Language from the dropdown list",
              "Rate your Reading proficiency (None, Low, Medium, High, Native)",
              "Rate your Writing proficiency (None, Low, Medium, High, Native)",
              "Rate your Speaking proficiency (None, Low, Medium, High, Native)",
              "Rate your Listening proficiency (None, Low, Medium, High, Native)",
              "Submit to add the language to your record",
            ],
          },
          {
            step: "DLPT Scores",
            details: [
              "If you have taken the Defense Language Proficiency Test (DLPT), official scores are recorded separately",
              "Self-professed skills are for languages not formally tested",
              "Contact your S-1/Admin for DLPT score discrepancies",
            ],
          },
        ],
      },
      {
        title: "Record of Emergency Data (RED) Overview",
        steps: [
          {
            step: "Overview",
            details: [
              "Update beneficiaries and emergency contacts",
              "Critical for casualty notification and survivor benefits",
              "Review RED at least annually or after major life events",
              "RED is divided into sections: Family Information, Parents, Pay Arrears, Do Not Notify, Insurance, Next of Kin, MIA Notification, and PADD",
            ],
          },
          {
            step: "RED Certification",
            details: [
              "Navigate to Personal Info > RED",
              "Review all current emergency contacts and beneficiaries",
              "Verify addresses and phone numbers are current",
              "Certify the RED to confirm accuracy",
              "A certified RED is required for deployment readiness",
            ],
          },
          {
            step: "Display Indicators",
            details: [
              "Pending information displays in bold type",
              "Records marked for removal display in red type or strike-through",
              "A 'D' next to a parent's name indicates they are deceased",
            ],
          },
        ],
      },
      {
        title: "RED Family Information",
        steps: [
          {
            step: "Managing Address Information",
            details: [
              "To change your mailing address, click the Edit Address link under the Mailing Address heading",
              "To indicate a separate address for your spouse, click the Edit Address link next to their name",
              "To indicate a separate address for a child, click the Edit Child link next to their name",
              "To view transaction details, click the Details link next to a record",
              "To remove an address, click Remove This Address and confirm",
              "To use your spouse's address for a child, click Use Spouse Address",
            ],
          },
          {
            step: "Managing Spouse and Child Information",
            details: [
              "To edit a child's information, click the Edit Child link",
              "To update spouse's preferred language, click Add/Edit Spouse Preferred Language",
              "(Non-Marines only) Click Add Spouse or Add Additional Child to add records",
              "(Non-Marines only) Click Remove Child or Remove Spouse to delete records",
              "To cancel pending changes, click Cancel Pending Transaction",
            ],
          },
          {
            step: "Editing US Address Information",
            details: [
              "Click Reformat This Address if needed for US, APO/FPO, or Foreign format",
              "(Non-Marines only) Enter the Name in the Name box",
              "(Non-Marines adding child) Select Date of Birth month, date, and year",
              "Enter street address in the Address box",
              "Select State from dropdown, then City from populated dropdown",
              "Select County if city spans multiple counties",
              "Enter Zip code and click Submit Changes",
            ],
          },
          {
            step: "Editing Foreign Address Information",
            details: [
              "Click Reformat This Address for Foreign (Non-APO/FPO) format",
              "Enter address information in the Address boxes",
              "Select Country from dropdown, then City from populated dropdown",
              "Click Submit Changes and confirm with Apply Changes",
            ],
          },
        ],
      },
      {
        title: "RED Parents Information",
        steps: [
          {
            step: "Viewing and Editing Parent Records",
            details: [
              "To remove an address, click Remove This Address and confirm",
              "To cancel a pending removal, click Cancel Removal",
              "To edit a record, click the Edit link",
              "A 'D' next to a parent's name indicates deceased status",
            ],
          },
          {
            step: "Indicating a Parent is Deceased",
            details: [
              "Check the Deceased checkbox next to the parent's name",
              "You do not need to enter additional information",
              "The address record is automatically removed when you click Submit Changes",
            ],
          },
          {
            step: "Changing US Address for Parents",
            details: [
              "Do not type any punctuation",
              "Click Reformat This Address if format is incorrect",
              "Enter street address in Address box",
              "For PO Box or rural route, also add to Next of Kin Directions",
              "Enter City, State (initials), and Zip code",
              "Click Submit Changes and confirm with Apply Changes",
            ],
          },
        ],
      },
      {
        title: "RED Pay Arrears (Unpaid Pay/Allowances)",
        steps: [
          {
            step: "Overview",
            details: [
              "Designate beneficiaries to receive compensation if you are missing or killed",
              "Benefits can include unused leave, unpaid pay and allowances",
              "Each beneficiary has a percentage of total benefits assigned",
              "Total percentages cannot exceed 100%",
            ],
          },
          {
            step: "Adding a Beneficiary",
            details: [
              "Click Add New Pay Arrears Record",
              "If existing beneficiaries total 100%, edit one to a smaller percentage first",
              "Enter Name in the Name box",
              "Select Relationship from the dropdown",
              "Select Percentage of benefits for this person",
              "Enter address information (US or Foreign format)",
              "Click Submit Changes and confirm",
            ],
          },
          {
            step: "Managing Beneficiary Records",
            details: [
              "To edit a record, click the Edit link",
              "To remove a beneficiary, click Remove and confirm",
              "To remove just an address, click Remove This Address",
              "To cancel a pending removal, click Cancel Removal",
            ],
          },
        ],
      },
      {
        title: "RED Do Not Notify",
        steps: [
          {
            step: "Overview",
            details: [
              "List family members who should NOT be notified in case of emergency",
              "Used for family members with ill health or other valid reasons",
            ],
          },
          {
            step: "Adding Do Not Notify Records",
            details: [
              "Click Reformat This Address if needed for US or Foreign format",
              "Enter the Name in the Name box",
              "Select Relationship from the dropdown",
              "Enter address information (do not use punctuation)",
              "Click Submit Changes and confirm with Apply Changes",
            ],
          },
        ],
      },
      {
        title: "RED Insurance Information",
        steps: [
          {
            step: "Overview",
            details: [
              "Record insurance companies that handle claims on your behalf",
              "Can display up to five insurance records",
              "Information used to process claims in the event of death",
            ],
          },
          {
            step: "Managing Insurance Records",
            details: [
              "To add a record (if fewer than five exist), click Add New Insurance Record",
              "To edit a record, click the adjacent Edit link",
              "To remove a record, click Remove and confirm",
              "To cancel a pending removal, click Cancel Removal",
            ],
          },
          {
            step: "Adding/Editing Insurance Information",
            details: [
              "Enter insurance company name and policy number (max 25 characters)",
              "May need to abbreviate company name (e.g., StateFrm12356789123456789)",
              "Click Submit Changes and confirm with Apply Changes",
            ],
          },
        ],
      },
      {
        title: "RED Next of Kin (NOK)",
        steps: [
          {
            step: "Overview",
            details: [
              "List up to three Next of Kin contacts",
              "Includes relationship, phone numbers, and directions to residence",
            ],
          },
          {
            step: "Managing NOK Records",
            details: [
              "To add a NOK record, click Add Next of Kin Record",
              "To update an existing record, click the adjacent Edit link",
              "To remove a record, click Remove and confirm",
              "To cancel a pending removal, click Cancel Removal",
            ],
          },
          {
            step: "Managing Primary NOK Directions",
            details: [
              "To add directions, click Add New Directions Record under Primary Next of Kin Directions",
              "To edit existing directions, click Edit beside Primary Next of Kin Directions",
              "To remove directions, click Remove and confirm",
            ],
          },
          {
            step: "Updating NOK Contact Information",
            details: [
              "Select Relationship from the dropdown",
              "Click reformat this phone for US or overseas phone format",
              "For US: enter area code and telephone number (up to 10 digits)",
              "For overseas: enter country code, city code, and number (up to 15 digits)",
              "Find country codes at www.countrycallingcodes.com",
              "Click Submit Changes and confirm",
            ],
          },
          {
            step: "Adding NOK Directions",
            details: [
              "Enter directions to locate Primary NOK (up to 35 characters per line, 5 lines available)",
              "For overseas NOK, include phone numbers in directions",
              "If using PO Box or rural route, include in directions",
              "Do not use special characters when abbreviating (e.g., use 'and' not '&')",
              "Click Submit Changes and confirm",
            ],
          },
        ],
      },
      {
        title: "RED MIA (Missing in Action) Notification",
        steps: [
          {
            step: "Overview",
            details: [
              "Designate who to notify if you are listed as Missing in Action",
              "Includes name, directions, phone numbers, and relationship",
            ],
          },
          {
            step: "Managing MIA Records",
            details: [
              "To add a record, click Add New MIA Notify Record",
              "To edit a record, click the Edit link",
              "To remove a record, click Remove and confirm",
            ],
          },
          {
            step: "Entering MIA Contact Information",
            details: [
              "Enter first name, middle initial, and last name in the Name boxes",
              "Enter directions to locate residence (up to 5 lines)",
              "For overseas contacts, include phone numbers in directions",
              "If using PO Box or rural route, include in directions",
              "Enter First Phone (area code and number)",
              "Enter Second Phone (area code and number)",
              "Select Relationship from the dropdown",
              "Click Submit Changes and confirm",
            ],
          },
        ],
      },
      {
        title: "RED Death Gratuity",
        steps: [
          {
            step: "Overview",
            details: [
              "Death gratuity is a monetary amount paid to help offset expenses if you die",
              "Federal law states it is paid to your spouse or non-minor children",
              "Additional beneficiaries receive the money if primary beneficiaries cannot",
              "You cannot edit primary beneficiary information in MOL",
              "You can edit information for Additional Beneficiaries",
              "Maximum of 10 beneficiaries allowed",
              "Total allocation must equal 100%",
            ],
          },
          {
            step: "Managing Death Gratuity Records",
            details: [
              "To add a record, click Add Additional Death Gratuity Record",
              "To edit an existing record, click the adjacent Edit link",
              "To remove a record, click Remove and confirm with Apply Changes",
              "To cancel a pending removal, click Cancel Removal and confirm",
            ],
          },
          {
            step: "Adding/Editing Beneficiary Information",
            details: [
              "Click Reformat This Address for US or Foreign format",
              "Enter Name in the Name box",
              "Select Relationship from the dropdown",
              "If married and selecting less than 100% for spouse, an advisory is generated to command",
              "Select Percentage of total death gratuity for this person",
              "Cumulative percentages cannot exceed 100%",
            ],
          },
          {
            step: "Entering US Address",
            details: [
              "Do not type any punctuation",
              "Enter street address in Address box",
              "Enter City, State (initials), and Zip code",
              "Enter Phone in area code-prefix-suffix-extension format",
              "Click Submit Changes and confirm",
            ],
          },
          {
            step: "Entering Foreign Address",
            details: [
              "Do not type any punctuation",
              "Enter address in Address boxes",
              "Enter Phone in country code-city code-phone number-extension format",
              "Click Submit Changes and confirm",
            ],
          },
        ],
      },
      {
        title: "RED Person Authorized to Direct Disposition (PADD)",
        steps: [
          {
            step: "Overview",
            details: [
              "PADD is the person who makes all arrangements in the event of your death",
              "You may designate any person who is at least 18 years old",
              "Your designation supersedes the order of precedence in DODI 1300.18",
              "Date of Birth is required to verify the person is of legal age",
            ],
          },
          {
            step: "Order of Precedence (if no PADD designated)",
            details: [
              "Unremarried Surviving Spouse",
              "Natural and adopted children of legal age (18+) in order of seniority",
              "Parents in order of seniority (unless legal exclusive custody was granted to another)",
              "Blood or adoptive relative who was granted legal custody",
              "Brothers or sisters of legal age in order of seniority",
              "Grandparents in order of seniority",
              "Other relatives of legal age in order of relationship",
              "Remarried surviving spouse, persons in loco parentis, or legal representative of the estate",
            ],
          },
          {
            step: "Editing PADD Information",
            details: [
              "Click Edit link to access the Update RED PADD page",
              "Select address format: US Address, APO/FPO Address, or Foreign Address",
              "Find country codes at www.countrycallingcodes.com",
            ],
          },
          {
            step: "US Address Entry",
            details: [
              "Do not type any punctuation",
              "Enter Name in the Name box",
              "Enter Date of Birth in DD MMM YYYY format (e.g., 01 Feb 1975)",
              "Select Relationship from dropdown",
              "Enter Address, City, State (initials), and Zip plus four",
              "Enter Phone (Area Code, Phone Number, Extension if applicable)",
              "Click Submit Changes and confirm",
            ],
          },
          {
            step: "APO/FPO Address Entry",
            details: [
              "Enter Name and Date of Birth (DD MMM YYYY format)",
              "Select Relationship from dropdown",
              "Enter PSC/Box or Unit/UIC",
              "Select APO or FPO",
              "Select AA, AE, or AP",
              "Enter Zip plus four code",
              "Enter Phone (Country Code, City Code, Phone Number, Extension)",
              "Click Submit Changes and confirm",
            ],
          },
          {
            step: "Foreign Address Entry",
            details: [
              "Do not type any punctuation",
              "Enter Name and Date of Birth (DD MMM YYYY format)",
              "Select Relationship from dropdown",
              "Enter address in Address boxes",
              "Enter Phone (Country Code, City Code, Phone Number, Extension)",
              "Click Submit Changes and confirm",
            ],
          },
        ],
      },
      {
        title: "W2/W2C Electronic Delivery",
        steps: [
          {
            step: "Overview",
            details: [
              "Opt in to receive W2 tax statements electronically",
              "Provides faster access to tax documents",
            ],
          },
          {
            step: "Enrollment",
            details: [
              "Navigate to Personal Info > W2 Electronic Delivery",
              "Select \"Opt In\" to receive electronic W2 statements",
              "Confirm your email address for notifications",
              "W2 forms will be available in MOL when released each tax year",
              "You can opt out at any time to return to paper delivery",
            ],
          },
        ],
      },
    ],
  },
  "mol-promotion-recs": {
    title: "Promotion Recs",
    description: "Provides authorized unit leaders the ability to make monthly/quarterly promotion recommendations for Marines (Private - Corporal) within their organizational scope. Final Rec/Non-Rec recommendations generate transactional updates to the MCTFS upon approval by the Commanding Officer. If a Marine is selected for promotion through the automated MCTFS promotion selection process, the Commanding Officer may choose to remove the selection status from the MCTFS through this module. Additionally, unit administrative personnel may generate Promotion Warrants in PDF format for Marines selected for promotion.",
    capabilities: ["Monthly/quarterly promotion recommendations", "Rec/Non-Rec submissions", "Remove promotion selection status", "Generate Promotion Warrants (PDF)", "Report to MCTFS"],
    userTypes: ["Unit Leaders", "Commanding Officers", "Administrative Personnel"],
  },
  "mol-trouble-ticket-system": {
    title: "Trouble Ticket System (TTS)",
    description: "Provides individual members and authorized unit leaders the ability to submit system issues to their jurisdictional Manpower Information System Support Office (MISSO). Tickets can be initiated by the member or unit leader within MOL. Tickets can be initiated by Installation Personnel Admin Centers or stand-alone Reporting Units through the Unit Diary / Marine Integrated Personnel Service (UD/MIPS).",
    capabilities: ["Submit system issues", "Route to jurisdictional MISSO", "Initiate from MOL", "Initiate from UD/MIPS", "Track ticket status"],
    userTypes: ["Individual Members", "Unit Leaders", "IPACs", "Reporting Units"],
    guide: [
      {
        title: "Access and Navigation",
        steps: [
          { step: "Log in to MOL at https://mol.tfs.usmc.mil/" },
          { step: "Click the \"Trouble Tickets\" menu item on the main navigation bar" },
          { step: "Select \"New Trouble Ticket\" at the top of the screen" },
        ],
      },
      {
        title: "Define the Issue",
        steps: [
          {
            step: "Verify your information",
            details: ["The page will prepopulate your basic details", "Ensure your Work Email and Work Phone are correct"],
          },
          {
            step: "Select Application",
            details: ["Click the \"Application\" dropdown menu", "Choose the relevant category (e.g., Marine Online, COGNOS, MCTFS)"],
          },
          { step: "Select Subject from the next dropdown menu after picking an application" },
          {
            step: "Check Instructions",
            details: ["If applicable, an \"Instructions and Forms\" tab will appear", "Review any special requirements for your selected category"],
          },
        ],
      },
      {
        title: "Add Details and Documentation",
        steps: [
          {
            step: "Provide Notes",
            details: ["Use the \"Notes\" tab to describe the requested action and any source documentation", "Click \"Add Note\" when finished"],
          },
          {
            step: "Upload Files",
            details: ["Use the \"Files\" tab to upload supporting documentation", "Add a description for each file if uploading more than one", "Click \"Add File\" when done"],
          },
          { step: "Review History - use the \"History\" tab to view all recorded actions on the ticket" },
        ],
      },
      {
        title: "Submission",
        steps: [
          { step: "Double-check your work and click \"Submit Ticket\"" },
          {
            step: "Draft option",
            details: ["If you are not ready to submit, click \"Save Changes\" to return to the ticket later"],
          },
        ],
      },
      {
        title: "What Happens After Submission",
        steps: [
          { step: "Your ticket will be reviewed by Command personnel in your unit" },
          { step: "Command personnel will determine the necessary action and route to MISSO if needed" },
        ],
      },
    ],
    useCases: [
      "Technical Issues: Problems with specific MOL modules (Awards, Leave/Absence, EPAR, etc.)",
      "System Errors: Application or system-level issues within MOL, COGNOS, or MCTFS",
      "Access Requests: Requesting specific permissions or access levels through your chain of command",
      "Administrative Appointments: Actions like Assumption of Command or new Commanding Officer appointments",
    ],
  },
  "mol-umsr": {
    title: "Unit Management Status Report (UMSR)",
    description: "Provides authorized unit leaders the ability to execute daily muster of personnel (morning report) including gains/losses, duty status changes, and discrepancy reports. Summary and Detail personnel reports are available at the battalion unit level as well as roll-up to higher-headquarter organizations. Organizational changes to the Company, Platoon, and/or Work Station assignment trigger transactional updates to the MCTFS. Drop (loss) actions on Non-Marines additionally generate transactional updates on the member resulting in the separation being recorded within the MCTFS. Business processes are implemented to ensure changes to a member's unit assignment are pushed to other applications that may be impacted such as Leave & Liberty, Permissions Management, and JEPES. Nightly reconciliation occurs to ensure that UMSR organizational associations are in sync with MCTFS external reporting activities.",
    capabilities: ["Daily muster (morning report)", "Track gains/losses", "Duty status changes", "Discrepancy reports", "Summary and detail reports", "Roll-up to higher HQ", "Co/Plt/WS assignment changes", "Non-Marine separation processing", "Nightly MCTFS reconciliation"],
    userTypes: ["Unit Leaders"],
  },
  "mol-unit-reports-cognos": {
    title: "Unit Reports (Cognos)",
    description: "Provides authorized users ad hoc and canned reporting capabilities on enterprise pay and personnel records, and application data.",
    capabilities: ["Ad hoc reporting", "Canned reports", "Pay records reporting", "Personnel records reporting", "Application data reporting"],
    userTypes: ["Authorized Users", "Unit Leaders", "Administrative Personnel"],
  },
  "mol-user-management": {
    title: "User Management",
    description: "Provides authorized command representatives the ability to manage user accounts within their organizational scope. Additionally, transaction reporting capability exists for establishing and maintaining Non-Marine records within the MCTFS.",
    capabilities: ["Manage user accounts", "Scope to organization", "Establish Non-Marine records", "Maintain Non-Marine records", "Report to MCTFS"],
    userTypes: ["Command Representatives"],
  },
  "mol-view-reports": {
    title: "View Reports",
    description: "Provides authorized command representatives the ability to view individual member personnel records as recorded within the MCTFS. (See Personal Information module for full details)",
    capabilities: ["View member personnel records", "Access MCTFS data", "Scoped to organizational hierarchy"],
    userTypes: ["Command Representatives"],
  },
  "mol-login-cac-setup": {
    title: "MOL Login & CAC Setup",
    description: "Uniformed Marines can gain access to Marine Online (MOL) through a self-registration process. This guide walks you through the complete registration process and CAC association.",
    capabilities: ["Self-registration for MOL access", "CAC association", "Password creation", "Account setup"],
    userTypes: ["All Marines"],
    guide: [
      {
        title: "Step 1: Access the Registration Page",
        steps: [
          { step: "Go to the MOL website at https://mol.tfs.usmc.mil/" },
          { step: "Under the \"Need Help?\" section, click the link that says \"Don't have an account? Register here!\"" },
        ],
      },
      {
        title: "Step 2: Enter Personal Identification",
        steps: [
          { step: "Name: Enter your First Name and Last Name (include any suffixes in the last name field)" },
          { step: "Social Security Number: Enter your 9-digit SSN without any dashes or spaces" },
          { step: "Date of Birth: Enter your birth date using the format dd Mon yyyy (e.g., 01 Jan 2000)" },
        ],
      },
      {
        title: "Step 3: Enter Military and Contact Data",
        steps: [
          {
            step: "PEBD: Enter your Pay Entry Base Date in the dd Mon yyyy format",
            details: ["If you are unsure of this date, it can be found in section 8 of your Leave and Earnings Statement (LES)"],
          },
          {
            step: "Primary MOS: Enter your four-digit Primary MOS",
            details: [
              "If you have finished recruit training but not MOS school, use 8011",
              "If you have started MOS school, use your intended general field (e.g., 0300 for Infantry or 0100 for Admin)",
            ],
          },
          { step: "Contact Phone: Enter your primary phone number, including the area code, DSN prefix, or country code" },
        ],
      },
      {
        title: "Step 4: Security and Account Creation",
        steps: [
          {
            step: "Create Password: Enter and confirm a password that meets the following requirements",
            details: [
              "Between 15 and 50 characters",
              "At least two uppercase and two lowercase letters",
              "At least two numbers",
              "At least two special characters (Valid: !@#$%&*?()+{}_|-=)",
            ],
          },
          { step: "Submit: Click \"Submit\"" },
        ],
      },
      {
        title: "Step 5: Completion and Login",
        steps: [
          { step: "Record your Username: The system will display your new Login Name (e.g., JAMARINE123)" },
          { step: "Initial Login: Click \"Login\" to return to the main page and enter your new credentials" },
        ],
      },
      {
        title: "What Happens Next",
        steps: [
          { step: "Once your account is active, you can associate your Common Access Card (CAC) by logging in while the card is inserted into a reader" },
          { step: "CAC association is required to access certain applications like Cognos (Reports)" },
        ],
      },
    ],
  },
  "mol-password-pin-reset": {
    title: "Password & PIN Reset",
    description: "Configuring an email password reset for your Single Sign-On (SSO) account allows you to regain access to Marine Online (MOL) without waiting for a Help Desk call back. You can associate up to two email addresses with your account.",
    capabilities: ["Email recovery setup", "Password reset", "Account recovery", "Secondary email configuration"],
    userTypes: ["All Marines"],
    guide: [
      {
        title: "Step 1: Navigate to Security Settings",
        steps: [
          { step: "Log in: Access MOL at https://mol.tfs.usmc.mil/" },
          { step: "Select My Account: Click the \"My Account\" menu item on the main navigation bar" },
          { step: "Change Password: On the left side of the screen, click \"Change Password\"" },
        ],
      },
      {
        title: "Step 2: Add Recovery Email",
        steps: [
          { step: "Access Recovery Options: Under the \"Account Recovery options\" section, click \"Add\" next to Recovery Email" },
          { step: "Enter Address: Type in your primary email address and click \"Add Email\"" },
        ],
      },
      {
        title: "Step 3: Verify the Email Address",
        steps: [
          {
            step: "Wait for Code: Check your email for a Verification Code; it may take 3–5 minutes to arrive",
            details: ["If using a commercial email address, check your junk or spam folders"],
          },
          {
            step: "Input Code: Enter the 8-digit code from the email into the \"Verify Email\" screen on MOL",
            details: ["The code expires 60 minutes after the email is sent"],
          },
          { step: "Complete: Click \"Verify\"" },
        ],
      },
      {
        title: "Step 4: Confirmation",
        steps: [
          { step: "Check Status: The application will return to the Account Security Information page, where your verified email will be displayed with a validation icon" },
          { step: "Secondary Email (Optional): You can repeat this process to add a second recovery email address" },
        ],
      },
      {
        title: "What Happens Next",
        steps: [
          { step: "If you forget your password in the future, go to the MOL login page" },
          { step: "Click \"Forgot your Password? Click here!\" and enter your verified email to receive a reset code" },
        ],
      },
    ],
  },
  "mol-view-permissions": {
    title: "View Your Permissions",
    description: "The My Permissions feature in Marine Online (MOL) allows you to see all permissions currently assigned to you within the Marine Online Family of Services (FoS). This includes permissions assigned to you as an individual or via a template.",
    capabilities: ["View assigned permissions", "Understand authority levels", "Self-revoke permissions", "Audit your access"],
    userTypes: ["All Marines", "Administrators", "Unit Leaders"],
    guide: [
      {
        title: "How to Access and View Permissions",
        steps: [
          { step: "Log in: Access MOL at https://mol.tfs.usmc.mil/" },
          { step: "Navigate: Click the \"My Permissions\" menu item in the navigation bar" },
          { step: "Understand the Layout: Permissions are organized by their unit scope (e.g., Battalion > Company > Platoon > Work Section)" },
          { step: "View Template Details: To see specific permissions inside a template (like \"Commanding Officer\"), click the \"View\" link next to that template. When finished, click \"Return to My Permissions\"" },
        ],
      },
      {
        title: "Understanding Authority Levels",
        steps: [
          { step: "Execution: You can use/execute the permission for the specified unit scope" },
          { step: "Delegate: You can grant this permission to other users at or below your unit scope" },
          { step: "Grant Delegate: You can authorize another user to delegate the permission to others" },
        ],
      },
      {
        title: "Managing and Revoking Permissions",
        steps: [
          { step: "Self-Audit: It is recommended to perform an occasional \"self-audit\" of your permissions, particularly after a Permanent Change of Station (PCS) or change in work assignment" },
          { step: "Rule of Thumb: If you have the same permission at both a higher and lower unit level, you should self-revoke the lower unit level permission" },
          {
            step: "How to Revoke",
            details: [
              "Individually: Check the box next to a specific permission or template and click \"Revoke Selected Permissions\"",
              "Bulk: Check the \"Revoke All Permissions\" box for an entire unit scope to remove them at once",
            ],
          },
          {
            step: "Restrictions",
            details: [
              "Some templates (like \"Commanding Officer\" or \"Officer of the Day\") cannot be self-revoked and must be managed through specific application functions",
              "Some external permissions (like UD/MIPS or CLA) are managed outside of this screen",
            ],
          },
        ],
      },
    ],
  },
  "mol-two-factor-auth": {
    title: "Two Factor Authentication (2FA)",
    description: "Two Factor Authentication (2FA) adds an extra layer of security to your Marine Online account by requiring a second form of verification in addition to your password.",
    capabilities: ["Enhanced account security", "Secondary verification", "Authentication app setup", "Recovery options"],
    userTypes: ["All Marines"],
    guide: [
      {
        title: "Overview",
        steps: [
          { step: "Two Factor Authentication provides additional security for your MOL account" },
          { step: "When enabled, you will need both your password and a verification code to log in" },
          { step: "Contact your local MISSO for 2FA setup assistance and requirements" },
        ],
      },
    ],
  },
  "mol-personnel-accountability": {
    title: "Personnel Accountability (PA)",
    description: "When disaster strikes—hurricanes, earthquakes, wildfires, or other emergencies—the Marine Corps needs to know where you are and whether you and your family are safe. This page is how you 'check in' electronically and let your command know your status. For leaders, this is how you track your Marines and report to higher headquarters.",
    capabilities: ["Self-report disaster status", "Report dependent status", "Track subordinate accountability", "Generate unit accountability reports", "Support HQMC disaster response", "Enable search and rescue prioritization"],
    userTypes: ["All Marines", "Leaders", "Administrators", "Commanders"],
    guide: [
      {
        title: "Why This Matters",
        steps: [
          {
            step: "Life Safety",
            details: [
              "In a disaster, the Marine Corps needs to know if you are injured, missing, or safe",
              "Your status directly affects search and rescue resource allocation",
              "If you don't check in, you may be listed as 'Unaccounted' which triggers emergency response protocols",
            ],
          },
          {
            step: "Family Accountability",
            details: [
              "The system also tracks your dependents—spouse and children",
              "If you are deployed and your family is in a disaster area, your command needs to know their status",
              "This helps the Marine Corps provide family assistance and coordinate evacuations",
            ],
          },
          {
            step: "Mission Readiness",
            details: [
              "Commanders need accurate personnel counts to determine unit readiness",
              "This affects recall operations and mobilization planning",
              "Higher headquarters (HQMC) uses this data to coordinate DoD-wide response efforts",
            ],
          },
        ],
      },
      {
        title: "How to Check In (Individual Marines)",
        steps: [
          {
            step: "Step 1: Access MOL",
            details: [
              "Log in to MOL at https://mol.tfs.usmc.mil/",
              "Navigate to Personnel Accountability (PA) module",
              "During active disaster declarations, you may see a prompt immediately upon login",
            ],
          },
          {
            step: "Step 2: Report Your Status",
            details: [
              "Select your current status from the available options:",
              "• Accounted For - You are safe and uninjured",
              "• Injured - You have sustained injuries (triggers additional follow-up)",
              "• Evacuated - You have left the disaster area",
              "• Sheltering in Place - You are safe but remaining in the area",
            ],
          },
          {
            step: "Step 3: Report Dependent Status",
            details: [
              "If you have dependents (spouse, children), report their status as well",
              "Even if they are not with you, indicate their current situation",
              "If you cannot reach them, report 'Unable to Contact'",
            ],
          },
          {
            step: "Step 4: Provide Contact Information",
            details: [
              "Confirm or update your current phone number where you can be reached",
              "Provide your temporary location if you have evacuated",
              "This helps your command contact you for follow-up",
            ],
          },
        ],
      },
      {
        title: "Backup Methods (If MOL is Unavailable)",
        steps: [
          {
            step: "Phone Tree",
            details: [
              "If you cannot access MOL, call your immediate supervisor",
              "If they don't answer, proceed up the chain of command",
              "Your command should have an offline recall roster with multiple contact methods",
            ],
          },
          {
            step: "HQMC Hotline",
            details: [
              "During major disasters, HQMC activates a toll-free accountability hotline",
              "Listen for announcements via official Marine Corps channels",
              "This is a backup if local communications are down",
            ],
          },
          {
            step: "Physical Muster",
            details: [
              "Report to your unit's designated rally point if possible",
              "In-person accountability overrides electronic check-in",
            ],
          },
        ],
      },
      {
        title: "Leader Responsibilities",
        steps: [
          {
            step: "Preparation Before Disasters",
            details: [
              "Verify all subordinates have active MOL accounts with Email Password Reset configured",
              "Direct Marines to conduct a 'self-audit' of their contact information quarterly",
              "Maintain an offline roster with personal cell phones, home addresses, and emergency contacts",
              "Conduct periodic accountability drills to test recall procedures",
            ],
          },
          {
            step: "Active Accountability Monitoring",
            details: [
              "Access the PA module to view real-time list of who has self-reported",
              "Focus contact efforts on Marines who have not checked in electronically",
              "Use work phone, personal phone, email, text message, and emergency contacts",
              "Document all attempts to reach 'Unaccounted' personnel",
            ],
          },
          {
            step: "Updating Status for Others",
            details: [
              "If you contact a Marine by phone, you can update their status in the PA module",
              "Include notes about their situation and location",
              "Escalate 'Unaccounted For' personnel to Command Admin or Commander",
            ],
          },
        ],
      },
      {
        title: "Admin Responsibilities",
        steps: [
          {
            step: "System Configuration",
            details: [
              "Ensure unit organizational hierarchy (Battalion > Company > Platoon > Work Section) is correctly mapped in MOL",
              "Grant correct 'Execution' or 'Delegate' authorities to leaders for PA module access",
              "Verify that all Marines are correctly assigned to the right organizational unit",
            ],
          },
          {
            step: "Reporting to Higher Headquarters",
            details: [
              "Generate master reports showing percentage of command accounted for",
              "Act as primary point of contact for reporting to HQMC Personnel Accountability cell",
              "Submit accountability reports on the required timeline (usually every 4-6 hours during active events)",
            ],
          },
        ],
      },
      {
        title: "Commander Responsibilities",
        steps: [
          {
            step: "Establishing Command Intent",
            details: [
              "Establish clear SOP for accountability (e.g., 'All Marines must check into MOL within 4 hours of a disaster declaration')",
              "Define thresholds for escalating 'Unaccounted' status to higher headquarters",
              "Ensure family readiness programs include disaster preparedness briefings",
            ],
          },
          {
            step: "Decision Making",
            details: [
              "Review data from Admin and Leaders to assess unit readiness and disaster impact",
              "Decide when to deploy Search and Recovery efforts for 'Unaccounted' personnel",
              "Coordinate with installation resources (PMO, Medical, Chaplain) for affected Marines",
              "Provide final verification to higher headquarters that accountability is complete",
            ],
          },
        ],
      },
      {
        title: "Common Pitfalls to Avoid",
        steps: [
          {
            step: "Not Keeping MOL Contact Info Current",
            details: [
              "If your phone number or address is outdated, your command cannot reach you",
              "Update your Personal Contact Information in MOL proactively, not during a disaster",
            ],
          },
          {
            step: "Assuming Someone Else Will Report for You",
            details: [
              "You are responsible for your own accountability",
              "Don't assume your spouse, roommate, or friend will notify your command",
            ],
          },
          {
            step: "Forgetting Dependents",
            details: [
              "Your family members are part of the Marine Corps family",
              "If they are in a disaster area, report their status even if you are not affected",
            ],
          },
          {
            step: "Waiting for Perfect Information",
            details: [
              "Report your status as soon as possible, even if incomplete",
              "You can update your status as the situation evolves",
              "'Something' is better than nothing—silence is interpreted as 'Unaccounted'",
            ],
          },
        ],
      },
      {
        title: "What Happens After You Check In",
        steps: [
          {
            step: "Your Status is Visible to Your Chain of Command",
            details: [
              "Your leader, Admin, and Commander can see that you have reported",
              "This removes you from the 'Unaccounted' list and allows them to focus on others",
            ],
          },
          {
            step: "Follow-Up if Needed",
            details: [
              "If you reported 'Injured' or 'Evacuated,' expect a follow-up call from your command",
              "They may provide assistance resources or coordinate support",
            ],
          },
          {
            step: "Update as Situation Changes",
            details: [
              "If your status changes (e.g., you evacuate after initially sheltering), update your report",
              "Keep your command informed throughout the disaster event",
            ],
          },
        ],
      },
    ],
  },
};

// ============================================
// BATTALION ORGANIZATION PERMISSIONS
// ============================================

const BATTALION_PERMISSIONS_DATA = {
  references: [
    { title: "MOL Training Resources", url: "https://www.mol.usmc.mil/resources/", isQuickLink: true },
    { title: "MISSO Support", url: "https://www.mol.usmc.mil/tts/", isQuickLink: true },
    { title: "Organization Management Guide", url: "https://www.mol.usmc.mil/resources/", isQuickLink: false },
  ],
  permissionModules: [
    {
      title: "All Reports",
      menuPath: "Unit Leaders > View Reports",
      permissions: [
        { name: "All Reports Viewer", description: "Provides authorized users the ability to view Personal Information reports on members within the granted organization scope." },
      ],
    },
    {
      title: "Awards SubModule",
      menuPath: "Unit Leaders > Awards",
      permissions: [
        { name: "GCM/SMCR Award Approval", description: "Provides authorized users the ability to approve MCGCM and SMCRM on enlisted Marines. Note: Personnel attached TAD/FAP must be approved by the parent unit." },
        { name: "GCM/SMCR Award Review", description: "Provides authorized users the ability to view enlisted Marines eligible for the MCGCM or SMCRM in a given month." },
        { name: "GCM/SMCR Certificate Print", description: "Provides authorized users the ability to generate the respective certificate for enlisted Marines approved for the MCGCM or SMCRM in a given month." },
      ],
    },
    {
      title: "BIC Assignment",
      menuPath: "Unit Leaders > BIC",
      permissions: [
        { name: "BIC Assignment Approver", description: "Provides authorized users the ability to report Billet Assignment Code (BIC) changes on Marines, Civilians, and Navy personnel assigned or FAP to an active duty unit. Reserve designated units have the ability to view current BIC assignments (Reserve BIC) but not report changes through Marine OnLine." },
        { name: "BIC Assignment Viewer", description: "Provides authorized users the ability to view BICs on Marine, Civilian, and Navy personnel assigned or FAP to an active duty or reserve designated unit." },
      ],
    },
    {
      title: "Commanders Messaging Update",
      menuPath: "Unit Leaders > Cmdr's Msg",
      permissions: [
        { name: "Commanders Messaging Update Approver", description: "Provides authorized users the ability to generate a message in Marine OnLine to unit members within the selected organizational scope." },
      ],
    },
    {
      title: "DTMS",
      menuPath: "Resources > Document Tracking Management Service",
      permissions: [
        { name: "DTMS Online Transaction Certifier", description: "Refer to DTMS documentation." },
        { name: "DTMS Commanding Officer", description: "Refer to DTMS documentation." },
        { name: "DTMS Admin Role Control Agent", description: "Refer to DTMS documentation." },
        { name: "DTMS Admin Certifier", description: "Provides authorized users the ability to certify DTMS documents." },
        { name: "DTMS Admin Reviewer", description: "Provides authorized users the ability to review and forward DTMS documents." },
        { name: "DTMS Admin Preparer", description: "Provides authorized users the ability to prepare and forward DTMS documents." },
        { name: "DTMS Admin Viewer", description: "Provides authorized users the ability to view DTMS documents." },
      ],
    },
    {
      title: "EPAR Unit Leader",
      menuPath: "Unit Leaders > Unit EPAR",
      permissions: [
        { name: "EPAR Unit Leader Approver", description: "Provides authorized users the ability to create a new EPAR, manage the status, route, or assign an existing EPAR within the assigned permission scope. Approvers can submit an EPAR to IPAC whereas an Active Reviewer cannot." },
        { name: "EPAR Unit Leader Active Reviewer", description: "Provides authorized users the ability to create a new EPAR, manage the status, route, or assign an existing EPAR within the assigned permission scope." },
      ],
    },
    {
      title: "Family Care Plan",
      menuPath: "Unit Leaders > Family Care Plan",
      permissions: [
        { name: "Coordinator", description: "Provides authorized users the ability to view current FCP information on unit members and view/comment on FCPs submitted for validation. This permission is assignable by the 'FAMILY CARE PLAN COORDINATOR' template only." },
        { name: "Validating Official", description: "Provides authorized users the ability to view current FCP information and validate or return FCPs submitted for validation." },
      ],
    },
    {
      title: "Family Readiness SubModule",
      menuPath: "Unit Leaders > Family Readiness",
      permissions: [
        { name: "Deployment/Uniformed Readiness Coordinator", description: "Provides authorized users the ability to view and maintain unit member contacts and generate email communications to member contacts. This permission additionally grants access to a restricted view of the TFAS Ad Hoc package in Cognos." },
      ],
    },
    {
      title: "JEPES Submodule",
      menuPath: "Performance > JEPES",
      permissions: [
        { name: "JEPES Approver", description: "Provides authorized users the ability to certify the MRO worksheet for processing. The Approver is the O-5 level commander or OIC equivalent in the MRO's chain of command who is responsible for setting and approving final subjective marks." },
        { name: "JEPES Supervisor", description: "Provides authorized users the ability to recommend subjective marks. The FLS is a leader who has direct supervision over the MRO and is charged with providing thorough and accurate observation and guidance." },
        { name: "JEPES Evaluator", description: "Provides authorized users the ability to recommend subjective marks. The Evaluator is a leader who has direct supervision over the FLS and responsibility for the MRO." },
        { name: "JEPES Reviewer", description: "Provides authorized users the ability to recommend subjective marks. The Reviewer is a leader who has direct supervision over the Evaluator and responsibility for the MRO, typically at the company level." },
        { name: "JEPES Senior Enlisted Reviewer", description: "Provides authorized users the ability to review and comment on recommended subjective marks. The SER provides the FLS, Evaluator, and Reviewer comments and recommendations, however does not have the ability to submit draft marks, return reports, or stop the flow of the evaluation through the reporting chain." },
        { name: "JEPES Command Reviewer", description: "Provides authorized users the ability to review and comment on recommended subjective marks. The Command Reviewer is an enlisted leader appointed by the Approver who reviews JEPES Worksheets and command marks for accuracy at the battalion level." },
        { name: "JEPES Unit Administration", description: "Provides authorized users the ability to establish and manage occasions, reporting chains, and unit level settings. Unit Admin can also initiate command corrections and review remedial promotion advisories within the application." },
      ],
    },
    {
      title: "Inbound Interview SubModule",
      menuPath: "Travel > Inbound Management",
      permissions: [
        { name: "Inbound Interview Approver", description: "Provides authorized users the ability to approve or return the interview." },
        { name: "Inbound Interview Reviewer", description: "Provides authorized users the ability to set the member's Report Date, initial assignment information, and forward for approval." },
      ],
    },
    {
      title: "Leave/Liberty Application",
      menuPath: "Unit Leaders > Leave/Liberty",
      permissions: [
        { name: "SLA Approval", description: "Provides authorized users the ability to approve the restoration of leave lost in the previous fiscal year as SLA for Marines eligible under type 'D' (Deployment). This permission cannot be delegated by the CO." },
        { name: "SLA Viewer", description: "Provides authorized users the ability to view Marines who currently have a lost leave balance in the previous fiscal year that is eligible to be restored, or restoration was denied." },
        { name: "Leave/Liberty Approver", description: "Provides authorized users the ability to Approve, Deny, or extend absence requests." },
        { name: "Leave/Liberty Reviewer", description: "Provides authorized users the ability to Recommend, or Not Recommend absence requests." },
        { name: "Leave/Liberty Check In/Out", description: "Provides authorized users the ability to check a Marine out on or back in from an approved absence period." },
      ],
    },
    {
      title: "Manage Permissions",
      menuPath: "MOL Management > Manage Permissions",
      permissions: [
        { name: "Revoke External Permissions", description: "Provides authorized users the ability to revoke unit permissions assigned to users that are external to the organization (not joined in the UMSR)." },
      ],
    },
    {
      title: "Manage Templates/Rules",
      menuPath: "MOL Management > Manage Permissions",
      permissions: [
        { name: "Manage Templates/Rules Approver", description: "Provides authorized users the ability to maintain custom permission templates for the organization." },
      ],
    },
    {
      title: "OMPF SubModule",
      menuPath: "Unit Leaders > OMPF View",
      permissions: [
        { name: "OMPF Command Viewer", description: "Provides authorized users the ability to view the OMPF on Marines within the organization/assigned permission scope. (Restricted to PHOTO, COMMEND/DEROG, FIELD, and SERVICE records only)" },
      ],
    },
    {
      title: "Officer of the Day",
      menuPath: "MOL Management > Manage Permissions",
      permissions: [
        { name: "Officer of the Day Approver", description: "Provides authorized users the ability to grant and revoke the 'OFFICER OF THE DAY (OOD)' permission template via 'Post' and 'Relieve' functions in Permissions Management." },
      ],
    },
    {
      title: "Organization Management",
      menuPath: "MOL Management > Organization Structure",
      permissions: [
        { name: "Maintain Organizations", description: "Provides authorized users the ability to modify organizational unit structure, update organizational information." },
        { name: "Manage Acting Manager", description: "Provides authorized users the ability to manage the Acting Manager role in Organizational Management." },
      ],
    },
    {
      title: "Outbound Interview SubModule",
      menuPath: "Travel > Outbound Management",
      permissions: [
        { name: "Outbound Interview Approver", description: "Provides authorized users the ability to approve or update an outbound interview package for Marines within their assigned permission scope." },
        { name: "Outbound Interview Reviewer", description: "Provides authorized users the ability to update an outbound interview package for Marines within their assigned permission scope." },
        { name: "Outbound Interview Viewer w/ Comment Only", description: "Provides authorized users the ability to comment on an outbound interview package for Marines within their assigned permission scope." },
      ],
    },
    {
      title: "PromRec App SubModule",
      menuPath: "Unit Leaders > Prom Rec",
      permissions: [
        { name: "Print Promotion Warrant", description: "Provides authorized users the ability to generate Promotion Warrants on Select Grade Marines within their assigned permission scope." },
        { name: "Promotion Recommendation Certifier", description: "Provides authorized users (CO) the ability to make final recommendations (Rec/Non-REC) for reporting to the MCTFS. Permission is restricted to Major and above when accessing the module." },
        { name: "Promotion Recommendation Preparer", description: "Provides authorized users the ability to negatively recommend Marines within their assigned permission scope. User can reverse their own negative recommendation on a Marine but only once." },
        { name: "Promotion Recommendation Reviewer", description: "Provides authorized users the ability to positively recommend if a preparer has negatively recommended. Can also negatively recommend Marines within their assigned permission scope." },
        { name: "Promotion Recommendation Viewer", description: "Provides authorized users the ability to view promotion records but cannot make recommendations for Marines within the assigned permission scope." },
      ],
    },
    {
      title: "Relinquish/Assume Command",
      menuPath: "MOL Management > Manage Permissions",
      permissions: [
        { name: "Relinquish Command of a Unit Approver", description: "Provides the current owner of the COMMANDING OFFICER (CO) template to transfer control of the organization. This permission applies only to the Manager or Acting Manager as assigned in Organizational Management (OMS)." },
        { name: "Assume Command of a Unit", description: "Provides authorized users the ability to take control of the organization through reassignment of the COMMANDING OFFICER (CO) template. This permission applies only to the Manager or Acting Manager as assigned in OMS." },
      ],
    },
    {
      title: "Suspend/Restore User",
      menuPath: "MOL Management > Manage Permissions",
      permissions: [
        { name: "Suspend/Restore User Approver", description: "Provides authorized users the ability to suspend or restore a user's permissions within the scope of the organization. This action does not modify permission assigned to a user by another organization." },
      ],
    },
    {
      title: "TTS Submodule",
      menuPath: "Unit Leaders > Trouble Tickets",
      permissions: [
        { name: "TTS Approver", description: "Provides authorized users the ability to assign, edit, route to MISSO, return to member, pull back, close or reopen trouble tickets." },
        { name: "TTS Reviewer", description: "Provides authorized users the ability to assign or edit trouble tickets." },
      ],
    },
    {
      title: "UMSR Duty Status",
      menuPath: "Unit Leaders > UMSR",
      permissions: [
        { name: "UMSR Duty Status Approver", description: "Provides authorized users the ability to change a unit member's duty status and/or location within the assigned permission scope." },
      ],
    },
    {
      title: "UMSR Join/Drop",
      menuPath: "Unit Leaders > UMSR",
      permissions: [
        { name: "UMSR Join/Drop Approver", description: "Provides authorized users the ability to approve gains and losses of unit members to the UMSR within the assigned permission scope." },
        { name: "UMSR Join/Drop Active Reviewer", description: "Provides authorized users the ability to forward gains and losses of unit members to a Join/Drop Approver." },
      ],
    },
    {
      title: "UMSR Morning Report",
      menuPath: "Unit Leaders > UMSR",
      permissions: [
        { name: "UMSR Morning Report Approver", description: "Provides authorized users the ability to publish the UMSR for the assigned permission scope." },
      ],
    },
    {
      title: "UMSR Pers Accountability Info",
      menuPath: "Unit Leaders > UMSR",
      permissions: [
        { name: "Manage Personnel Accountability Information", description: "Provides authorized users the ability to view and report accountability status changes for unit members within the assigned permission scope." },
      ],
    },
    {
      title: "UMSR Read-Only",
      menuPath: "Unit Leaders > UMSR",
      permissions: [
        { name: "UMSR Read-Only Viewer", description: "Provides authorized users the ability to view the UMSR." },
      ],
    },
    {
      title: "UMSR Unit Membership",
      menuPath: "Unit Leaders > UMSR",
      permissions: [
        { name: "UMSR Unit Membership Approver", description: "Provides authorized users the ability to approve Company, Platoon, or Work Section assignments on unit members within the assigned permission scope." },
      ],
    },
    {
      title: "Unit Reports",
      menuPath: "Reports",
      permissions: [
        { name: "Unit Reports", description: "Provides authorized users the ability to access Cognos Reports under the TFAS Ad Hoc package." },
      ],
    },
    {
      title: "User Management",
      menuPath: "MOL Management > User Management",
      permissions: [
        { name: "Create Account Approver", description: "Provides authorized users the ability to create new user accounts and/or identities. Can create or maintain sponsorships. Can create or maintain MCTFS records for non-Marine personnel." },
        { name: "View Account Viewer", description: "Provides authorized users the ability to view existing account details within the assigned permission scope." },
      ],
    },
  ],
  systemTemplates: [
    {
      name: "COMMANDING OFFICER (CO)",
      restriction: "Restricted to MGySgt/SgtMaj and above or Civil Servants (GS)",
      description: "Template is granted and revoked through Manager and Acting Manager assignments in Organization Management. The Manager may transfer control to the Acting Manager in Permissions Management.",
      permissions: [
        { module: "All Reports", permission: "All Reports Viewer", authority: { execution: true, delegate: true, grantDelegate: true } },
        { module: "Awards SubModule", permission: "GCM/SMCR Award Approval", authority: { execution: true, delegate: true, grantDelegate: true } },
        { module: "Awards SubModule", permission: "GCM/SMCR Award Review", authority: { execution: true, delegate: true, grantDelegate: true } },
        { module: "Awards SubModule", permission: "GCM/SMCR Certificate Print", authority: { execution: true, delegate: true, grantDelegate: true } },
        { module: "BIC Assignment", permission: "BIC Assignment Approver", authority: { execution: true, delegate: true, grantDelegate: true } },
        { module: "BIC Assignment", permission: "BIC Assignment Viewer", authority: { execution: true, delegate: true, grantDelegate: true } },
        { module: "Commanders Messaging", permission: "Commanders Messaging Update Approver", authority: { execution: true, delegate: true, grantDelegate: true } },
        { module: "EPAR Unit Leader", permission: "EPAR Unit Leader Approver", authority: { execution: true, delegate: true, grantDelegate: true } },
        { module: "EPAR Unit Leader", permission: "EPAR Unit Leader Active Reviewer", authority: { execution: true, delegate: true, grantDelegate: true } },
        { module: "Family Care Plan", permission: "Validating Official", authority: { execution: true, delegate: true, grantDelegate: true } },
        { module: "Family Readiness", permission: "Deployment/Uniformed Readiness Coordinator", authority: { execution: true, delegate: true, grantDelegate: false } },
        { module: "Inbound Interview", permission: "Inbound Interview Approver", authority: { execution: true, delegate: true, grantDelegate: true } },
        { module: "Inbound Interview", permission: "Inbound Interview Reviewer", authority: { execution: true, delegate: true, grantDelegate: false } },
        { module: "Leave/Liberty", permission: "SLA Approval", authority: { execution: true, delegate: false, grantDelegate: false } },
        { module: "Leave/Liberty", permission: "SLA Viewer", authority: { execution: true, delegate: true, grantDelegate: true } },
        { module: "Leave/Liberty", permission: "Leave/Liberty Approver", authority: { execution: true, delegate: true, grantDelegate: true } },
        { module: "Leave/Liberty", permission: "Leave/Liberty Reviewer", authority: { execution: true, delegate: true, grantDelegate: true } },
        { module: "Leave/Liberty", permission: "Leave/Liberty Check In/Out", authority: { execution: true, delegate: true, grantDelegate: true } },
        { module: "Manage Permissions", permission: "Revoke External Permissions", authority: { execution: true, delegate: true, grantDelegate: true } },
        { module: "Manage Templates/Rules", permission: "Manage Templates/Rules Approver", authority: { execution: true, delegate: true, grantDelegate: true } },
        { module: "OMPF SubModule", permission: "OMPF Command Viewer", authority: { execution: true, delegate: true, grantDelegate: true } },
        { module: "Officer of the Day", permission: "Officer of the Day Approver", authority: { execution: true, delegate: true, grantDelegate: true } },
        { module: "Organization Management", permission: "Maintain Organizations", authority: { execution: true, delegate: true, grantDelegate: true } },
        { module: "Organization Management", permission: "Manage Acting Manager", authority: { execution: true, delegate: false, grantDelegate: false } },
        { module: "Outbound Interview", permission: "Outbound Interview Approver", authority: { execution: true, delegate: true, grantDelegate: true } },
        { module: "Outbound Interview", permission: "Outbound Interview Reviewer", authority: { execution: true, delegate: true, grantDelegate: true } },
        { module: "Outbound Interview", permission: "Outbound Interview Viewer w/ Comment Only", authority: { execution: true, delegate: true, grantDelegate: true } },
        { module: "PromRec App", permission: "Print Promotion Warrant", authority: { execution: true, delegate: true, grantDelegate: true } },
        { module: "PromRec App", permission: "Promotion Recommendation Certifier", authority: { execution: true, delegate: true, grantDelegate: false } },
        { module: "PromRec App", permission: "Promotion Recommendation Preparer", authority: { execution: true, delegate: true, grantDelegate: false } },
        { module: "PromRec App", permission: "Promotion Recommendation Reviewer", authority: { execution: true, delegate: true, grantDelegate: true } },
        { module: "PromRec App", permission: "Promotion Recommendation Viewer", authority: { execution: true, delegate: true, grantDelegate: true } },
        { module: "Relinquish Command", permission: "Relinquish Command of a Unit Approver", authority: { execution: true, delegate: false, grantDelegate: false } },
        { module: "Suspend/Restore User", permission: "Suspend/Restore User Approver", authority: { execution: true, delegate: true, grantDelegate: true } },
        { module: "TTS Submodule", permission: "TTS Approver", authority: { execution: true, delegate: true, grantDelegate: true } },
        { module: "TTS Submodule", permission: "TTS Reviewer", authority: { execution: true, delegate: true, grantDelegate: false } },
        { module: "UMSR Duty Status", permission: "UMSR Duty Status Approver", authority: { execution: true, delegate: true, grantDelegate: true } },
        { module: "UMSR Join/Drop", permission: "UMSR Join/Drop Approver", authority: { execution: true, delegate: true, grantDelegate: true } },
        { module: "UMSR Join/Drop", permission: "UMSR Join/Drop Active Reviewer", authority: { execution: true, delegate: true, grantDelegate: true } },
        { module: "UMSR Morning Report", permission: "UMSR Morning Report Approver", authority: { execution: true, delegate: true, grantDelegate: true } },
        { module: "UMSR Pers Accountability", permission: "Manage Personnel Accountability Information", authority: { execution: true, delegate: true, grantDelegate: true } },
        { module: "UMSR Read-Only", permission: "UMSR Read-Only Viewer", authority: { execution: true, delegate: true, grantDelegate: true } },
        { module: "UMSR Unit Membership", permission: "UMSR Unit Membership Approver", authority: { execution: true, delegate: true, grantDelegate: true } },
        { module: "Unit Reports", permission: "Unit Reports", authority: { execution: true, delegate: true, grantDelegate: true } },
        { module: "User Management", permission: "Create Account Approver", authority: { execution: true, delegate: true, grantDelegate: true } },
        { module: "User Management", permission: "View Account Viewer", authority: { execution: true, delegate: true, grantDelegate: true } },
      ],
    },
    {
      name: "By Direction Of Commanding Officer",
      description: "Delegated authority to act on behalf of the Commanding Officer",
      permissions: [
        { module: "All Reports", permission: "All Reports Viewer", authority: { execution: true, delegate: true, grantDelegate: true } },
        { module: "Awards SubModule", permission: "GCM/SMCR Award Approval", authority: { execution: true, delegate: true, grantDelegate: true } },
        { module: "Awards SubModule", permission: "GCM/SMCR Award Review", authority: { execution: true, delegate: true, grantDelegate: true } },
        { module: "Awards SubModule", permission: "GCM/SMCR Certificate Print", authority: { execution: true, delegate: true, grantDelegate: true } },
        { module: "BIC Assignment", permission: "BIC Assignment Approver", authority: { execution: true, delegate: true, grantDelegate: true } },
        { module: "BIC Assignment", permission: "BIC Assignment Viewer", authority: { execution: true, delegate: true, grantDelegate: true } },
        { module: "Commanders Messaging", permission: "Commanders Messaging Update Approver", authority: { execution: true, delegate: true, grantDelegate: true } },
        { module: "EPAR Unit Leader", permission: "EPAR Unit Leader Approver", authority: { execution: true, delegate: true, grantDelegate: true } },
        { module: "EPAR Unit Leader", permission: "EPAR Unit Leader Active Reviewer", authority: { execution: true, delegate: true, grantDelegate: true } },
        { module: "Family Readiness", permission: "Deployment/Uniformed Readiness Coordinator", authority: { execution: true, delegate: false, grantDelegate: false } },
        { module: "Inbound Interview", permission: "Inbound Interview Approver", authority: { execution: true, delegate: true, grantDelegate: false } },
        { module: "Inbound Interview", permission: "Inbound Interview Reviewer", authority: { execution: true, delegate: true, grantDelegate: false } },
        { module: "Leave/Liberty", permission: "Leave/Liberty Approver", authority: { execution: true, delegate: true, grantDelegate: true } },
        { module: "Leave/Liberty", permission: "Leave/Liberty Reviewer", authority: { execution: true, delegate: true, grantDelegate: true } },
        { module: "Leave/Liberty", permission: "Leave/Liberty Check In/Out", authority: { execution: true, delegate: true, grantDelegate: true } },
        { module: "Manage Permissions", permission: "Revoke External Permissions", authority: { execution: true, delegate: true, grantDelegate: true } },
        { module: "Manage Templates/Rules", permission: "Manage Templates/Rules Approver", authority: { execution: true, delegate: true, grantDelegate: true } },
        { module: "Officer of the Day", permission: "Officer of the Day Approver", authority: { execution: true, delegate: true, grantDelegate: true } },
        { module: "Organization Management", permission: "Maintain Organizations", authority: { execution: true, delegate: true, grantDelegate: true } },
        { module: "Outbound Interview", permission: "Outbound Interview Reviewer", authority: { execution: true, delegate: false, grantDelegate: false } },
        { module: "Outbound Interview", permission: "Outbound Interview Viewer w/ Comment Only", authority: { execution: true, delegate: false, grantDelegate: false } },
        { module: "PromRec App", permission: "Print Promotion Warrant", authority: { execution: true, delegate: true, grantDelegate: true } },
        { module: "PromRec App", permission: "Promotion Recommendation Preparer", authority: { execution: true, delegate: true, grantDelegate: true } },
        { module: "PromRec App", permission: "Promotion Recommendation Reviewer", authority: { execution: true, delegate: true, grantDelegate: true } },
        { module: "PromRec App", permission: "Promotion Recommendation Viewer", authority: { execution: true, delegate: true, grantDelegate: true } },
        { module: "Suspend/Restore User", permission: "Suspend/Restore User Approver", authority: { execution: true, delegate: true, grantDelegate: true } },
        { module: "UMSR Duty Status", permission: "UMSR Duty Status Approver", authority: { execution: true, delegate: true, grantDelegate: true } },
        { module: "UMSR Join/Drop", permission: "UMSR Join/Drop Approver", authority: { execution: true, delegate: true, grantDelegate: true } },
        { module: "UMSR Join/Drop", permission: "UMSR Join/Drop Active Reviewer", authority: { execution: true, delegate: true, grantDelegate: true } },
        { module: "UMSR Morning Report", permission: "UMSR Morning Report Approver", authority: { execution: true, delegate: true, grantDelegate: true } },
        { module: "UMSR Pers Accountability", permission: "Manage Personnel Accountability Information", authority: { execution: true, delegate: true, grantDelegate: true } },
        { module: "UMSR Read-Only", permission: "UMSR Read-Only Viewer", authority: { execution: true, delegate: true, grantDelegate: true } },
        { module: "UMSR Unit Membership", permission: "UMSR Unit Membership Approver", authority: { execution: true, delegate: true, grantDelegate: true } },
        { module: "Unit Reports", permission: "Unit Reports", authority: { execution: true, delegate: true, grantDelegate: true } },
        { module: "User Management", permission: "Create Account Approver", authority: { execution: true, delegate: true, grantDelegate: true } },
      ],
    },
    {
      name: "MOL Coordinator",
      restriction: "Restricted to SSgt and above or Civil Servants (GS)",
      description: "Primary administrative support for MOL management functions",
      permissions: [
        { module: "All Reports", permission: "All Reports Viewer", authority: { execution: true, delegate: true, grantDelegate: true } },
        { module: "Awards SubModule", permission: "GCM/SMCR Award Approval", authority: { execution: true, delegate: true, grantDelegate: true } },
        { module: "Awards SubModule", permission: "GCM/SMCR Award Review", authority: { execution: true, delegate: true, grantDelegate: true } },
        { module: "Awards SubModule", permission: "GCM/SMCR Certificate Print", authority: { execution: true, delegate: true, grantDelegate: true } },
        { module: "BIC Assignment", permission: "BIC Assignment Approver", authority: { execution: true, delegate: true, grantDelegate: true } },
        { module: "BIC Assignment", permission: "BIC Assignment Viewer", authority: { execution: true, delegate: true, grantDelegate: true } },
        { module: "Commanders Messaging", permission: "Commanders Messaging Update Approver", authority: { execution: true, delegate: true, grantDelegate: true } },
        { module: "EPAR Unit Leader", permission: "EPAR Unit Leader Approver", authority: { execution: true, delegate: true, grantDelegate: true } },
        { module: "EPAR Unit Leader", permission: "EPAR Unit Leader Active Reviewer", authority: { execution: true, delegate: true, grantDelegate: true } },
        { module: "Family Readiness", permission: "Deployment/Uniformed Readiness Coordinator", authority: { execution: true, delegate: false, grantDelegate: false } },
        { module: "Inbound Interview", permission: "Inbound Interview Approver", authority: { execution: true, delegate: true, grantDelegate: false } },
        { module: "Inbound Interview", permission: "Inbound Interview Reviewer", authority: { execution: true, delegate: true, grantDelegate: false } },
        { module: "JEPES Submodule", permission: "JEPES Unit Administration", authority: { execution: true, delegate: true, grantDelegate: true } },
        { module: "Leave/Liberty", permission: "SLA Viewer", authority: { execution: true, delegate: true, grantDelegate: true } },
        { module: "Leave/Liberty", permission: "Leave/Liberty Approver", authority: { execution: true, delegate: true, grantDelegate: true } },
        { module: "Leave/Liberty", permission: "Leave/Liberty Reviewer", authority: { execution: true, delegate: true, grantDelegate: true } },
        { module: "Leave/Liberty", permission: "Leave/Liberty Check In/Out", authority: { execution: true, delegate: true, grantDelegate: true } },
        { module: "Manage Permissions", permission: "Revoke External Permissions", authority: { execution: true, delegate: true, grantDelegate: true } },
        { module: "Manage Templates/Rules", permission: "Manage Templates/Rules Approver", authority: { execution: true, delegate: true, grantDelegate: true } },
        { module: "OMPF SubModule", permission: "OMPF Command Viewer", authority: { execution: true, delegate: true, grantDelegate: true } },
        { module: "Officer of the Day", permission: "Officer of the Day Approver", authority: { execution: true, delegate: true, grantDelegate: true } },
        { module: "Organization Management", permission: "Maintain Organizations", authority: { execution: true, delegate: true, grantDelegate: true } },
        { module: "Outbound Interview", permission: "Outbound Interview Approver", authority: { execution: true, delegate: true, grantDelegate: true } },
        { module: "Outbound Interview", permission: "Outbound Interview Reviewer", authority: { execution: true, delegate: true, grantDelegate: true } },
        { module: "Outbound Interview", permission: "Outbound Interview Viewer w/ Comment Only", authority: { execution: true, delegate: true, grantDelegate: true } },
        { module: "PromRec App", permission: "Print Promotion Warrant", authority: { execution: true, delegate: true, grantDelegate: true } },
        { module: "PromRec App", permission: "Promotion Recommendation Preparer", authority: { execution: true, delegate: true, grantDelegate: true } },
        { module: "PromRec App", permission: "Promotion Recommendation Reviewer", authority: { execution: true, delegate: true, grantDelegate: true } },
        { module: "PromRec App", permission: "Promotion Recommendation Viewer", authority: { execution: true, delegate: true, grantDelegate: true } },
        { module: "Suspend/Restore User", permission: "Suspend/Restore User Approver", authority: { execution: true, delegate: true, grantDelegate: true } },
        { module: "TTS Submodule", permission: "TTS Approver", authority: { execution: true, delegate: true, grantDelegate: true } },
        { module: "TTS Submodule", permission: "TTS Reviewer", authority: { execution: true, delegate: true, grantDelegate: false } },
        { module: "UMSR Duty Status", permission: "UMSR Duty Status Approver", authority: { execution: true, delegate: true, grantDelegate: true } },
        { module: "UMSR Join/Drop", permission: "UMSR Join/Drop Approver", authority: { execution: true, delegate: true, grantDelegate: true } },
        { module: "UMSR Join/Drop", permission: "UMSR Join/Drop Active Reviewer", authority: { execution: true, delegate: true, grantDelegate: true } },
        { module: "UMSR Morning Report", permission: "UMSR Morning Report Approver", authority: { execution: true, delegate: true, grantDelegate: true } },
        { module: "UMSR Pers Accountability", permission: "Manage Personnel Accountability Information", authority: { execution: true, delegate: true, grantDelegate: true } },
        { module: "UMSR Read-Only", permission: "UMSR Read-Only Viewer", authority: { execution: true, delegate: true, grantDelegate: true } },
        { module: "UMSR Unit Membership", permission: "UMSR Unit Membership Approver", authority: { execution: true, delegate: true, grantDelegate: true } },
        { module: "Unit Reports", permission: "Unit Reports", authority: { execution: true, delegate: true, grantDelegate: true } },
        { module: "User Management", permission: "Create Account Approver", authority: { execution: true, delegate: true, grantDelegate: true } },
      ],
    },
    {
      name: "EXECUTIVE OFFICER (XO)",
      description: "Executive Officer of the battalion",
      permissions: [
        { module: "All Reports", permission: "All Reports Viewer", authority: { execution: true, delegate: true, grantDelegate: true } },
        { module: "BIC Assignment", permission: "BIC Assignment Viewer", authority: { execution: true, delegate: true, grantDelegate: true } },
        { module: "Commanders Messaging", permission: "Commanders Messaging Update Approver", authority: { execution: true, delegate: false, grantDelegate: false } },
        { module: "EPAR Unit Leader", permission: "EPAR Unit Leader Approver", authority: { execution: true, delegate: true, grantDelegate: true } },
        { module: "EPAR Unit Leader", permission: "EPAR Unit Leader Active Reviewer", authority: { execution: true, delegate: true, grantDelegate: true } },
        { module: "Leave/Liberty", permission: "Leave/Liberty Approver", authority: { execution: true, delegate: true, grantDelegate: true } },
        { module: "Leave/Liberty", permission: "Leave/Liberty Reviewer", authority: { execution: true, delegate: true, grantDelegate: true } },
        { module: "Leave/Liberty", permission: "Leave/Liberty Check In/Out", authority: { execution: true, delegate: true, grantDelegate: true } },
        { module: "Officer of the Day", permission: "Officer of the Day Approver", authority: { execution: true, delegate: true, grantDelegate: true } },
        { module: "Outbound Interview", permission: "Outbound Interview Viewer w/ Comment Only", authority: { execution: true, delegate: false, grantDelegate: false } },
        { module: "PromRec App", permission: "Promotion Recommendation Viewer", authority: { execution: true, delegate: true, grantDelegate: true } },
        { module: "Suspend/Restore User", permission: "Suspend/Restore User Approver", authority: { execution: true, delegate: true, grantDelegate: true } },
        { module: "UMSR Duty Status", permission: "UMSR Duty Status Approver", authority: { execution: true, delegate: true, grantDelegate: true } },
        { module: "UMSR Join/Drop", permission: "UMSR Join/Drop Approver", authority: { execution: true, delegate: true, grantDelegate: true } },
        { module: "UMSR Join/Drop", permission: "UMSR Join/Drop Active Reviewer", authority: { execution: true, delegate: true, grantDelegate: true } },
        { module: "UMSR Morning Report", permission: "UMSR Morning Report Approver", authority: { execution: true, delegate: true, grantDelegate: true } },
        { module: "UMSR Pers Accountability", permission: "Manage Personnel Accountability Information", authority: { execution: true, delegate: true, grantDelegate: false } },
        { module: "UMSR Read-Only", permission: "UMSR Read-Only Viewer", authority: { execution: true, delegate: true, grantDelegate: true } },
        { module: "UMSR Unit Membership", permission: "UMSR Unit Membership Approver", authority: { execution: true, delegate: true, grantDelegate: true } },
        { module: "Unit Reports", permission: "Unit Reports", authority: { execution: true, delegate: true, grantDelegate: true } },
      ],
    },
    {
      name: "SERGEANT MAJOR (SgtMaj)",
      description: "Battalion Sergeant Major",
      permissions: [
        { module: "All Reports", permission: "All Reports Viewer", authority: { execution: true, delegate: false, grantDelegate: false } },
        { module: "BIC Assignment", permission: "BIC Assignment Viewer", authority: { execution: true, delegate: false, grantDelegate: false } },
        { module: "Commanders Messaging", permission: "Commanders Messaging Update Approver", authority: { execution: true, delegate: false, grantDelegate: false } },
        { module: "EPAR Unit Leader", permission: "EPAR Unit Leader Approver", authority: { execution: true, delegate: true, grantDelegate: false } },
        { module: "EPAR Unit Leader", permission: "EPAR Unit Leader Active Reviewer", authority: { execution: true, delegate: true, grantDelegate: false } },
        { module: "Leave/Liberty", permission: "Leave/Liberty Reviewer", authority: { execution: true, delegate: false, grantDelegate: false } },
        { module: "Leave/Liberty", permission: "Leave/Liberty Check In/Out", authority: { execution: true, delegate: false, grantDelegate: false } },
        { module: "Outbound Interview", permission: "Outbound Interview Viewer w/ Comment Only", authority: { execution: true, delegate: false, grantDelegate: false } },
        { module: "PromRec App", permission: "Promotion Recommendation Reviewer", authority: { execution: true, delegate: true, grantDelegate: false } },
        { module: "PromRec App", permission: "Promotion Recommendation Viewer", authority: { execution: true, delegate: true, grantDelegate: false } },
        { module: "UMSR Duty Status", permission: "UMSR Duty Status Approver", authority: { execution: true, delegate: true, grantDelegate: false } },
        { module: "UMSR Morning Report", permission: "UMSR Morning Report Approver", authority: { execution: true, delegate: true, grantDelegate: false } },
        { module: "UMSR Pers Accountability", permission: "Manage Personnel Accountability Information", authority: { execution: true, delegate: true, grantDelegate: false } },
        { module: "UMSR Unit Membership", permission: "UMSR Unit Membership Approver", authority: { execution: true, delegate: true, grantDelegate: false } },
        { module: "Unit Reports", permission: "Unit Reports", authority: { execution: true, delegate: true, grantDelegate: false } },
      ],
    },
    {
      name: "COMPANY COMMANDER (CoCmdr)",
      description: "Company-level commanding officer",
      permissions: [
        { module: "All Reports", permission: "All Reports Viewer", authority: { execution: true, delegate: true, grantDelegate: true } },
        { module: "BIC Assignment", permission: "BIC Assignment Approver", authority: { execution: true, delegate: true, grantDelegate: true } },
        { module: "BIC Assignment", permission: "BIC Assignment Viewer", authority: { execution: true, delegate: true, grantDelegate: true } },
        { module: "EPAR Unit Leader", permission: "EPAR Unit Leader Approver", authority: { execution: true, delegate: true, grantDelegate: true } },
        { module: "EPAR Unit Leader", permission: "EPAR Unit Leader Active Reviewer", authority: { execution: true, delegate: true, grantDelegate: true } },
        { module: "Leave/Liberty", permission: "SLA Viewer", authority: { execution: true, delegate: true, grantDelegate: true } },
        { module: "Leave/Liberty", permission: "Leave/Liberty Approver", authority: { execution: true, delegate: true, grantDelegate: true } },
        { module: "Leave/Liberty", permission: "Leave/Liberty Reviewer", authority: { execution: true, delegate: true, grantDelegate: true } },
        { module: "Leave/Liberty", permission: "Leave/Liberty Check In/Out", authority: { execution: true, delegate: true, grantDelegate: true } },
        { module: "Outbound Interview", permission: "Outbound Interview Viewer w/ Comment Only", authority: { execution: true, delegate: false, grantDelegate: false } },
        { module: "PromRec App", permission: "Promotion Recommendation Reviewer", authority: { execution: true, delegate: true, grantDelegate: true } },
        { module: "PromRec App", permission: "Promotion Recommendation Viewer", authority: { execution: true, delegate: true, grantDelegate: true } },
        { module: "UMSR Duty Status", permission: "UMSR Duty Status Approver", authority: { execution: true, delegate: true, grantDelegate: true } },
        { module: "UMSR Join/Drop", permission: "UMSR Join/Drop Approver", authority: { execution: true, delegate: true, grantDelegate: true } },
        { module: "UMSR Join/Drop", permission: "UMSR Join/Drop Active Reviewer", authority: { execution: true, delegate: true, grantDelegate: true } },
        { module: "UMSR Morning Report", permission: "UMSR Morning Report Approver", authority: { execution: true, delegate: true, grantDelegate: true } },
        { module: "UMSR Pers Accountability", permission: "Manage Personnel Accountability Information", authority: { execution: true, delegate: true, grantDelegate: true } },
        { module: "UMSR Read-Only", permission: "UMSR Read-Only Viewer", authority: { execution: true, delegate: true, grantDelegate: true } },
        { module: "UMSR Unit Membership", permission: "UMSR Unit Membership Approver", authority: { execution: true, delegate: true, grantDelegate: true } },
        { module: "Unit Reports", permission: "Unit Reports", authority: { execution: true, delegate: true, grantDelegate: true } },
      ],
    },
    {
      name: "COMPANY FIRST SERGEANT (1stSgt)",
      description: "Company First Sergeant",
      permissions: [
        { module: "BIC Assignment", permission: "BIC Assignment Approver", authority: { execution: true, delegate: false, grantDelegate: false } },
        { module: "EPAR Unit Leader", permission: "EPAR Unit Leader Active Reviewer", authority: { execution: true, delegate: false, grantDelegate: false } },
        { module: "Leave/Liberty", permission: "Leave/Liberty Reviewer", authority: { execution: true, delegate: true, grantDelegate: false } },
        { module: "Leave/Liberty", permission: "Leave/Liberty Check In/Out", authority: { execution: true, delegate: false, grantDelegate: false } },
        { module: "PromRec App", permission: "Promotion Recommendation Reviewer", authority: { execution: true, delegate: true, grantDelegate: false } },
        { module: "PromRec App", permission: "Promotion Recommendation Viewer", authority: { execution: true, delegate: true, grantDelegate: false } },
        { module: "UMSR Duty Status", permission: "UMSR Duty Status Approver", authority: { execution: true, delegate: true, grantDelegate: false } },
        { module: "UMSR Join/Drop", permission: "UMSR Join/Drop Approver", authority: { execution: true, delegate: false, grantDelegate: false } },
        { module: "UMSR Join/Drop", permission: "UMSR Join/Drop Active Reviewer", authority: { execution: true, delegate: true, grantDelegate: false } },
        { module: "UMSR Morning Report", permission: "UMSR Morning Report Approver", authority: { execution: true, delegate: true, grantDelegate: false } },
        { module: "UMSR Pers Accountability", permission: "Manage Personnel Accountability Information", authority: { execution: true, delegate: true, grantDelegate: false } },
        { module: "UMSR Read-Only", permission: "UMSR Read-Only Viewer", authority: { execution: true, delegate: true, grantDelegate: false } },
        { module: "UMSR Unit Membership", permission: "UMSR Unit Membership Approver", authority: { execution: true, delegate: true, grantDelegate: false } },
        { module: "Unit Reports", permission: "Unit Reports", authority: { execution: true, delegate: true, grantDelegate: false } },
      ],
    },
    {
      name: "PLATOON COMMANDER",
      description: "Platoon-level commanding officer",
      permissions: [
        { module: "All Reports", permission: "All Reports Viewer", authority: { execution: true, delegate: true, grantDelegate: false } },
        { module: "BIC Assignment", permission: "BIC Assignment Approver", authority: { execution: true, delegate: true, grantDelegate: false } },
        { module: "BIC Assignment", permission: "BIC Assignment Viewer", authority: { execution: true, delegate: true, grantDelegate: false } },
        { module: "EPAR Unit Leader", permission: "EPAR Unit Leader Active Reviewer", authority: { execution: true, delegate: true, grantDelegate: false } },
        { module: "Leave/Liberty", permission: "Leave/Liberty Reviewer", authority: { execution: true, delegate: true, grantDelegate: false } },
        { module: "Leave/Liberty", permission: "Leave/Liberty Check In/Out", authority: { execution: true, delegate: false, grantDelegate: false } },
        { module: "Manage Templates/Rules", permission: "Manage Templates/Rules Approver", authority: { execution: true, delegate: false, grantDelegate: false } },
        { module: "Organization Management", permission: "Maintain Organizations", authority: { execution: true, delegate: false, grantDelegate: false } },
        { module: "Outbound Interview", permission: "Outbound Interview Viewer w/ Comment Only", authority: { execution: true, delegate: false, grantDelegate: false } },
        { module: "PromRec App", permission: "Promotion Recommendation Reviewer", authority: { execution: true, delegate: true, grantDelegate: false } },
        { module: "PromRec App", permission: "Promotion Recommendation Viewer", authority: { execution: true, delegate: true, grantDelegate: false } },
        { module: "UMSR Duty Status", permission: "UMSR Duty Status Approver", authority: { execution: true, delegate: true, grantDelegate: false } },
        { module: "UMSR Join/Drop", permission: "UMSR Join/Drop Active Reviewer", authority: { execution: true, delegate: true, grantDelegate: false } },
        { module: "UMSR Morning Report", permission: "UMSR Morning Report Approver", authority: { execution: true, delegate: true, grantDelegate: false } },
        { module: "UMSR Pers Accountability", permission: "Manage Personnel Accountability Information", authority: { execution: true, delegate: true, grantDelegate: false } },
        { module: "UMSR Unit Membership", permission: "UMSR Unit Membership Approver", authority: { execution: true, delegate: true, grantDelegate: false } },
        { module: "Unit Reports", permission: "Unit Reports", authority: { execution: true, delegate: true, grantDelegate: false } },
      ],
    },
    {
      name: "PLATOON SERGEANT",
      description: "Platoon Sergeant",
      permissions: [
        { module: "BIC Assignment", permission: "BIC Assignment Approver", authority: { execution: true, delegate: false, grantDelegate: false } },
        { module: "BIC Assignment", permission: "BIC Assignment Viewer", authority: { execution: true, delegate: false, grantDelegate: false } },
        { module: "EPAR Unit Leader", permission: "EPAR Unit Leader Active Reviewer", authority: { execution: true, delegate: false, grantDelegate: false } },
        { module: "Leave/Liberty", permission: "Leave/Liberty Reviewer", authority: { execution: true, delegate: false, grantDelegate: false } },
        { module: "Leave/Liberty", permission: "Leave/Liberty Check In/Out", authority: { execution: true, delegate: false, grantDelegate: false } },
        { module: "PromRec App", permission: "Promotion Recommendation Reviewer", authority: { execution: true, delegate: true, grantDelegate: false } },
        { module: "PromRec App", permission: "Promotion Recommendation Viewer", authority: { execution: true, delegate: true, grantDelegate: false } },
        { module: "UMSR Duty Status", permission: "UMSR Duty Status Approver", authority: { execution: true, delegate: false, grantDelegate: false } },
        { module: "UMSR Join/Drop", permission: "UMSR Join/Drop Active Reviewer", authority: { execution: true, delegate: false, grantDelegate: false } },
        { module: "UMSR Morning Report", permission: "UMSR Morning Report Approver", authority: { execution: true, delegate: false, grantDelegate: false } },
        { module: "UMSR Pers Accountability", permission: "Manage Personnel Accountability Information", authority: { execution: true, delegate: false, grantDelegate: false } },
        { module: "UMSR Unit Membership", permission: "UMSR Unit Membership Approver", authority: { execution: true, delegate: true, grantDelegate: false } },
        { module: "Unit Reports", permission: "Unit Reports", authority: { execution: true, delegate: false, grantDelegate: false } },
      ],
    },
    {
      name: "WORK SECTION LEADER",
      description: "Work section/shop leader",
      permissions: [
        { module: "BIC Assignment", permission: "BIC Assignment Viewer", authority: { execution: true, delegate: false, grantDelegate: false } },
        { module: "EPAR Unit Leader", permission: "EPAR Unit Leader Active Reviewer", authority: { execution: true, delegate: false, grantDelegate: false } },
        { module: "Leave/Liberty", permission: "Leave/Liberty Reviewer", authority: { execution: true, delegate: false, grantDelegate: false } },
        { module: "Leave/Liberty", permission: "Leave/Liberty Check In/Out", authority: { execution: true, delegate: false, grantDelegate: false } },
        { module: "PromRec App", permission: "Promotion Recommendation Reviewer", authority: { execution: true, delegate: false, grantDelegate: false } },
        { module: "UMSR Duty Status", permission: "UMSR Duty Status Approver", authority: { execution: true, delegate: false, grantDelegate: false } },
        { module: "UMSR Join/Drop", permission: "UMSR Join/Drop Active Reviewer", authority: { execution: true, delegate: false, grantDelegate: false } },
        { module: "UMSR Morning Report", permission: "UMSR Morning Report Approver", authority: { execution: true, delegate: false, grantDelegate: false } },
        { module: "Unit Reports", permission: "Unit Reports", authority: { execution: true, delegate: false, grantDelegate: false } },
      ],
    },
    {
      name: "OFFICER OF THE DAY (OOD)",
      description: "Template is granted and revoked through the Assign Officer of the Day feature in Permissions Management",
      permissions: [
        { module: "Leave/Liberty", permission: "Leave/Liberty Approver", authority: { execution: true, delegate: false, grantDelegate: false } },
        { module: "Leave/Liberty", permission: "Leave/Liberty Reviewer", authority: { execution: true, delegate: false, grantDelegate: false } },
        { module: "Leave/Liberty", permission: "Leave/Liberty Check In/Out", authority: { execution: true, delegate: true, grantDelegate: false } },
        { module: "Officer of the Day", permission: "Officer of the Day Approver", authority: { execution: true, delegate: false, grantDelegate: false } },
        { module: "Outbound Interview", permission: "Outbound Interview Reviewer", authority: { execution: true, delegate: false, grantDelegate: false } },
        { module: "UMSR Join/Drop", permission: "UMSR Join/Drop Active Reviewer", authority: { execution: true, delegate: false, grantDelegate: false } },
      ],
    },
    {
      name: "STAFF DUTY NCO (SDNCO)",
      description: "Staff Duty Non-Commissioned Officer",
      permissions: [
        { module: "Leave/Liberty", permission: "Leave/Liberty Approver", authority: { execution: true, delegate: false, grantDelegate: false } },
        { module: "Leave/Liberty", permission: "Leave/Liberty Reviewer", authority: { execution: true, delegate: false, grantDelegate: false } },
        { module: "Leave/Liberty", permission: "Leave/Liberty Check In/Out", authority: { execution: true, delegate: false, grantDelegate: false } },
        { module: "Outbound Interview", permission: "Outbound Interview Reviewer", authority: { execution: true, delegate: false, grantDelegate: false } },
        { module: "UMSR Pers Accountability", permission: "Manage Personnel Accountability Information", authority: { execution: true, delegate: false, grantDelegate: false } },
        { module: "UMSR Read-Only", permission: "UMSR Read-Only Viewer", authority: { execution: true, delegate: false, grantDelegate: false } },
      ],
    },
    {
      name: "DUTY NCO (DNCO)",
      description: "Duty Non-Commissioned Officer",
      permissions: [
        { module: "Leave/Liberty", permission: "Leave/Liberty Reviewer", authority: { execution: true, delegate: false, grantDelegate: false } },
        { module: "Leave/Liberty", permission: "Leave/Liberty Check In/Out", authority: { execution: true, delegate: false, grantDelegate: false } },
        { module: "UMSR Pers Accountability", permission: "Manage Personnel Accountability Information", authority: { execution: true, delegate: false, grantDelegate: false } },
      ],
    },
    {
      name: "FAMILY CARE PLAN COORDINATOR",
      description: "Allows the Coordinator to view and comment on Family Care Plans within the respective module and additionally the authority to delegate Validating Official permissions on behalf of the Commanding Officer",
      permissions: [
        { module: "Family Care Plan", permission: "Coordinator", authority: { execution: true, delegate: false, grantDelegate: false } },
        { module: "Family Care Plan", permission: "Validating Official", authority: { execution: false, delegate: true, grantDelegate: false } },
      ],
    },
  ],
};

// ============================================
// LEADERS - ACCOUNTABILITY & DISCIPLINE
// ============================================

const NJP_AUTHORITY_LEVELS_DATA = {
  references: [
    { title: "MCO 5800.16 Volume 14 - Legal Support and Administration Manual", url: "https://www.marines.mil/News/Publications/MCPEL/Electronic-Library-Display/Article/899474/mco-580016-vol-14/", isQuickLink: true },
    { title: "Manual for Courts-Martial, Part V - NJP Procedures", url: "https://jsc.defense.gov/Military-Law/Current-Publications-702-HG/", isQuickLink: true },
    { title: "JAGMAN 0111 - NJP Guidance", url: "https://www.jag.navy.mil/library/instructions/JAGINST_5800.7G.pdf" },
  ],
};

const NJP_RECOMMENDATION_DATA = {
  references: [
    { title: "MCO 5800.16 Volume 14 - Legal Support and Administration Manual", url: "https://www.marines.mil/News/Publications/MCPEL/Electronic-Library-Display/Article/899474/mco-580016-vol-14/", isQuickLink: true },
    { title: "MCO P1070.12K - Individual Records Administration Manual (IRAM)", url: "https://www.marines.mil/News/Publications/MCPEL/Electronic-Library-Display/Article/899135/mco-p107012k/", isQuickLink: true },
  ],
};

const UA_DESERTION_REPORTING_DATA = {
  references: [
    { title: "MCO 1620.3A - Absentee and Deserter Apprehension Program", url: "https://www.marines.mil/News/Publications/MCPEL/Electronic-Library-Display/Article/899304/mco-16203a/", isQuickLink: true },
    { title: "MCO P5800.16A - Legal Administration Manual", url: "https://www.marines.mil/News/Publications/MCPEL/Electronic-Library-Display/Article/899474/mco-580016-vol-14/" },
    { title: "MCO 1610.7 - Performance Evaluation System (Chapter 3)", url: "https://www.marines.mil/News/Publications/MCPEL/Electronic-Library-Display/Article/899293/mco-16107/" },
  ],
};

const ADSEP_OVERVIEW_DATA = {
  references: [
    { title: "MCO P1900.16 - MARCORSEPMAN (Paragraph 6105)", url: "https://www.marines.mil/News/Publications/MCPEL/Electronic-Library-Display/Article/899390/mco-190016g/", isQuickLink: true },
    { title: "MCO P1070.12K - Individual Records Administration Manual (IRAM)", url: "https://www.marines.mil/News/Publications/MCPEL/Electronic-Library-Display/Article/899135/mco-p107012k/" },
    { title: "DoDI 1332.14 - Enlisted Administrative Separations", url: "https://www.esd.whs.mil/Portals/54/Documents/DD/issuances/dodi/133214p.pdf", isQuickLink: true },
  ],
};

const LEGAL_HOLD_INVESTIGATIONS_DATA = {
  references: [
    { title: "MCO 5800.16 - Legal Support and Administration Manual", url: "https://www.marines.mil/News/Publications/MCPEL/Electronic-Library-Display/Article/899474/mco-580016-vol-14/", isQuickLink: true },
    { title: "JAGMAN - Judge Advocate General Manual", url: "https://www.jag.navy.mil/library/instructions/JAGINST_5800.7G.pdf", isQuickLink: true },
  ],
};

const ARTICLE_31B_RIGHTS_DATA = {
  references: [
    { title: "10 U.S.C. 831 - Article 31, UCMJ", url: "https://www.law.cornell.edu/uscode/text/10/831", isQuickLink: true },
    { title: "Military Rules of Evidence 305", url: "https://jsc.defense.gov/Military-Law/Current-Publications-702-HG/", isQuickLink: true },
    { title: "MCO 5800.16 - Legal Support and Administration Manual", url: "https://www.marines.mil/News/Publications/MCPEL/Electronic-Library-Display/Article/899474/mco-580016-vol-14/" },
    { title: "HQMC Practice Advisory 21-4 - Article 31 Rights Advisories", url: "https://www.hqmc.marines.mil/sja/" },
  ],
};

const PROGRESSIVE_DISCIPLINE_DATA = {
  references: [
    { title: "MCO P1070.12K - IRAM (Page 11 Entries)", url: "https://www.marines.mil/News/Publications/MCPEL/Electronic-Library-Display/Article/899135/mco-p107012k/", isQuickLink: true },
    { title: "MCO P1900.16 - MARCORSEPMAN (Paragraph 6105)", url: "https://www.marines.mil/News/Publications/MCPEL/Electronic-Library-Display/Article/899390/mco-190016g/", isQuickLink: true },
    { title: "JAGMAN Chapter I - EMI and Administrative Measures", url: "https://www.jag.navy.mil/library/instructions/JAGINST_5800.7G.pdf" },
    { title: "MCO 5800.16 - Legal Support and Administration Manual", url: "https://www.marines.mil/News/Publications/MCPEL/Electronic-Library-Display/Article/899474/mco-580016-vol-14/" },
  ],
};

const PAGE11_VS_6105_DECISION_GUIDE_DATA = {
  references: [
    { title: "MCO P1070.12K - IRAM (Page 11 Entries)", url: "https://www.marines.mil/News/Publications/MCPEL/Electronic-Library-Display/Article/899135/mco-p107012k/" },
    { title: "MCO P1900.16 - MARCORSEPMAN (Paragraph 6105)", url: "https://www.marines.mil/News/Publications/MCPEL/Electronic-Library-Display/Article/899390/mco-190016g/" },
    { title: "MCO 1610.7B - Performance Evaluation System", url: "https://www.marines.mil/News/Publications/MCPEL/Electronic-Library-Display/Article/899232/mco-16101b/" },
    { title: "MCO 6100.13A - Physical Fitness Program", url: "https://www.marines.mil/News/Publications/MCPEL/Electronic-Library-Display/Article/899201/mco-610013a/", isQuickLink: true },
  ],
};

const COUNSELING_REFUSAL_PROCEDURES_DATA = {
  references: [
    { title: "MCO 1610.7B Chapter 5 - Performance Evaluation (Refusal Procedures)", url: "https://www.marines.mil/News/Publications/MCPEL/Electronic-Library-Display/Article/899232/mco-16101b/", isQuickLink: true },
    { title: "MCO P1070.12K - IRAM (Page 11 Entries)", url: "https://www.marines.mil/News/Publications/MCPEL/Electronic-Library-Display/Article/899135/mco-p107012k/" },
    { title: "MCO P1900.16 - MARCORSEPMAN (Paragraph 6105)", url: "https://www.marines.mil/News/Publications/MCPEL/Electronic-Library-Display/Article/899390/mco-190016g/" },
    { title: "UCMJ Article 92 - Failure to Obey Order", url: "https://www.law.cornell.edu/uscode/text/10/892" },
  ],
};

const HAZING_HARASSMENT_REPORTING_DATA = {
  references: [
    { title: "MCO 5354.1G w/Admin CH-1 - PAC Prevention and Response", url: "https://www.marines.mil/Portals/1/Publications/MCO%205354.1G.pdf", isQuickLink: true },
    { title: "PAC Toolkit", url: "https://www.manpower.marines.mil/Plans-and-Policies/Manpower-Plans-and-Policy/PAC-Toolkit/", isQuickLink: true },
    { title: "NAVMC 11512 - PAC Complaint Form", url: "https://www.marines.mil/Portals/1/Publications/NAVMC%2011512.pdf" },
    { title: "DoDI 1020.03 w/CH-2 - Harassment Prevention", url: "https://www.esd.whs.mil/Portals/54/Documents/DD/issuances/dodi/102003p.pdf" },
    { title: "NCIS Tip Line", url: "https://www.ncis.navy.mil/Resources/NCIS-Tips/" },
  ],
};

// Leaders - Awards & Recognition
const WRITING_AWARD_RECOMMENDATIONS_DATA = {
  references: [
    { title: "SECNAV M-1650.1 - Navy and Marine Corps Awards Manual", url: "https://www.secnav.navy.mil/doni/SECNAV%20Manuals1/1650.1.pdf", isQuickLink: true },
    { title: "SECNAVINST 1650.1J - Department of the Navy Military Awards Policy", url: "https://www.secnav.navy.mil/doni/Directives/01000%20Military%20Personnel%20Support/01-600%20Performance%20and%20Discipline%20Programs/1650.1J.pdf" },
    { title: "MCO 1650.19J with CH1 - Administrative and Issue Procedures for Decorations, Medals, and Awards", url: "https://www.marines.mil/News/Publications/MCPEL/Electronic-Library-Display/Article/899334/mco-165019j-wch-1/", isQuickLink: true },
  ],
};

const CITATION_FORMAT_REQUIREMENTS_DATA = {
  references: [
    { title: "SECNAV M-1650.1, Chapter 2, Appendix B - Sample Citations", url: "https://www.secnav.navy.mil/doni/SECNAV%20Manuals1/1650.1.pdf", isQuickLink: true },
    { title: "SECNAV M-1650.1, Table 20 - PMD Combination Citation/Certificate Format", url: "https://www.secnav.navy.mil/doni/SECNAV%20Manuals1/1650.1.pdf" },
    { title: "SECNAV M-1650.1, Table 21 - NC and NAM Standard Opening Sentences", url: "https://www.secnav.navy.mil/doni/SECNAV%20Manuals1/1650.1.pdf" },
  ],
};

const COMMON_AWARD_ERRORS_DATA = {
  references: [
    { title: "SECNAV M-1650.1 - Navy and Marine Corps Awards Manual", url: "https://www.secnav.navy.mil/doni/SECNAV%20Manuals1/1650.1.pdf", isQuickLink: true },
    { title: "MARADMIN 077/25 - CMC Delegation of Awarding Authority", url: "https://www.marines.mil/News/Messages/Messages-Display/Article/4073209/commandant-of-the-marine-corps-delegation-of-awarding-authority-for-military-aw/", isQuickLink: true },
    { title: "MARADMIN 093/25 - PCS Season Awards Guidance", url: "https://www.marines.mil/News/Messages/Messages-Display/Article/4078781/military-awards-guidance-for-permanent-change-of-station-season/" },
  ],
};

const IAPS_SUBMISSION_DATA = {
  references: [
    { title: "MARADMIN 042/08 - Implementation of iAPS", url: "https://www.marines.mil/News/Messages/Messages-Display/Article/893622/implementation-of-the-improved-awards-processing-system-iaps/", isQuickLink: true },
    { title: "MARADMIN 099/18 - iAPS Updates", url: "https://www.marines.mil/News/Messages/Messages-Display/Article/1438860/improved-awards-processing-system-iaps-updates/" },
    { title: "MARADMIN 077/25 - CMC Delegation of Awarding Authority", url: "https://www.marines.mil/News/Messages/Messages-Display/Article/4073209/commandant-of-the-marine-corps-delegation-of-awarding-authority-for-military-aw/", isQuickLink: true },
  ],
};

const AWARD_ROUTING_APPROVAL_DATA = {
  references: [
    { title: "MARADMIN 077/25 (21 Feb 2025) - CMC Delegation of Awarding Authority for Military Awards", url: "https://www.marines.mil/News/Messages/Messages-Display/Article/4073209/commandant-of-the-marine-corps-delegation-of-awarding-authority-for-military-aw/", isQuickLink: true },
    { title: "SECNAVINST 1650.1J - Department of the Navy Military Awards Policy", url: "https://www.secnav.navy.mil/doni/Directives/01000%20Military%20Personnel%20Support/01-600%20Performance%20and%20Discipline%20Programs/1650.1J.pdf" },
    { title: "SECNAV M-1650.1 - Navy and Marine Corps Awards Manual", url: "https://www.secnav.navy.mil/doni/SECNAV%20Manuals1/1650.1.pdf", isQuickLink: true },
    { title: "MCO 1650.19J with CH1 - Administrative and Issue Procedures for Decorations, Medals, and Awards", url: "https://www.marines.mil/News/Publications/MCPEL/Electronic-Library-Display/Article/899334/mco-165019j-wch-1/" },
  ],
};

const AWARD_TIMELINE_MANAGEMENT_DATA = {
  references: [
    { title: "MARADMIN 093/25 - PCS Season Awards Guidance", url: "https://www.marines.mil/News/Messages/Messages-Display/Article/4078781/military-awards-guidance-for-permanent-change-of-station-season/", isQuickLink: true },
    { title: "MCO 1650.19J with CH1 - Administrative and Issue Procedures for Decorations, Medals, and Awards", url: "https://www.marines.mil/News/Publications/MCPEL/Electronic-Library-Display/Article/899334/mco-165019j-wch-1/", isQuickLink: true },
  ],
};

const AWARD_TROUBLESHOOTING_DATA = {
  references: [
    { title: "MCO 1650.19J with CH1 - Administrative and Issue Procedures for Decorations, Medals, and Awards", url: "https://www.marines.mil/News/Publications/MCPEL/Electronic-Library-Display/Article/899334/mco-165019j-wch-1/", isQuickLink: true },
    { title: "MARADMIN 093/25 - PCS Season Awards Guidance", url: "https://www.marines.mil/News/Messages/Messages-Display/Article/4078781/military-awards-guidance-for-permanent-change-of-station-season/", isQuickLink: true },
  ],
};

// Leaders - Career Development
const SUPPORTING_REENLISTMENT_DECISIONS_DATA = {
  references: [
    { title: "MCO 1616.1 - Junior Enlisted Performance Evaluation System (JEPES)", url: "https://www.marines.mil/News/Publications/MCPEL/Electronic-Library-Display/Article/899293/mco-16107/", isQuickLink: true },
    { title: "MCO P1040.31J - Enlisted Retention and Career Development Manual", url: "https://www.marines.mil/News/Publications/MCPEL/Electronic-Library-Display/Article/899214/mco-p104031j/", isQuickLink: true },
    { title: "MARADMIN 046/24 - Updates to JEPES MOS Qualifications Initiative", url: "https://www.marines.mil/News/Messages/Messages-Display/Article/3662965/updates-to-the-implementation-of-military-occupational-specialty-qualifications/" },
  ],
};

const PME_TRACKING_COMPLETION_DATA = {
  references: [
    { title: "MCO 1553.4B - Professional Military Education", url: "https://www.marines.mil/News/Publications/MCPEL/Electronic-Library-Display/Article/899348/mco-15534b/", isQuickLink: true },
    { title: "MCO P1400.32D - Enlisted Promotion Manual", url: "https://www.marines.mil/News/Publications/MCPEL/Electronic-Library-Display/Article/899216/mco-p140032d/" },
    { title: "MARADMIN 474/21 - Updated Enlisted PME Requirements by Grade", url: "https://www.marines.mil/News/Messages/Messages-Display/Article/2763368/updated-enlisted-professional-military-education-requirements-by-grade/", isQuickLink: true },
  ],
};

const MERITORIOUS_PROMOTION_PREPARATION_DATA = {
  references: [
    { title: "MCO P1400.32D - Enlisted Promotion Manual", url: "https://www.marines.mil/News/Publications/MCPEL/Electronic-Library-Display/Article/899216/mco-p140032d/", isQuickLink: true },
    { title: "MARADMIN 667/22 - Update to Meritorious Promotion Policy to Cpl and Sgt", url: "https://www.marines.mil/News/Messages/Messages-Display/Article/3241497/update-to-meritorious-promotion-policy-to-corporal-and-sergeant/", isQuickLink: true },
  ],
};

const SPECIAL_DUTY_ASSIGNMENT_SCREENING_DATA = {
  references: [
    { title: "MCO 1326.6 - SCREENMAN (Special Duty Assignment Screening)", url: "https://www.marines.mil/News/Publications/MCPEL/Electronic-Library-Display/Article/899313/mco-13266/", isQuickLink: true },
    { title: "MARADMIN 706/19 - SDA and Screenable Billets Compliance Requirements", url: "https://www.marines.mil/News/Messages/Messages-Display/Article/2046247/special-duty-assignment-and-screenable-billets-compliance-requirements/", isQuickLink: true },
  ],
};

const LATERAL_MOVE_GUIDANCE_DATA = {
  references: [
    { title: "MCO P1040.31J - Enlisted Retention and Career Development Manual", url: "https://www.marines.mil/News/Publications/MCPEL/Electronic-Library-Display/Article/899214/mco-p104031j/", isQuickLink: true },
  ],
};

const ENLISTED_COMMISSIONING_PROGRAMS_DATA = {
  references: [
    { title: "MCO 1040.43B - Enlisted to Officer Commissioning Programs", url: "https://www.marines.mil/News/Publications/MCPEL/Electronic-Library-Display/Article/899211/mco-104043b/", isQuickLink: true },
    { title: "MCO 1560.15L - Marine Enlisted Commissioning Education Program (MECEP)", url: "https://www.marines.mil/News/Publications/MCPEL/Electronic-Library-Display/Article/899354/mco-156015l/", isQuickLink: true },
  ],
};

const WARRANT_OFFICER_PROGRAM_SUPPORT_DATA = {
  references: [
    { title: "MCO 1040.42A/B - Warrant Officer and LDO Accession Programs", url: "https://www.marines.mil/News/Publications/MCPEL/Electronic-Library-Display/Article/899210/mco-104042b/", isQuickLink: true },
    { title: "SECNAVINST 1412.9B - Officer Accession Programs", url: "https://www.secnav.navy.mil/doni/Directives/01000%20Military%20Personnel%20Support/01-400%20Promotion%20and%20Advancement%20Programs/1412.9B.pdf", isQuickLink: true },
  ],
};

// Leaders - Counseling & Documentation
const SIX_FUNCTIONAL_AREAS_DATA = {
  references: [
    { title: "MCO 1500.61 - Marine Leader Development", url: "https://www.marines.mil/News/Publications/MCPEL/Electronic-Library-Display/Article/900396/mco-150061/", isQuickLink: true },
    { title: "NAVMC 2795 - User's Guide to Counseling", url: "https://www.marines.mil/Portals/1/Publications/NAVMC%202795.pdf", isQuickLink: true },
  ],
};

const SMART_GOALS_DATA = {
  references: [
    { title: "MCO 1500.61 - Marine Leader Development", url: "https://www.marines.mil/News/Publications/MCPEL/Electronic-Library-Display/Article/900396/mco-150061/", isQuickLink: true },
    { title: "NAVMC 2795 - User's Guide to Counseling", url: "https://www.marines.mil/Portals/1/Publications/NAVMC%202795.pdf", isQuickLink: true },
  ],
};

const COUNSELING_FUNDAMENTALS_DATA = {
  references: [
    { title: "MCO 1500.61 - Marine Leader Development", url: "https://www.marines.mil/News/Publications/MCPEL/Electronic-Library-Display/Article/900396/mco-150061/", isQuickLink: true },
    { title: "NAVMC 2795 - User's Guide to Counseling", url: "https://www.marines.mil/Portals/1/Publications/NAVMC%202795.pdf", isQuickLink: true },
  ],
};

const REQUIRED_COUNSELING_OCCASIONS_DATA = {
  references: [
    { title: "MCO 1500.61 - Marine Leader Development", url: "https://www.marines.mil/News/Publications/MCPEL/Electronic-Library-Display/Article/900396/mco-150061/", isQuickLink: true },
    { title: "NAVMC 2795 - User's Guide to Counseling", url: "https://www.marines.mil/Portals/1/Publications/NAVMC%202795.pdf", isQuickLink: true },
  ],
};

const INITIAL_COUNSELING_SESSION_DATA = {
  references: [
    { title: "MCO 1500.61 - Marine Leader Development", url: "https://www.marines.mil/News/Publications/MCPEL/Electronic-Library-Display/Article/900396/mco-150061/", isQuickLink: true },
    { title: "NAVMC 2795 - User's Guide to Counseling", url: "https://www.marines.mil/Portals/1/Publications/NAVMC%202795.pdf", isQuickLink: true },
  ],
};

const FOLLOW_ON_COUNSELING_SESSIONS_DATA = {
  references: [
    { title: "MCO 1500.61 - Marine Leader Development", url: "https://www.marines.mil/News/Publications/MCPEL/Electronic-Library-Display/Article/900396/mco-150061/", isQuickLink: true },
    { title: "NAVMC 2795 - User's Guide to Counseling", url: "https://www.marines.mil/Portals/1/Publications/NAVMC%202795.pdf", isQuickLink: true },
  ],
};

const MARINE_LEADER_NOTEBOOKS_DATA = {
  references: [
    { title: "MCO 1500.61 - Marine Leader Development", url: "https://www.marines.mil/News/Publications/MCPEL/Electronic-Library-Display/Article/900396/mco-150061/", isQuickLink: true },
    { title: "NAVMC 2795 - User's Guide to Counseling", url: "https://www.marines.mil/Portals/1/Publications/NAVMC%202795.pdf", isQuickLink: true },
  ],
};

// Leaders - Deployment & Readiness
const UPFRP_OVERVIEW_DATA = {
  references: [
    { title: "MCO 1754.9B - Unit, Personal and Family Readiness Program", url: "https://www.marines.mil/portals/1/Publications/MCO%201754.9B.pdf?ver=2019-04-03-142738-677", isQuickLink: true },
  ],
};

const DEPLOYMENT_TRAINING_EVENTS_DATA = {
  references: [
    { title: "MCO 1754.9B - Unit, Personal and Family Readiness Program", url: "https://www.marines.mil/portals/1/Publications/MCO%201754.9B.pdf?ver=2019-04-03-142738-677", isQuickLink: true },
  ],
};

const INDIVIDUAL_READINESS_REQUIREMENTS_DATA = {
  references: [
    { title: "MCO 6100.13A - Marine Corps Physical Fitness Program", url: "https://www.marines.mil/Portals/1/Publications/MCO%206100.13A.pdf", isQuickLink: true },
    { title: "MCO 1040.31 - Enlisted Retention and Career Development", url: "https://www.marines.mil/News/Publications/MCPEL/Electronic-Library-Display/Article/899193/mco-104031/" },
    { title: "BUMEDINST 6230.15B - Immunizations and Chemoprophylaxis", url: "https://www.med.navy.mil/Portals/62/Documents/BUMED/Directives/6000s/6230_15B.pdf", isQuickLink: true },
  ],
};

const FAMILY_CARE_PLAN_REQUIREMENTS_DATA = {
  references: [
    { title: "MCO 1754.6 - Family Care Plan Policy", url: "https://www.marines.mil/News/Publications/MCPEL/Electronic-Library-Display/Article/899529/mco-17546/", isQuickLink: true },
    { title: "MCO 1040.31 - Enlisted Retention and Career Development", url: "https://www.marines.mil/News/Publications/MCPEL/Electronic-Library-Display/Article/899193/mco-104031/" },
  ],
};

const OBLIGATED_SERVICE_DEPLOYMENT_DATA = {
  references: [
    { title: "MCO 1040.31 - Enlisted Retention and Career Development", url: "https://www.marines.mil/News/Publications/MCPEL/Electronic-Library-Display/Article/899193/mco-104031/", isQuickLink: true },
    { title: "MCO 1300.8 - Marine Corps Personnel Assignment Policy", url: "https://www.marines.mil/News/Publications/MCPEL/Electronic-Library-Display/Article/899258/mco-13008/", isQuickLink: true },
  ],
};

const PHYSICAL_FITNESS_READINESS_DATA = {
  references: [
    { title: "MCO 6100.13A - Marine Corps Physical Fitness Program", url: "https://www.marines.mil/Portals/1/Publications/MCO%206100.13A.pdf", isQuickLink: true },
  ],
};

const PRE_DEPLOYMENT_CHECKLIST_DATA = {
  references: [
    { title: "MCO 1754.9B - Unit, Personal and Family Readiness Program", url: "https://www.marines.mil/portals/1/Publications/MCO%201754.9B.pdf?ver=2019-04-03-142738-677", isQuickLink: true },
    { title: "MCO 3000.11E - Marine Corps Deployment Planning", url: "https://www.marines.mil/News/Publications/MCPEL/Electronic-Library-Display/Article/899716/mco-300011e/", isQuickLink: true },
  ],
};

const SUPPORTING_IAS_AND_TAD_DATA = {
  references: [
    { title: "MCO 1754.9B - Unit, Personal and Family Readiness Program", url: "https://www.marines.mil/portals/1/Publications/MCO%201754.9B.pdf?ver=2019-04-03-142738-677", isQuickLink: true },
  ],
};

// Leaders - Performance Evaluation
const JEPES_OVERVIEW_LEADERS_DATA = {
  references: [
    { title: "MCO 1616.1 - JEPES", url: "https://www.marines.mil/News/Publications/MCPEL/Electronic-Library-Display/Article/899232/mco-16161/", isQuickLink: true },
    { title: "MCO P1400.32D - Enlisted Promotion Manual", url: "https://www.marines.mil/News/Publications/MCPEL/Electronic-Library-Display/Article/899270/mco-p140032d/", isQuickLink: true },
  ],
};

const JEPES_REPORTING_CHAIN_DATA = {
  references: [
    { title: "MCO 1616.1 - JEPES", url: "https://www.marines.mil/News/Publications/MCPEL/Electronic-Library-Display/Article/899232/mco-16161/", isQuickLink: true },
  ],
};

const JEPES_REPORTING_OCCASIONS_DATA = {
  references: [
    { title: "MCO 1616.1 - JEPES", url: "https://www.marines.mil/News/Publications/MCPEL/Electronic-Library-Display/Article/899232/mco-16161/", isQuickLink: true },
  ],
};

const JEPES_COMMAND_INPUT_METRICS_DATA = {
  references: [
    { title: "MCO 1616.1 - JEPES", url: "https://www.marines.mil/News/Publications/MCPEL/Electronic-Library-Display/Article/899232/mco-16161/", isQuickLink: true },
  ],
};

const NOT_REC_DATA = {
  references: [
    { title: "MCO 1616.1 - JEPES", url: "https://www.marines.mil/News/Publications/MCPEL/Electronic-Library-Display/Article/899232/mco-16161/", isQuickLink: true },
    { title: "MCO P1400.32D - Enlisted Promotion Manual", url: "https://www.marines.mil/News/Publications/MCPEL/Electronic-Library-Display/Article/899270/mco-p140032d/", isQuickLink: true },
  ],
};

const JEPES_OBJECTIVE_SCORES_DATA = {
  references: [
    { title: "MCO 1616.1 - JEPES", url: "https://www.marines.mil/News/Publications/MCPEL/Electronic-Library-Display/Article/899232/mco-16161/", isQuickLink: true },
    { title: "MARADMIN 046/24 - Updates to JEPES MOS Qualifications", url: "https://www.marines.mil/News/Messages/MARADMINS/", isQuickLink: true },
  ],
};

const JEPES_DEBRIEFING_DATA = {
  references: [
    { title: "MCO 1616.1 - JEPES", url: "https://www.marines.mil/News/Publications/MCPEL/Electronic-Library-Display/Article/899232/mco-16161/", isQuickLink: true },
  ],
};

const FITNESS_REPORTS_LEADERS_DATA = {
  references: [
    { title: "MCO 1610.7 - Performance Evaluation System", url: "https://www.marines.mil/News/Publications/MCPEL/Electronic-Library-Display/Article/899225/mco-16107/", isQuickLink: true },
  ],
};

const NOT_REC_APPEAL_PROCESS_DATA = {
  references: [
    { title: "MCO 1616.1 Chapter 2 - JEPES NOT REC Procedures", url: "https://www.marines.mil/News/Publications/MCPEL/Electronic-Library-Display/Article/899232/mco-16161/", isQuickLink: true },
    { title: "MCO 1610.7B Chapter 10 - PERB and BCNR Appeal Process", url: "https://www.marines.mil/News/Publications/MCPEL/Electronic-Library-Display/Article/899225/mco-16107/" },
    { title: "10 U.S.C. 1552 - BCNR Authority", url: "https://www.law.cornell.edu/uscode/text/10/1552" },
    { title: "DD Form 149 - Application for Correction of Military Record", url: "https://www.esd.whs.mil/Portals/54/Documents/DD/forms/dd/dd0149.pdf", isQuickLink: true },
  ],
};

const BILLET_ACCOMPLISHMENTS_DATA = {
  references: [
    { title: "MCO 1616.1 - JEPES", url: "https://www.marines.mil/News/Publications/MCPEL/Electronic-Library-Display/Article/899232/mco-16161/", isQuickLink: true },
  ],
};

const JEPES_CORRECTIVE_PROCEDURES_DATA = {
  references: [
    { title: "MCO 1616.1 - JEPES", url: "https://www.marines.mil/News/Publications/MCPEL/Electronic-Library-Display/Article/899232/mco-16161/", isQuickLink: true },
  ],
};

// Leaders - Personnel Accountability DATA
const DAILY_ACCOUNTABILITY_FUNDAMENTALS_DATA = {
  references: [
    { title: "MCO 1040.31 - Time Lost", url: "https://www.marines.mil/News/Publications/MCPEL/Electronic-Library-Display/Article/899178/mco-104031/", isQuickLink: true },
    { title: "MCO 1050.3 - Leave and Liberty", url: "https://www.marines.mil/News/Publications/MCPEL/Electronic-Library-Display/Article/899184/mco-10503k/", isQuickLink: true },
  ],
};

const GAINS_LOSSES_PROCESSING_DATA = {
  references: [
    { title: "MCO P1070.12K - IRAM", url: "https://www.marines.mil/News/Publications/MCPEL/Electronic-Library-Display/Article/899193/mco-p107012k/", isQuickLink: true },
    { title: "MCO 1040.31 - Time Lost", url: "https://www.marines.mil/News/Publications/MCPEL/Electronic-Library-Display/Article/899178/mco-104031/" },
  ],
};

const LEAVE_LIBERTY_MANAGEMENT_DATA = {
  references: [
    { title: "MCO 1050.3 - Leave and Liberty", url: "https://www.marines.mil/News/Publications/MCPEL/Electronic-Library-Display/Article/899184/mco-10503k/", isQuickLink: true },
    { title: "DoD FMR Vol 7A, Ch 34 - Leave", url: "https://comptroller.defense.gov/Portals/45/documents/fmr/current/07a/07a_34.pdf", isQuickLink: true },
  ],
};

const UA_PROCEDURES_DATA = {
  references: [
    { title: "MCO 1040.31 - Time Lost", url: "https://www.marines.mil/News/Publications/MCPEL/Electronic-Library-Display/Article/899178/mco-104031/", isQuickLink: true },
    { title: "MCO P1070.12K - IRAM", url: "https://www.marines.mil/News/Publications/MCPEL/Electronic-Library-Display/Article/899193/mco-p107012k/" },
    { title: "UCMJ Article 86 - Absence Without Leave", url: "https://www.law.cornell.edu/uscode/text/10/886", isQuickLink: true },
  ],
};

const TAD_DETACHMENT_TRACKING_DATA = {
  references: [
    { title: "MCO P1070.12K - IRAM", url: "https://www.marines.mil/News/Publications/MCPEL/Electronic-Library-Display/Article/899193/mco-p107012k/", isQuickLink: true },
    { title: "JTR - Joint Travel Regulations", url: "https://www.travel.dod.mil/Policy-Regulations/Joint-Travel-Regulations/", isQuickLink: true },
  ],
};

const MUSTER_FORMATION_PROCEDURES_DATA = {
  references: [
    { title: "MCO 1040.31 - Time Lost", url: "https://www.marines.mil/News/Publications/MCPEL/Electronic-Library-Display/Article/899178/mco-104031/", isQuickLink: true },
    { title: "MCO P1050.3 - Leave and Liberty", url: "https://www.marines.mil/News/Publications/MCPEL/Electronic-Library-Display/Article/899184/mco-10503k/", isQuickLink: true },
  ],
};

const RECORD_KEEPING_DOCUMENTATION_DATA = {
  references: [
    { title: "MCO P1070.12K - IRAM", url: "https://www.marines.mil/News/Publications/MCPEL/Electronic-Library-Display/Article/899193/mco-p107012k/", isQuickLink: true },
    { title: "MCTFS User Guide", url: "https://www.manpower.usmc.mil/webcenter/portal/MCTFS", isQuickLink: true },
    { title: "MCO 5210.11 - Records Management", url: "https://www.marines.mil/News/Publications/MCPEL/Electronic-Library-Display/Article/899348/mco-521011f/" },
  ],
};

// Leaders - Administrative Systems DATA
const MCTFS_OVERVIEW_DATA = {
  references: [
    { title: "MCO 1754.9B - Unit, Personal and Family Readiness", url: "https://www.marines.mil/portals/1/Publications/MCO%201754.9B.pdf?ver=2019-04-03-142738-677", isQuickLink: true },
    { title: "MCO 1616.1 - JEPES", url: "https://www.marines.mil/News/Publications/MCPEL/Electronic-Library-Display/Article/899232/mco-16161/", isQuickLink: true },
    { title: "MCO 1040.31 - Enlisted Retention", url: "https://www.marines.mil/News/Publications/MCPEL/Electronic-Library-Display/Article/899178/mco-104031/" },
  ],
};

const MOL_NAVIGATION_DATA = {
  references: [
    { title: "Marine Online (MOL)", url: "https://mol.tfs.usmc.mil", isQuickLink: true },
    { title: "MarineNet", url: "https://www.usmclearning.usmc.mil", isQuickLink: true },
    { title: "MCO 1616.1 - JEPES", url: "https://www.marines.mil/News/Publications/MCPEL/Electronic-Library-Display/Article/899232/mco-16161/" },
  ],
};

const JEPES_SYSTEM_NAVIGATION_DATA = {
  references: [
    { title: "MCO 1616.1 - JEPES", url: "https://www.marines.mil/News/Publications/MCPEL/Electronic-Library-Display/Article/899232/mco-16161/", isQuickLink: true },
    { title: "Marine Online (MOL)", url: "https://mol.tfs.usmc.mil", isQuickLink: true },
  ],
};

const TFRS_OVERVIEW_DATA = {
  references: [
    { title: "MCO 1040.31 - Enlisted Retention", url: "https://www.marines.mil/News/Publications/MCPEL/Electronic-Library-Display/Article/899178/mco-104031/", isQuickLink: true },
    { title: "NAVMC 11537 - Reenlistment Screening", url: "https://forms.documentservices.dla.mil/order/", isQuickLink: true },
  ],
};

const UNIT_DIARY_REPORTING_DATA = {
  references: [
    { title: "MCO P1070.12K - IRAM", url: "https://www.marines.mil/News/Publications/MCPEL/Electronic-Library-Display/Article/899193/mco-p107012k/", isQuickLink: true },
    { title: "MCO 6100.13A - Physical Fitness Program", url: "https://www.marines.mil/News/Publications/MCPEL/Electronic-Library-Display/Article/899201/mco-610013a/" },
    { title: "MCTFS PRIUM", url: "https://www.manpower.usmc.mil/webcenter/portal/MCTFS", isQuickLink: true },
  ],
};

const TRAINING_INFORMATION_SYSTEMS_DATA = {
  references: [
    { title: "MCO 6100.13A - Physical Fitness Program", url: "https://www.marines.mil/News/Publications/MCPEL/Electronic-Library-Display/Article/899201/mco-610013a/" },
    { title: "MCO 1616.1 - JEPES", url: "https://www.marines.mil/News/Publications/MCPEL/Electronic-Library-Display/Article/899232/mco-16161/" },
    { title: "MarineNet", url: "https://www.usmclearning.usmc.mil", isQuickLink: true },
    { title: "Fitness Marines", url: "https://www.fitness.marines.mil", isQuickLink: true },
  ],
};

const MCO_QUICK_REFERENCE_DATA = {
  references: [
    { title: "Marines.mil Publications", url: "https://www.marines.mil/News/Publications/MCPEL/", isQuickLink: true },
    { title: "Marine Corps Publications Electronic Library (MCPEL)", url: "https://www.marines.mil/News/Publications/MCPEL/Electronic-Library-Display/", isQuickLink: true },
  ],
};

// Leaders - Conducting Investigations Data
const REVIEW_CONVENING_ORDER_DATA = {
  references: [
    { title: "JAGMAN Chapter II", url: "https://www.jag.navy.mil/library/instructions/JAGINST_5800.7G.pdf", isQuickLink: true },
    { title: "JAGMAN Section 0205 - Convening Orders", url: "https://www.jag.navy.mil/library/instructions/JAGINST_5800.7G.pdf" },
    { title: "Navy JAG Investigation Resources", url: "https://www.jag.navy.mil/legal_services/command_services.htm" },
  ],
};

const CONTACT_JUDGE_ADVOCATE_DATA = {
  references: [
    { title: "JAGMAN Chapter II", url: "https://www.jag.navy.mil/library/instructions/JAGINST_5800.7G.pdf", isQuickLink: true },
    { title: "Navy JAG Legal Assistance", url: "https://www.jag.navy.mil/legal_services.htm" },
    { title: "Marine Corps Legal Services", url: "https://www.hqmc.marines.mil/sja/" },
  ],
};

const COORDINATE_OTHER_INVESTIGATIONS_DATA = {
  references: [
    { title: "JAGMAN Section 0201", url: "https://www.jag.navy.mil/library/instructions/JAGINST_5800.7G.pdf", isQuickLink: true },
    { title: "NCIS Field Offices", url: "https://www.ncis.navy.mil/Contact-Us/", isQuickLink: true },
    { title: "MCO 5580.2B (Law Enforcement Manual)", url: "https://www.marines.mil/Portals/1/MCO%205580.2B.pdf" },
  ],
};

const PRELIMINARY_INQUIRY_IO_DATA = {
  references: [
    { title: "JAGMAN Section 0204", url: "https://www.jag.navy.mil/library/instructions/JAGINST_5800.7G.pdf", isQuickLink: true },
    { title: "JAGMAN Appendix A-2-h (Sample Preliminary Inquiry)", url: "https://www.jag.navy.mil/library/instructions/JAGINST_5800.7G.pdf" },
    { title: "MCO 5800.16 (Marine Corps Manual for Legal Administration)", url: "https://www.marines.mil" },
  ],
};

const COMMAND_INVESTIGATION_IO_DATA = {
  references: [
    { title: "JAGMAN Section 0206-0208", url: "https://www.jag.navy.mil/library/instructions/JAGINST_5800.7G.pdf", isQuickLink: true },
    { title: "Navy JAG Investigation Guide", url: "https://www.jag.navy.mil/legal_services/command_services.htm", isQuickLink: true },
    { title: "UCMJ Article 31", url: "https://www.law.cornell.edu/uscode/text/10/831" },
    { title: "10 U.S.C. 1219", url: "https://www.law.cornell.edu/uscode/text/10/1219" },
  ],
};

const LITIGATION_REPORT_IO_DATA = {
  references: [
    { title: "JAGMAN Section 0210", url: "https://www.jag.navy.mil/library/instructions/JAGINST_5800.7G.pdf", isQuickLink: true },
    { title: "Federal Tort Claims Act", url: "https://www.law.cornell.edu/uscode/text/28/part-VI/chapter-171" },
    { title: "Navy Office of General Counsel (Code 15)", url: "https://www.jag.navy.mil/" },
  ],
};

const COLLECTING_EVIDENCE_DATA = {
  references: [
    { title: "JAGMAN Section 0207", url: "https://www.jag.navy.mil/library/instructions/JAGINST_5800.7G.pdf", isQuickLink: true },
    { title: "Military Rules of Evidence", url: "https://jsc.defense.gov/Military-Law/Current-Publications-and-Updates/" },
    { title: "MCO 5580.2B (Evidence Handling)", url: "https://www.marines.mil/Portals/1/MCO%205580.2B.pdf" },
  ],
};

const INTERVIEWING_WITNESSES_DATA = {
  references: [
    { title: "JAGMAN Section 0207", url: "https://www.jag.navy.mil/library/instructions/JAGINST_5800.7G.pdf", isQuickLink: true },
    { title: "UCMJ Article 31 (Rights Warning)", url: "https://www.law.cornell.edu/uscode/text/10/831", isQuickLink: true },
    { title: "10 U.S.C. 1219 Warning", url: "https://www.law.cornell.edu/uscode/text/10/1219" },
    { title: "NAVPERS 1070/891 (Rights Warning Form)", url: "https://www.mynavyhr.navy.mil/References/Forms/NAVPERS/" },
  ],
};

const STANDARDS_OF_PROOF_IO_DATA = {
  references: [
    { title: "JAGMAN Section 0208", url: "https://www.jag.navy.mil/library/instructions/JAGINST_5800.7G.pdf", isQuickLink: true },
    { title: "Military Rules of Evidence", url: "https://jsc.defense.gov/Military-Law/Current-Publications-and-Updates/" },
    { title: "MCM (Manual for Courts-Martial)", url: "https://jsc.defense.gov/Military-Law/Current-Publications-and-Updates/" },
  ],
};

const INVESTIGATION_REPORT_FORMAT_IO_DATA = {
  references: [
    { title: "JAGMAN Section 0208", url: "https://www.jag.navy.mil/library/instructions/JAGINST_5800.7G.pdf", isQuickLink: true },
    { title: "JAGMAN Appendix A-2 (Sample Formats)", url: "https://www.jag.navy.mil/library/instructions/JAGINST_5800.7G.pdf" },
    { title: "Navy Writer's Guide", url: "https://www.netc.navy.mil" },
  ],
};

const LOD_MISCONDUCT_DETERMINATIONS_DATA = {
  references: [
    { title: "JAGMAN Section 0209", url: "https://www.jag.navy.mil/library/instructions/JAGINST_5800.7G.pdf", isQuickLink: true },
    { title: "SECNAVINST 1770.4 (Line of Duty)", url: "https://www.secnav.navy.mil/doni/Directives/01000%20Military%20Personnel%20Support/01-700%20Morale,%20Community%20Service,%20Religious%20Aboard%20Ships/1770.4.pdf" },
    { title: "DoD Instruction 1241.01 (Reserve LOD)", url: "https://www.esd.whs.mil/Directives/issuances/dodi/" },
    { title: "MCO 5800.16 (Legal Administration)", url: "https://www.marines.mil" },
  ],
};

const DEATH_CASE_PROCEDURES_IO_DATA = {
  references: [
    { title: "JAGMAN Section 0203", url: "https://www.jag.navy.mil/library/instructions/JAGINST_5800.7G.pdf", isQuickLink: true },
    { title: "MCO 3040.4 (Casualty Assistance)", url: "https://www.marines.mil", isQuickLink: true },
    { title: "DoD Instruction 1300.18 (Casualty Notification)", url: "https://www.esd.whs.mil/Directives/issuances/dodi/" },
    { title: "SECNAVINST 1770.4 (Line of Duty)", url: "https://www.secnav.navy.mil/doni/" },
  ],
};

const COMMON_INVESTIGATION_MISTAKES_DATA = {
  references: [
    { title: "JAGMAN Chapter II", url: "https://www.jag.navy.mil/library/instructions/JAGINST_5800.7G.pdf", isQuickLink: true },
    { title: "Navy JAG Investigation Guide", url: "https://www.jag.navy.mil/legal_services/command_services.htm", isQuickLink: true },
    { title: "MCO 5800.16 (Legal Administration)", url: "https://www.marines.mil" },
  ],
};

// Commanders - Admin Investigations Data
const PRELIMINARY_INQUIRY_CA_DATA = {
  references: [
    { title: "JAGMAN Section 0204", url: "https://www.jag.navy.mil/library/instructions/JAGINST_5800.7G.pdf", isQuickLink: true },
    { title: "JAGMAN Chapter II", url: "https://www.jag.navy.mil/library/instructions/JAGINST_5800.7G.pdf" },
    { title: "MCO 5800.16 (Legal Administration)", url: "https://www.marines.mil" },
  ],
};

const COMMAND_INVESTIGATIONS_CA_DATA = {
  references: [
    { title: "JAGMAN Section 0206-0208", url: "https://www.jag.navy.mil/library/instructions/JAGINST_5800.7G.pdf", isQuickLink: true },
    { title: "Navy JAG Investigation Guide", url: "https://www.jag.navy.mil/legal_services/command_services.htm", isQuickLink: true },
    { title: "MCO 5800.16 (Legal Administration)", url: "https://www.marines.mil" },
  ],
};

const LITIGATION_REPORT_INVESTIGATIONS_CA_DATA = {
  references: [
    { title: "JAGMAN Section 0210", url: "https://www.jag.navy.mil/library/instructions/JAGINST_5800.7G.pdf", isQuickLink: true },
    { title: "Federal Tort Claims Act", url: "https://www.law.cornell.edu/uscode/text/28/part-VI/chapter-171" },
    { title: "Navy Office of General Counsel (Code 15)", url: "https://www.jag.navy.mil/" },
  ],
};

const COURTS_BOARDS_INQUIRY_DATA = {
  references: [
    { title: "JAGMAN Section 0211-0216", url: "https://www.jag.navy.mil/library/instructions/JAGINST_5800.7G.pdf", isQuickLink: true },
    { title: "10 U.S.C. 936 (Subpoena Power)", url: "https://www.law.cornell.edu/uscode/text/10/936" },
    { title: "MCO 5800.16 (Legal Administration)", url: "https://www.marines.mil" },
  ],
};

const CONVENING_ORDERS_CA_DATA = {
  references: [
    { title: "JAGMAN Section 0205", url: "https://www.jag.navy.mil/library/instructions/JAGINST_5800.7G.pdf", isQuickLink: true },
    { title: "JAGMAN Appendix A-2 (Sample Formats)", url: "https://www.jag.navy.mil/library/instructions/JAGINST_5800.7G.pdf" },
    { title: "Navy JAG Investigation Resources", url: "https://www.jag.navy.mil/legal_services/command_services.htm" },
  ],
};

const STANDARDS_OF_PROOF_CA_DATA = {
  references: [
    { title: "JAGMAN Section 0208", url: "https://www.jag.navy.mil/library/instructions/JAGINST_5800.7G.pdf", isQuickLink: true },
    { title: "Military Rules of Evidence", url: "https://jsc.defense.gov/Military-Law/Current-Publications-and-Updates/" },
    { title: "MCM (Manual for Courts-Martial)", url: "https://jsc.defense.gov/Military-Law/Current-Publications-and-Updates/" },
  ],
};

const WITNESS_PROCEDURES_CA_DATA = {
  references: [
    { title: "JAGMAN Section 0207", url: "https://www.jag.navy.mil/library/instructions/JAGINST_5800.7G.pdf", isQuickLink: true },
    { title: "UCMJ Article 31 (Rights Warning)", url: "https://www.law.cornell.edu/uscode/text/10/831", isQuickLink: true },
    { title: "10 U.S.C. 1219 Warning", url: "https://www.law.cornell.edu/uscode/text/10/1219" },
  ],
};

const INVESTIGATION_REPORT_FORMAT_CA_DATA = {
  references: [
    { title: "JAGMAN Section 0208", url: "https://www.jag.navy.mil/library/instructions/JAGINST_5800.7G.pdf", isQuickLink: true },
    { title: "JAGMAN Appendix A-2 (Sample Formats)", url: "https://www.jag.navy.mil/library/instructions/JAGINST_5800.7G.pdf" },
    { title: "Navy Writer's Guide", url: "https://www.netc.navy.mil" },
  ],
};

const LINE_OF_DUTY_CA_DATA = {
  references: [
    { title: "JAGMAN Section 0209", url: "https://www.jag.navy.mil/library/instructions/JAGINST_5800.7G.pdf", isQuickLink: true },
    { title: "SECNAVINST 1770.4 (Line of Duty)", url: "https://www.secnav.navy.mil/doni/", isQuickLink: true },
    { title: "DoD Instruction 1241.01 (Reserve LOD)", url: "https://www.esd.whs.mil/Directives/issuances/dodi/" },
    { title: "MCO 5800.16 (Legal Administration)", url: "https://www.marines.mil" },
  ],
};

const DEATH_CASE_PROCEDURES_CA_DATA = {
  references: [
    { title: "JAGMAN Section 0203", url: "https://www.jag.navy.mil/library/instructions/JAGINST_5800.7G.pdf", isQuickLink: true },
    { title: "MCO 3040.4 (Casualty Assistance)", url: "https://www.marines.mil", isQuickLink: true },
    { title: "DoD Instruction 1300.18 (Casualty Notification)", url: "https://www.esd.whs.mil/Directives/issuances/dodi/" },
    { title: "SECNAVINST 1770.4 (Line of Duty)", url: "https://www.secnav.navy.mil/doni/" },
  ],
};

const INVESTIGATION_COORDINATION_DATA = {
  references: [
    { title: "JAGMAN Chapter II", url: "https://www.jag.navy.mil/library/instructions/JAGINST_5800.7G.pdf", isQuickLink: true },
    { title: "NCIS Field Offices", url: "https://www.ncis.navy.mil/Contact-Us/", isQuickLink: true },
    { title: "MCO 5580.2B (Law Enforcement Manual)", url: "https://www.marines.mil/Portals/1/MCO%205580.2B.pdf" },
  ],
};

// Commanders - Legal Data
const NJP_AUTHORITY_CA_DATA = {
  references: [
    { title: "MCO 5800.16 Vol 14", url: "https://www.marines.mil", isQuickLink: true },
    { title: "UCMJ Article 15", url: "https://www.law.cornell.edu/uscode/text/10/815", isQuickLink: true },
    { title: "MCM Part V", url: "https://jsc.defense.gov/Military-Law/Current-Publications-and-Updates/" },
  ],
};

const PUNISHMENT_LIMITS_CA_DATA = {
  references: [
    { title: "MCO 5800.16 Vol 14", url: "https://www.marines.mil", isQuickLink: true },
    { title: "UCMJ Article 15", url: "https://www.law.cornell.edu/uscode/text/10/815", isQuickLink: true },
    { title: "MCM Part V (Max Punishments)", url: "https://jsc.defense.gov/Military-Law/Current-Publications-and-Updates/" },
  ],
};

const NJP_PROCESS_CA_DATA = {
  references: [
    { title: "MCO 5800.16 Vol 14", url: "https://www.marines.mil", isQuickLink: true },
    { title: "NAVMC 10132", url: "https://www.marines.mil" },
    { title: "MCM Part V", url: "https://jsc.defense.gov/Military-Law/Current-Publications-and-Updates/" },
  ],
};

const NJP_APPEALS_CA_DATA = {
  references: [
    { title: "MCO 5800.16 Vol 14", url: "https://www.marines.mil", isQuickLink: true },
    { title: "UCMJ Article 15", url: "https://www.law.cornell.edu/uscode/text/10/815" },
    { title: "MCM Part V (Appeals)", url: "https://jsc.defense.gov/Military-Law/Current-Publications-and-Updates/" },
  ],
};

const SUMMARY_COURT_MARTIAL_CA_DATA = {
  references: [
    { title: "MCO 5800.16 Vol 16", url: "https://www.marines.mil", isQuickLink: true },
    { title: "UCMJ Article 20", url: "https://www.law.cornell.edu/uscode/text/10/820", isQuickLink: true },
    { title: "MCM (Manual for Courts-Martial)", url: "https://jsc.defense.gov/Military-Law/Current-Publications-and-Updates/" },
  ],
};

const SPECIAL_COURT_MARTIAL_CA_DATA = {
  references: [
    { title: "MCO 5800.16 Vol 16", url: "https://www.marines.mil", isQuickLink: true },
    { title: "UCMJ Article 19", url: "https://www.law.cornell.edu/uscode/text/10/819", isQuickLink: true },
    { title: "MCM (Manual for Courts-Martial)", url: "https://jsc.defense.gov/Military-Law/Current-Publications-and-Updates/" },
  ],
};

const GENERAL_COURT_MARTIAL_CA_DATA = {
  references: [
    { title: "MCO 5800.16 Vol 16", url: "https://www.marines.mil", isQuickLink: true },
    { title: "UCMJ Article 18", url: "https://www.law.cornell.edu/uscode/text/10/818", isQuickLink: true },
    { title: "MCM (Manual for Courts-Martial)", url: "https://jsc.defense.gov/Military-Law/Current-Publications-and-Updates/" },
    { title: "UCMJ Article 32", url: "https://www.law.cornell.edu/uscode/text/10/832" },
  ],
};

const DISPOSITION_OPTIONS_CA_DATA = {
  references: [
    { title: "MCO 5800.16 Vol 14", url: "https://www.marines.mil", isQuickLink: true },
    { title: "JAGMAN (JAGINST 5800.7G)", url: "https://www.jag.navy.mil/library/instructions/JAGINST_5800.7G.pdf", isQuickLink: true },
    { title: "MCM (Manual for Courts-Martial)", url: "https://jsc.defense.gov/Military-Law/Current-Publications-and-Updates/" },
  ],
};

const ADMIN_SEP_AUTHORITY_CA_DATA = {
  references: [
    { title: "MCO 1900.16 CH-3 (MARCORSEPMAN)", url: "https://www.marines.mil", isQuickLink: true },
    { title: "MILPERSMAN 1910", url: "https://www.mynavyhr.navy.mil/References/MILPERSMAN/" },
    { title: "UCMJ Article 15", url: "https://www.law.cornell.edu/uscode/text/10/815" },
  ],
};

const CHARACTERIZATION_OF_SERVICE_CA_DATA = {
  references: [
    { title: "MCO 1900.16 CH-3 (MARCORSEPMAN)", url: "https://www.marines.mil", isQuickLink: true },
    { title: "DoDI 1332.14", url: "https://www.esd.whs.mil/Directives/issuances/dodi/", isQuickLink: true },
    { title: "10 U.S.C. 1177", url: "https://www.law.cornell.edu/uscode/text/10/1177" },
  ],
};

const RELIGIOUS_ACCOMMODATION_CA_DATA = {
  references: [
    { title: "MCO 1730.9", url: "https://www.marines.mil", isQuickLink: true },
    { title: "DoDI 1300.17 (Religious Liberty)", url: "https://www.esd.whs.mil/Directives/issuances/dodi/", isQuickLink: true },
    { title: "RFRA (42 U.S.C. 2000bb)", url: "https://www.law.cornell.edu/uscode/text/42/2000bb" },
    { title: "NAVMC 10274 AA", url: "https://www.marines.mil" },
  ],
};

const REQUEST_MAST_CA_DATA = {
  references: [
    { title: "MCO 1700.23G", url: "https://www.marines.mil", isQuickLink: true },
    { title: "NAVMC 11296", url: "https://www.marines.mil", isQuickLink: true },
    { title: "10 U.S.C. 1034 (Protected Communications)", url: "https://www.law.cornell.edu/uscode/text/10/1034" },
  ],
};

const NJP_PROCEDURES_DATA = {
  references: [
    { title: "MCO 5800.16A Vol 14 (Legal Admin Manual)", url: "https://www.marines.mil/News/Publications/MCPEL/?Page=1&Title=5800.16", isQuickLink: true },
    { title: "UCMJ Article 15", url: "https://www.law.cornell.edu/uscode/text/10/815", isQuickLink: true },
    { title: "Manual for Courts-Martial Part V", url: "https://jsc.defense.gov/Military-Law/Current-Publications-and-Updates/" },
  ],
};

const SEPARATION_BASES_DATA = {
  references: [
    { title: "MCO P1900.16F (Separation Manual)", url: "https://www.marines.mil/News/Publications/MCPEL/?Page=1&Title=1900.16", isQuickLink: true },
    { title: "SECNAVINST 1920.6D (ADSEP)", url: "https://www.secnav.navy.mil/doni/SECNAV%20Manuals1/1920.6D.pdf", isQuickLink: true },
    { title: "MCO 5800.16A Vol 9 (Admin Separations)", url: "https://www.marines.mil/News/Publications/MCPEL/?Page=1&Title=5800.16" },
  ],
};

const ADSEP_DUE_PROCESS_DATA = {
  references: [
    { title: "MCO P1900.16F (Separation Manual)", url: "https://www.marines.mil/News/Publications/MCPEL/?Page=1&Title=1900.16", isQuickLink: true },
    { title: "SECNAVINST 1920.6D (ADSEP)", url: "https://www.secnav.navy.mil/doni/SECNAV%20Manuals1/1920.6D.pdf", isQuickLink: true },
    { title: "10 U.S.C. 1169 (Enlisted Separation)", url: "https://www.law.cornell.edu/uscode/text/10/1169" },
  ],
};

const APPEAL_RIGHTS_DATA = {
  references: [
    { title: "MCO 1900.16F (Marine Corps Separation Manual)", url: "https://www.marines.mil/News/Publications/MCPEL/?Page=1&Title=1900.16", isQuickLink: true },
    { title: "MCM Part V (NJP Procedures)", url: "https://jsc.defense.gov/Military-Law/Current-Publications-702/", isQuickLink: true },
    { title: "10 U.S.C. 815 (Article 15, UCMJ)", url: "https://www.law.cornell.edu/uscode/text/10/815" },
  ],
};

const ADSEP_AUTHORITY_DATA = {
  references: [
    { title: "MCO P1900.16F (Separation Manual)", url: "https://www.marines.mil/News/Publications/MCPEL/?Page=1&Title=1900.16", isQuickLink: true },
    { title: "SECNAVINST 1920.6D (ADSEP)", url: "https://www.secnav.navy.mil/doni/SECNAV%20Manuals1/1920.6D.pdf", isQuickLink: true },
    { title: "MCO 5800.16A Vol 9 (Admin Separations)", url: "https://www.marines.mil/News/Publications/MCPEL/?Page=1&Title=5800.16" },
  ],
};

// Commanders - Suicide Prevention & Force Preservation Data
const SPPO_APPOINTMENT_DATA = {
  references: [
    { title: "MCO 1720.2A (MCPPSB)", url: "https://www.marines.mil", isQuickLink: true },
    { title: "DoDI 6490.16 (DSPO)", url: "https://www.esd.whs.mil/Portals/54/Documents/DD/issuances/dodi/649016p.pdf" },
    { title: "MARADMIN 289/21", url: "https://www.marines.mil" },
  ],
};

const FORCE_PRESERVATION_COUNCIL_DATA = {
  references: [
    { title: "MCO 1720.2A (MCPPSB)", url: "https://www.marines.mil", isQuickLink: true },
    { title: "MCTFSCODESMAN (FPC Procedures)", url: "https://www.marines.mil", isQuickLink: true },
    { title: "DoDI 6490.16 (DSPO)", url: "https://www.esd.whs.mil/Portals/54/Documents/DD/issuances/dodi/649016p.pdf" },
    { title: "CIRRAS User Guide", url: "https://www.marines.mil" },
  ],
};

const CIRRAS_OVERSIGHT_DATA = {
  references: [
    { title: "CIRRAS System", url: "https://www.marines.mil", isQuickLink: true },
    { title: "MCO 1720.2A (MCPPSB)", url: "https://www.marines.mil", isQuickLink: true },
    { title: "FPC MCTFSCODESMAN", url: "https://www.marines.mil" },
    { title: "PCS Warm Handoff SOP", url: "https://www.marines.mil" },
  ],
};

const CRITICAL_STRESSORS_DATA = {
  references: [
    { title: "MCO 1720.2A (MCPPSB)", url: "https://www.marines.mil", isQuickLink: true },
    { title: "DoDSER (Annual Report)", url: "https://www.dspo.mil/", isQuickLink: true },
    { title: "VA/DoD CPG for Suicide Risk", url: "https://www.healthquality.va.gov/guidelines/MH/srb/" },
    { title: "Suicide Prevention Resource Center", url: "https://sprc.org/" },
  ],
};

const LETHAL_MEANS_SAFETY_DATA = {
  references: [
    { title: "MCO 1720.2A (MCPPSB)", url: "https://www.marines.mil", isQuickLink: true },
    { title: "Means Matter (Harvard)", url: "https://www.hsph.harvard.edu/means-matter/", isQuickLink: true },
    { title: "DoDI 6490.16 (DSPO)", url: "https://www.esd.whs.mil/Portals/54/Documents/DD/issuances/dodi/649016p.pdf" },
    { title: "AFSP Safe Messaging", url: "https://afsp.org/" },
  ],
};

const POSTVENTION_DATA = {
  references: [
    { title: "MCO 1720.2A (MCPPSB)", url: "https://www.marines.mil", isQuickLink: true },
    { title: "DoDI 6490.16 (DSPO)", url: "https://www.esd.whs.mil/Portals/54/Documents/DD/issuances/dodi/649016p.pdf", isQuickLink: true },
    { title: "AFSP After a Suicide Toolkit", url: "https://afsp.org/after-a-suicide-a-toolkit-for-schools" },
    { title: "Casualty Assistance (MCO P1300.8)", url: "https://www.marines.mil" },
  ],
};

const MFLC_PROGRAM_DATA = {
  references: [
    { title: "Military OneSource MFLC", url: "https://www.militaryonesource.mil/confidential-help/non-medical-counseling/military-and-family-life-counseling/", isQuickLink: true },
    { title: "DoDI 6490.06 (MFLC)", url: "https://www.esd.whs.mil/Portals/54/Documents/DD/issuances/dodi/649006p.pdf", isQuickLink: true },
    { title: "MCO 1754.14", url: "https://www.marines.mil" },
    { title: "MFLC Program FAQs", url: "https://www.militaryonesource.mil" },
  ],
};

const CHAPLAIN_SUPPORT_DATA = {
  references: [
    { title: "SECNAVINST 1730.7E (RMP)", url: "https://www.secnav.navy.mil/doni/Directives/01000%20Military%20Personnel%20Support/01-700%20Morale,%20Community%20and%20Religious%20Services/1730.7E.pdf", isQuickLink: true },
    { title: "10 U.S.C. 1789 (Privileged Comms)", url: "https://www.law.cornell.edu/uscode/text/10/1789", isQuickLink: true },
    { title: "MCO 1730.6F", url: "https://www.marines.mil" },
    { title: "MRE 503 (Priest-Penitent Privilege)", url: "https://jsc.defense.gov/" },
  ],
};

const COSC_OSCAR_DATA = {
  references: [
    { title: "MCO 5351.1 (COSC)", url: "https://www.marines.mil", isQuickLink: true },
    { title: "OSCAR Program Guide", url: "https://www.marines.mil", isQuickLink: true },
    { title: "Combat Stress Control (ATP 4-02.8)", url: "https://armypubs.army.mil/ProductMaps/PubForm/Details.aspx?PUB_ID=1003585" },
    { title: "Stress Continuum Model", url: "https://www.marines.mil" },
  ],
};

// Commanders - Training & Readiness Data
const DRRS_MC_OVERVIEW_DATA = {
  references: [
    { title: "MCO 3000.13 (Readiness Reporting)", url: "https://www.marines.mil", isQuickLink: true },
    { title: "DRRS-MC User Manual", url: "https://www.marines.mil", isQuickLink: true },
    { title: "COPA (Commanders Personnel Analysis)", url: "https://www2.manpower.usmc.mil/copa/", isQuickLink: true },
    { title: "MCO 1553.3B (Unit Training)", url: "https://www.marines.mil" },
    { title: "GCSS-MC Portal", url: "https://gcss-mc.marines.mil" },
  ],
};

const METL_DEVELOPMENT_DATA = {
  references: [
    { title: "MCO 3500.110 (METL Development)", url: "https://www.marines.mil", isQuickLink: true },
    { title: "MCO 1553.3B (Unit Training)", url: "https://www.marines.mil", isQuickLink: true },
    { title: "NAVMC 3500.14D (T&R Manual Oversight)", url: "https://www.marines.mil" },
    { title: "MCTIMS Portal", url: "https://www.marines.mil" },
  ],
};

const C_LEVEL_ASSESSMENT_DATA = {
  references: [
    { title: "MCO 3000.13 (Readiness Reporting)", url: "https://www.marines.mil", isQuickLink: true },
    { title: "DRRS-MC User Manual", url: "https://www.marines.mil", isQuickLink: true },
    { title: "Joint Readiness Manual", url: "https://www.jcs.mil" },
    { title: "Chairman's Readiness System", url: "https://www.jcs.mil" },
  ],
};

const READINESS_BOARD_DATA = {
  references: [
    { title: "MCO 3000.13 (Readiness Reporting)", url: "https://www.marines.mil", isQuickLink: true },
    { title: "COPA (Commanders Personnel Analysis)", url: "https://www2.manpower.usmc.mil/copa/", isQuickLink: true },
    { title: "Unit SOP Template", url: "https://www.marines.mil" },
    { title: "DRRS-MC User Manual", url: "https://www.marines.mil" },
    { title: "Staff Officer Handbook", url: "https://www.marines.mil" },
  ],
};

const T_LEVEL_REPORTING_DATA = {
  references: [
    { title: "MCO 3000.13 (Readiness Reporting)", url: "https://www.marines.mil", isQuickLink: true },
    { title: "MCO 1553.3B (Unit Training)", url: "https://www.marines.mil", isQuickLink: true },
    { title: "MCTIMS Portal", url: "https://www.marines.mil" },
    { title: "T&R Manual", url: "https://www.marines.mil" },
  ],
};

const P_LEVEL_REPORTING_DATA = {
  references: [
    { title: "MCO 3000.13 (Readiness Reporting)", url: "https://www.marines.mil", isQuickLink: true },
    { title: "COPA (Commanders Personnel Analysis)", url: "https://www2.manpower.usmc.mil/copa/", isQuickLink: true },
    { title: "MCTFS User Guide", url: "https://www.marines.mil" },
    { title: "Unit T/O", url: "https://www.marines.mil" },
    { title: "DRRS-MC Manual", url: "https://www.marines.mil" },
  ],
};

const S_LEVEL_REPORTING_DATA = {
  references: [
    { title: "MCO 3000.13 (Readiness Reporting)", url: "https://www.marines.mil", isQuickLink: true },
    { title: "GCSS-MC Portal", url: "https://gcss-mc.marines.mil", isQuickLink: true },
    { title: "Unit T/E", url: "https://www.marines.mil" },
    { title: "Supply Management Manual", url: "https://www.marines.mil" },
  ],
};

const R_LEVEL_REPORTING_DATA = {
  references: [
    { title: "MCO 3000.13 (Readiness Reporting)", url: "https://www.marines.mil", isQuickLink: true },
    { title: "DRRS-MC User Manual", url: "https://www.marines.mil", isQuickLink: true },
    { title: "Chairman's Readiness System", url: "https://www.jcs.mil" },
    { title: "Unit Readiness SOP", url: "https://www.marines.mil" },
  ],
};

const METL_ANNUAL_REVIEW_DATA = {
  references: [
    { title: "MCO 3500.110 (METL Development)", url: "https://www.marines.mil", isQuickLink: true },
    { title: "MCO 1553.3B (Unit Training)", url: "https://www.marines.mil", isQuickLink: true },
    { title: "MCTIMS Portal", url: "https://www.marines.mil" },
    { title: "Training Resource Model", url: "https://www.marines.mil" },
  ],
};

// Commanders - Equal Opportunity Data
const EO_POLICY_STATEMENT_DATA = {
  references: [
    { title: "MCO 5354.1G (PAC Prevention)", url: "https://www.marines.mil", isQuickLink: true },
    { title: "DoDI 1350.02 (EO Program)", url: "https://www.esd.whs.mil/Portals/54/Documents/DD/issuances/dodi/135002p.pdf", isQuickLink: true },
    { title: "EO Policy Template", url: "https://www.marines.mil" },
    { title: "Command Climate Assessment Guide", url: "https://www.marines.mil" },
  ],
};

const EO_REPRESENTATIVE_DATA = {
  references: [
    { title: "MCO 5354.1G (PAC Prevention)", url: "https://www.marines.mil", isQuickLink: true },
    { title: "NAVMC 11432 (Appointment Template)", url: "https://www.marines.mil", isQuickLink: true },
    { title: "EOR Training Handbook", url: "https://www.marines.mil" },
    { title: "DoDI 1350.02 (EO Program)", url: "https://www.esd.whs.mil/Portals/54/Documents/DD/issuances/dodi/135002p.pdf" },
  ],
};

const EO_COMPLAINT_PROCESS_DATA = {
  references: [
    { title: "MCO 5354.1G (PAC Prevention)", url: "https://www.marines.mil", isQuickLink: true },
    { title: "NAVMC 11512 (Complaint Form)", url: "https://www.marines.mil", isQuickLink: true },
    { title: "DoDI 1350.02 (EO Program)", url: "https://www.esd.whs.mil/Portals/54/Documents/DD/issuances/dodi/135002p.pdf" },
    { title: "Installation EOA Contact", url: "https://www.marines.mil" },
  ],
};

const EO_INVESTIGATION_DATA = {
  references: [
    { title: "MCO 5354.1G (PAC Prevention)", url: "https://www.marines.mil", isQuickLink: true },
    { title: "MCO 5800.16 (LSAM)", url: "https://www.marines.mil", isQuickLink: true },
    { title: "NAVMC 11512 (Complaint Form)", url: "https://www.marines.mil" },
    { title: "IO Appointment Template", url: "https://www.marines.mil" },
  ],
};

const EO_CLIMATE_ASSESSMENT_DATA = {
  references: [
    { title: "MCO 5354.1G (PAC Prevention)", url: "https://www.marines.mil/News/Publications/MCPEL/?Page=1&Title=5354.1", isQuickLink: true },
    { title: "DoDI 1350.02 (DOD Military EO Program)", url: "https://www.esd.whs.mil/Portals/54/Documents/DD/issuances/dodi/135002p.pdf", isQuickLink: true },
    { title: "DEOCS Portal", url: "https://www.deocs.net" },
  ],
};

const EO_RETALIATION_PREVENTION_DATA = {
  references: [
    { title: "MCO 5354.1G (PAC Prevention)", url: "https://www.marines.mil/News/Publications/MCPEL/?Page=1&Title=5354.1", isQuickLink: true },
    { title: "UCMJ Article 132 (Retaliation)", url: "https://www.marines.mil", isQuickLink: true },
    { title: "UCMJ Article 93 (Cruelty and Maltreatment)", url: "https://www.marines.mil" },
  ],
};

// Commanders - Family Readiness & Casualty Affairs Data
const UPFRP_COMMAND_ROLES_DATA = {
  references: [
    { title: "MCO 1754.9A (UPFRP)", url: "https://www.marines.mil/News/Publications/MCPEL/?Page=1&Title=1754.9", isQuickLink: true },
  ],
};

const DRC_OVERSIGHT_DATA = {
  references: [
    { title: "MCO 1754.9A (UPFRP)", url: "https://www.marines.mil/News/Publications/MCPEL/?Page=1&Title=1754.9", isQuickLink: true },
    { title: "NAVMC 11654 (Appointment Letter Template)", url: "https://www.marines.mil" },
  ],
};

const LIMDU_COORDINATOR_DATA = {
  references: [
    { title: "MCO 1900.16 (MARCORSEPMAN)", url: "https://www.marines.mil/News/Publications/MCPEL/?Page=1&Title=1900.16", isQuickLink: true },
    { title: "SECNAVINST 1850.4F (Disability Evaluation System)", url: "https://www.secnav.navy.mil", isQuickLink: true },
  ],
};

const CACO_OVERSIGHT_DATA = {
  references: [
    { title: "MCO 3040.4 (Casualty Assistance Program)", url: "https://www.marines.mil/News/Publications/MCPEL/?Page=1&Title=3040.4", isQuickLink: true },
    { title: "NAVMC 11717 (CACO Checklist)", url: "https://www.marines.mil" },
  ],
};

const ITO_AUTHORITY_DATA = {
  references: [
    { title: "MCO 3040.4 (Casualty Assistance Program)", url: "https://www.marines.mil/News/Publications/MCPEL/?Page=1&Title=3040.4", isQuickLink: true },
    { title: "Joint Travel Regulations (JTR)", url: "https://www.travel.dod.mil/Policy-Regulations/Joint-Travel-Regulations/", isQuickLink: true },
  ],
};

const RCC_REFERRAL_DATA = {
  references: [
    { title: "MCO 6310.1 (WWR Operations)", url: "https://www.marines.mil/News/Publications/MCPEL/?Page=1&Title=6310.1", isQuickLink: true },
    { title: "MCO 1754.11 (FAP/Clinical)", url: "https://www.marines.mil" },
    { title: "Wounded Warrior Regiment", url: "https://www.woundedwarriorregiment.org" },
  ],
};

const WW_BENEFITS_DATA = {
  references: [
    { title: "MCO 3040.4 (Casualty Assistance)", url: "https://www.marines.mil/News/Publications/MCPEL/?Page=1&Title=3040.4", isQuickLink: true },
    { title: "MCO 7220.52 (PAC)", url: "https://www.marines.mil/News/Publications/MCPEL/?Page=1&Title=7220.52", isQuickLink: true },
    { title: "SECNAVINST 1770.5 (SCAADL)", url: "https://www.secnav.navy.mil" },
    { title: "TSGLI Information", url: "https://www.benefits.va.gov/insurance/tsgli.asp" },
  ],
};

const FAP_OVERVIEW_DATA = {
  references: [
    { title: "MCO 1754.11 (FAP)", url: "https://www.marines.mil/News/Publications/MCPEL/?Page=1&Title=1754.11", isQuickLink: true },
    { title: "SECNAVINST 1752.3B (FAP)", url: "https://www.secnav.navy.mil", isQuickLink: true },
  ],
};

const DOMESTIC_ABUSE_RESPONSE_DATA = {
  references: [
    { title: "MCO 1754.11 (FAP)", url: "https://www.marines.mil/News/Publications/MCPEL/?Page=1&Title=1754.11", isQuickLink: true },
    { title: "DD Form 2873 (MPO)", url: "https://www.esd.whs.mil/Directives/forms/dd2500_2999/" },
  ],
};

const CHILD_ABUSE_RESPONSE_DATA = {
  references: [
    { title: "MCO 1754.11 (FAP)", url: "https://www.marines.mil/News/Publications/MCPEL/?Page=1&Title=1754.11", isQuickLink: true },
    { title: "SECNAVINST 1752.3B (FAP)", url: "https://www.secnav.navy.mil", isQuickLink: true },
  ],
};

const UPFRP_SOP_DATA = {
  references: [
    { title: "MCO 1754.9A (UPFRP)", url: "https://www.marines.mil/News/Publications/MCPEL/?Page=1&Title=1754.9", isQuickLink: true },
  ],
};

const NOK_NOTIFICATION_DATA = {
  references: [
    { title: "MCO 3040.4 (Casualty Assistance)", url: "https://www.marines.mil/News/Publications/MCPEL/?Page=1&Title=3040.4", isQuickLink: true },
  ],
};

const PCR_REPORTING_DATA = {
  references: [
    { title: "MCO 3040.4 (Casualty Assistance)", url: "https://www.marines.mil/News/Publications/MCPEL/?Page=1&Title=3040.4", isQuickLink: true },
    { title: "MCO P1070.12K (IRAM)", url: "https://www.marines.mil", isQuickLink: true },
  ],
};

// Commanders - Fiscal & Property Accountability Data
const FUND_CONTROL_TRAINING_DATA = {
  references: [
    { title: "MCO 7300.21B (Financial Management SOP)", url: "https://www.marines.mil/News/Publications/MCPEL/?Page=1&Title=7300.21", isQuickLink: true },
    { title: "31 U.S. Code § 1341 (Anti-Deficiency Act)", url: "https://www.law.cornell.edu/uscode/text/31/1341", isQuickLink: true },
  ],
};

const BUDGET_EXECUTION_DATA = {
  references: [
    { title: "MCO 7300.21B (Financial Management SOP)", url: "https://www.marines.mil/News/Publications/MCPEL/?Page=1&Title=7300.21", isQuickLink: true },
    { title: "NAVMC 4400.150 (Consumer-Level Supply)", url: "https://www.marines.mil", isQuickLink: true },
  ],
};

const STATUS_OF_FUNDS_DATA = {
  references: [
    { title: "MCO 7300.21B (Financial Management SOP)", url: "https://www.marines.mil/News/Publications/MCPEL/?Page=1&Title=7300.21", isQuickLink: true },
    { title: "DoD FMR Volume 3", url: "https://comptroller.defense.gov/FMR/" },
  ],
};

const ULO_VALIDATION_DATA = {
  references: [
    { title: "MCO 7300.21B (Financial Management SOP)", url: "https://www.marines.mil/News/Publications/MCPEL/?Page=1&Title=7300.21", isQuickLink: true },
    { title: "DoD FMR Volume 3, Chapter 8", url: "https://comptroller.defense.gov/FMR/", isQuickLink: true },
  ],
};

const SUPPLY_OFFICER_APPOINTMENT_DATA = {
  references: [
    { title: "MCO 4400.201 (MCSLSM)", url: "https://www.marines.mil/News/Publications/MCPEL/?Page=1&Title=4400.201", isQuickLink: true },
    { title: "NAVMC 4400.150 (Consumer-Level Supply)", url: "https://www.marines.mil", isQuickLink: true },
    { title: "DD Form 577", url: "https://www.esd.whs.mil/Directives/forms/dd0500_0999/" },
  ],
};

const ACCOUNTABLE_OFFICER_DATA = {
  references: [
    { title: "MCO 4400.201 (MCSLSM)", url: "https://www.marines.mil/News/Publications/MCPEL/?Page=1&Title=4400.201", isQuickLink: true },
    { title: "DoD FMR Volume 14 (Administrative Control of Funds)", url: "https://comptroller.defense.gov/FMR/" },
  ],
};

const UAC_PREVENTION_DATA = {
  references: [
    { title: "MCO 7300.21B (Financial Management SOP)", url: "https://www.marines.mil/News/Publications/MCPEL/?Page=1&Title=7300.21", isQuickLink: true },
    { title: "FAR 1.602-3 (Ratification of UACs)", url: "https://www.acquisition.gov/far/1.602-3" },
  ],
};

const GTCC_OVERSIGHT_DATA = {
  references: [
    { title: "MCO 4600.40B (GTCC Program)", url: "https://www.marines.mil/News/Publications/MCPEL/?Page=1&Title=4600.40", isQuickLink: true },
    { title: "DoD FMR Volume 9 (Travel Policy)", url: "https://comptroller.defense.gov/FMR/" },
    { title: "Citi GTCC Portal", url: "https://home.cards.citidirect.com/" },
  ],
};

const CERTIFICATE_OF_RELIEF_FISCAL_DATA = {
  references: [
    { title: "MCO 4400.201 (MCSLSM)", url: "https://www.marines.mil/News/Publications/MCPEL/?Page=1&Title=4400.201", isQuickLink: true },
    { title: "NAVMC 4400.150 (Consumer-Level Supply)", url: "https://www.marines.mil" },
  ],
};

// Commanders - Command Climate & Culture Programs Data
const DEOCS_REQUIREMENTS_DATA = {
  references: [
    { title: "MCO 5354.1G (PAC Prevention)", url: "https://www.marines.mil", isQuickLink: true },
    { title: "DEOCS Portal", url: "https://www.deocs.net", isQuickLink: true },
    { title: "DoDI 1350.02 (EO Program)", url: "https://www.esd.whs.mil/Portals/54/Documents/DD/issuances/dodi/135002p.pdf" },
    { title: "DEOCS Action Plan Template", url: "https://www.marines.mil" },
  ],
};

const PAC_PROGRAM_OVERVIEW_DATA = {
  references: [
    { title: "MCO 5354.1G (PAC Prevention)", url: "https://www.marines.mil", isQuickLink: true },
    { title: "NAVMC 11512 (Complaint Form)", url: "https://www.marines.mil", isQuickLink: true },
    { title: "Article 92 UCMJ", url: "https://www.ucmj.us/article-92" },
    { title: "PAC Training Resources", url: "https://www.marines.mil" },
  ],
};

const PAC_POLICY_STATEMENT_DATA = {
  references: [
    { title: "MCO 5354.1G (PAC Prevention)", url: "https://www.marines.mil", isQuickLink: true },
    { title: "NAVMC 11432 (PAC Policy Template)", url: "https://www.marines.mil", isQuickLink: true },
    { title: "IG Checklist - PAC Policy", url: "https://www.marines.mil" },
    { title: "Command Board Requirements", url: "https://www.marines.mil" },
  ],
};

const UPFRP_SOP_REQUIREMENT_DATA = {
  references: [
    { title: "MCO 1754.9A (UPFRP)", url: "https://www.marines.mil", isQuickLink: true },
    { title: "MCO 5211.2 (Privacy Act)", url: "https://www.marines.mil", isQuickLink: true },
    { title: "UPFRP SOP Template", url: "https://www.marines.mil" },
    { title: "Mass Communication Tool (MCT)", url: "https://www.marines.mil" },
  ],
};

const CLIMATE_SURVEYS_DATA = {
  references: [
    { title: "MCO 5100.29C (Safety Management System)", url: "https://www.marines.mil/News/Publications/MCPEL/?Page=1&Title=5100.29", isQuickLink: true },
    { title: "MCO 3750.6S (Aviation Safety)", url: "https://www.marines.mil/News/Publications/MCPEL/?Page=1&Title=3750.6", isQuickLink: true },
    { title: "DEOCS Portal", url: "https://www.deocs.net" },
  ],
};

const COMMAND_TEAM_TRAINING_CLIMATE_DATA = {
  references: [
    { title: "MCO 1500.63 (Command Team Training)", url: "https://www.marines.mil/News/Publications/MCPEL/?Page=1&Title=1500.63", isQuickLink: true },
    { title: "MCO 1754.9A (UPFRP)", url: "https://www.marines.mil/News/Publications/MCPEL/?Page=1&Title=1754.9", isQuickLink: true },
    { title: "L.I.N.K.S. Program", url: "https://www.usmc-mccs.org/services/family/links/" },
  ],
};

const HAZING_PREVENTION_DATA = {
  references: [
    { title: "MCO 5354.1G (PAC Order)", url: "https://www.marines.mil/News/Publications/MCPEL/?Page=1&Title=5354.1", isQuickLink: true },
    { title: "UCMJ Article 92", url: "https://www.law.cornell.edu/uscode/text/10/892", isQuickLink: true },
    { title: "MARADMIN on Hazing Prevention", url: "https://www.marines.mil/News/Messages/MARADMINS/" },
  ],
};

const HARASSMENT_RESPONSE_DATA = {
  references: [
    { title: "MCO 5354.1G (PAC Order)", url: "https://www.marines.mil/News/Publications/MCPEL/?Page=1&Title=5354.1", isQuickLink: true },
    { title: "NAVMC 11512 (Complaint Form)", url: "https://www.marines.mil", isQuickLink: true },
    { title: "EEO Complaint Portal", url: "https://www.esd.whs.mil/DD/EEO/" },
  ],
};

const RETALIATION_PREVENTION_DATA = {
  references: [
    { title: "MCO 5354.1G (PAC Order)", url: "https://www.marines.mil/News/Publications/MCPEL/?Page=1&Title=5354.1", isQuickLink: true },
    { title: "UCMJ Article 132 (Retaliation)", url: "https://www.law.cornell.edu/uscode/text/10/932", isQuickLink: true },
    { title: "10 U.S.C. 1034 (Protected Communications)", url: "https://www.law.cornell.edu/uscode/text/10/1034" },
  ],
};

const SAFETY_POLICY_STATEMENT_DATA = {
  references: [
    { title: "MCO 5100.29C (Safety Management System)", url: "https://www.marines.mil/News/Publications/MCPEL/?Page=1&Title=5100.29", isQuickLink: true },
    { title: "MCO 3750.6S (Aviation Safety)", url: "https://www.marines.mil/News/Publications/MCPEL/?Page=1&Title=3750.6" },
    { title: "Naval Safety Command", url: "https://navalsafetycommand.navy.mil/" },
  ],
};

const SAPR_POLICY_STATEMENT_DATA = {
  references: [
    { title: "MCO 1752.5C (SAPR Program)", url: "https://www.marines.mil/News/Publications/MCPEL/?Page=1&Title=1752.5", isQuickLink: true },
    { title: "DOD Safe Helpline", url: "https://safehelpline.org/", isQuickLink: true },
    { title: "DoDI 6495.02 (SAPR Program)", url: "https://www.esd.whs.mil/Portals/54/Documents/DD/issuances/dodi/649502p.pdf" },
  ],
};

// Commanders - Safety & Risk Management Data
const SAFETY_POLICY_DETAIL_DATA = {
  references: [
    { title: "MCO 5100.29C (Safety Management)", url: "https://www.marines.mil/News/Publications/MCPEL/?Page=1&Title=5100.29", isQuickLink: true },
    { title: "MCO 5100.19F (Occupational Safety)", url: "https://www.marines.mil/News/Publications/MCPEL/?Page=1&Title=5100.19", isQuickLink: true },
    { title: "NAVMC 3500.27 (Safety & ORM)", url: "https://www.marines.mil" },
  ],
};

const GROUND_SAFETY_DATA = {
  references: [
    { title: "MCO 5100.29C (Safety Management)", url: "https://www.marines.mil/News/Publications/MCPEL/?Page=1&Title=5100.29", isQuickLink: true },
    { title: "MCO 5100.19F (Occupational Safety)", url: "https://www.marines.mil/News/Publications/MCPEL/?Page=1&Title=5100.19", isQuickLink: true },
    { title: "NAVMC 11401 (Hazard Report)", url: "https://www.marines.mil" },
  ],
};

const MOTOR_VEHICLE_SAFETY_DATA = {
  references: [
    { title: "MCO 5100.29C Vol 3 (PMV Safety)", url: "https://www.marines.mil/News/Publications/MCPEL/?Page=1&Title=5100.29", isQuickLink: true },
    { title: "TRiPS (Travel Risk Planning)", url: "https://trips.safety.army.mil/", isQuickLink: true },
    { title: "Motorcycle Safety Foundation", url: "https://www.msf-usa.org/" },
  ],
};

const ORM_INTEGRATION_DATA = {
  references: [
    { title: "MCO 5100.29C Vol 2 (ORM)", url: "https://www.marines.mil/News/Publications/MCPEL/?Page=1&Title=5100.29", isQuickLink: true },
    { title: "NAVMC 3500.27 (Safety & ORM)", url: "https://www.marines.mil", isQuickLink: true },
    { title: "Risk Assessment Worksheet", url: "https://www.marines.mil" },
  ],
};

const MISHAP_REPORTING_DATA = {
  references: [
    { title: "MCO 5100.29C (Safety Management)", url: "https://www.marines.mil/News/Publications/MCPEL/?Page=1&Title=5100.29", isQuickLink: true },
    { title: "OPNAVINST 3750.6S (Aviation Safety)", url: "https://www.secnav.navy.mil/doni/", isQuickLink: true },
    { title: "RMI System", url: "https://www.marines.mil" },
  ],
};

const PRE_MISHAP_DRILLS_DATA = {
  references: [
    { title: "MCO 5100.29C (Safety Management)", url: "https://www.marines.mil/News/Publications/MCPEL/?Page=1&Title=5100.29", isQuickLink: true },
    { title: "MCO 3040.4 (Casualty Assistance)", url: "https://www.marines.mil/News/Publications/MCPEL/?Page=1&Title=3040.4", isQuickLink: true },
    { title: "Installation EOC SOP", url: "https://www.marines.mil" },
  ],
};

const SAFETY_CLIMATE_SURVEY_DATA = {
  references: [
    { title: "MCO 5100.29C (Safety Management)", url: "https://www.marines.mil/News/Publications/MCPEL/?Page=1&Title=5100.29", isQuickLink: true },
    { title: "MCAS Safety Survey", url: "https://www.marines.mil", isQuickLink: true },
    { title: "Ground Safety Survey Tool", url: "https://www.marines.mil" },
  ],
};

const FLIGHT_SCHEDULE_APPROVAL_DATA = {
  references: [
    { title: "OPNAVINST 3750.6S (Aviation Safety)", url: "https://www.secnav.navy.mil/doni/", isQuickLink: true },
    { title: "NAVAIR 00-80T-105 (Aviation Training)", url: "https://www.marines.mil", isQuickLink: true },
    { title: "Squadron NATOPS SOP", url: "https://www.marines.mil" },
  ],
};

const MISHAP_INVESTIGATION_DATA = {
  references: [
    { title: "MCO 5100.29C (Safety Management)", url: "https://www.marines.mil/News/Publications/MCPEL/?Page=1&Title=5100.29", isQuickLink: true },
    { title: "JAGINST 5800.7 (JAGMAN)", url: "https://www.jag.navy.mil/library/instructions.htm", isQuickLink: true },
    { title: "OPNAVINST 3750.6S (Naval Aviation Safety)", url: "https://www.secnav.navy.mil/doni/" },
  ],
};

const DOSS_RELATIONSHIP_DATA = {
  references: [
    { title: "OPNAVINST 3750.6S (Aviation Safety)", url: "https://www.secnav.navy.mil/doni/", isQuickLink: true },
    { title: "CNAF M-3710.7 (NATOPS)", url: "https://www.cnaf.navy.mil/", isQuickLink: true },
    { title: "Unit NATOPS SOP", url: "https://www.marines.mil" },
  ],
};

// Commanders - Substance Abuse & Urinalysis Data
const INSPECTION_TESTING_DATA = {
  references: [
    { title: "MCO 5300.17A (Substance Abuse)", url: "https://www.marines.mil/News/Publications/MCPEL/?Page=1&Title=5300.17", isQuickLink: true },
    { title: "MILPERSMAN 1910-146", url: "https://www.mynavyhr.navy.mil/References/MILPERSMAN/", isQuickLink: true },
    { title: "MRE 313 (Inspections)", url: "https://jsc.defense.gov/Military-Law/Current-Publications-Executive-Orders/" },
  ],
};

const SUBSTANCE_ADMIN_ACTIONS_DATA = {
  references: [
    { title: "MCO 5300.17A (Substance Abuse)", url: "https://www.marines.mil/News/Publications/MCPEL/?Page=1&Title=5300.17", isQuickLink: true },
    { title: "MARCORSEPMAN", url: "https://www.marines.mil/News/Publications/MCPEL/?Page=1&Title=1900.16", isQuickLink: true },
    { title: "MCM Article 112a", url: "https://jsc.defense.gov/Military-Law/Current-Publications-Executive-Orders/" },
  ],
};

const UUC_APPOINTMENT_DATA = {
  references: [
    { title: "MCO 5300.17A (Substance Abuse)", url: "https://www.marines.mil/News/Publications/MCPEL/?Page=1&Title=5300.17", isQuickLink: true },
    { title: "NAVMC 2795 (Drug Testing Program)", url: "https://www.marines.mil/", isQuickLink: true },
    { title: "Drug Demand Reduction Program Manual", url: "https://www.marines.mil/" },
  ],
};

const TESTING_REQUIREMENTS_DATA = {
  references: [
    { title: "MCO 5300.17A (Substance Abuse)", url: "https://www.marines.mil/News/Publications/MCPEL/?Page=1&Title=5300.17", isQuickLink: true },
    { title: "DoDI 1010.01 (Military Drug Testing)", url: "https://www.esd.whs.mil/Directives/issuances/dodi/", isQuickLink: true },
    { title: "MRE 313 (Inspections)", url: "https://jsc.defense.gov/Military-Law/Current-Publications-Executive-Orders/" },
  ],
};

const POSITIVE_RESULT_PROCEDURES_DATA = {
  references: [
    { title: "MCO 5300.17A (Substance Abuse)", url: "https://www.marines.mil/News/Publications/MCPEL/?Page=1&Title=5300.17", isQuickLink: true },
    { title: "MARCORSEPMAN", url: "https://www.marines.mil/News/Publications/MCPEL/?Page=1&Title=1900.16", isQuickLink: true },
    { title: "MCM Article 31b", url: "https://jsc.defense.gov/Military-Law/Current-Publications-Executive-Orders/" },
  ],
};

const TREATMENT_REFERRAL_DATA = {
  references: [
    { title: "MCO 5300.17A (Substance Abuse)", url: "https://www.marines.mil/News/Publications/MCPEL/?Page=1&Title=5300.17", isQuickLink: true },
    { title: "SACO Program Manual", url: "https://www.marines.mil/", isQuickLink: true },
    { title: "BUMED Instruction 6320.87", url: "https://www.med.navy.mil/" },
  ],
};

// Commanders - SAPR Data
const EIGHT_DAY_REPORT_DATA = {
  references: [
    { title: "MCO 1752.5C (SAPR Program)", url: "https://www.marines.mil/News/Publications/MCPEL/?Page=1&Title=1752.5", isQuickLink: true },
    { title: "DoDI 6495.02", url: "https://www.esd.whs.mil/Directives/issuances/dodi/", isQuickLink: true },
    { title: "DD Form 2910", url: "https://www.esd.whs.mil/Directives/forms/" },
  ],
};

const EXPEDITED_TRANSFER_DATA = {
  references: [
    { title: "MCO 1752.5C (SAPR Program)", url: "https://www.marines.mil/News/Publications/MCPEL/?Page=1&Title=1752.5", isQuickLink: true },
    { title: "MARADMIN 439/21", url: "https://www.marines.mil/News/Messages/MARADMINS/", isQuickLink: true },
    { title: "DoDI 6495.02", url: "https://www.esd.whs.mil/Directives/issuances/dodi/" },
  ],
};

const HRRT_DATA = {
  references: [
    { title: "MCO 1752.5C (SAPR Program)", url: "https://www.marines.mil/News/Publications/MCPEL/?Page=1&Title=1752.5", isQuickLink: true },
    { title: "High Risk Assessment Tool", url: "https://www.marines.mil", isQuickLink: true },
    { title: "DoDI 6495.02", url: "https://www.esd.whs.mil/Directives/issuances/dodi/" },
  ],
};

const SAPR_POLICY_POSTING_DATA = {
  references: [
    { title: "MCO 1752.5C (SAPR Program)", url: "https://www.marines.mil/News/Publications/MCPEL/?Page=1&Title=1752.5", isQuickLink: true },
    { title: "DoDI 6495.02", url: "https://www.esd.whs.mil/Directives/issuances/dodi/", isQuickLink: true },
    { title: "DoD Safe Helpline", url: "https://safehelpline.org/" },
  ],
};

const SAPR_REPORTING_TYPES_DATA = {
  references: [
    { title: "MCO 1752.5C (SAPR Program)", url: "https://www.marines.mil/News/Publications/MCPEL/?Page=1&Title=1752.5", isQuickLink: true },
    { title: "DD Form 2910 (Victim Reporting)", url: "https://www.esd.whs.mil/Directives/forms/", isQuickLink: true },
    { title: "DoDI 6495.02", url: "https://www.esd.whs.mil/Directives/issuances/dodi/" },
  ],
};

const SARC_COORDINATION_DATA = {
  references: [
    { title: "MCO 1752.5C (SAPR Program)", url: "https://www.marines.mil/News/Publications/MCPEL/?Page=1&Title=1752.5", isQuickLink: true },
    { title: "DoDI 6495.02", url: "https://www.esd.whs.mil/Directives/issuances/dodi/", isQuickLink: true },
    { title: "DoD Safe Helpline", url: "https://safehelpline.org/" },
  ],
};

const SAPR_VA_APPOINTMENT_DATA = {
  references: [
    { title: "MCO 1752.5C (SAPR Program)", url: "https://www.marines.mil/News/Publications/MCPEL/?Page=1&Title=1752.5", isQuickLink: true },
    { title: "D-SAACP Certification Program", url: "https://www.dsaacp.org/", isQuickLink: true },
    { title: "DoDI 6495.02", url: "https://www.esd.whs.mil/Directives/issuances/dodi/" },
  ],
};

const CMG_PARTICIPATION_DATA = {
  references: [
    { title: "MCO 1752.5C (SAPR Program)", url: "https://www.marines.mil/News/Publications/MCPEL/?Page=1&Title=1752.5", isQuickLink: true },
    { title: "DoDI 6495.02", url: "https://www.esd.whs.mil/Directives/issuances/dodi/", isQuickLink: true },
    { title: "CMG Charter Template", url: "https://www.marines.mil" },
  ],
};

const MPO_SAPR_DATA = {
  references: [
    { title: "MCO 1752.5C (SAPR Program)", url: "https://www.marines.mil/News/Publications/MCPEL/?Page=1&Title=1752.5", isQuickLink: true },
    { title: "DD Form 2873 (MPO)", url: "https://www.esd.whs.mil/Directives/forms/", isQuickLink: true },
    { title: "DoDI 6495.02", url: "https://www.esd.whs.mil/Directives/issuances/dodi/" },
  ],
};

const SAPR_RETALIATION_DATA = {
  references: [
    { title: "MCO 1752.5C (SAPR Program)", url: "https://www.marines.mil/News/Publications/MCPEL/?Page=1&Title=1752.5", isQuickLink: true },
    { title: "DoDI 6495.02", url: "https://www.esd.whs.mil/Directives/issuances/dodi/", isQuickLink: true },
    { title: "Retaliation Prevention Guidance", url: "https://www.sapr.mil" },
  ],
};

// Commanders - Inspector General & Inspections Data
const CIP_OVERVIEW_DATA = {
  references: [
    { title: "MCO 5040.6H (Inspections Program)", url: "https://www.marines.mil/News/Publications/MCPEL/?Page=1&Title=5040.6", isQuickLink: true },
    { title: "IGMC Functional Area Checklists", url: "https://www.hqmc.marines.mil/igmc/", isQuickLink: true },
    { title: "NAVMC 5040.1 (IG Checklist User Guide)", url: "https://www.marines.mil/News/Publications/MCPEL/?Page=1&Title=5040.1" },
  ],
};

const CGIP_PREPARATION_DATA = {
  references: [
    { title: "MCO 5040.6H (Inspections Program)", url: "https://www.marines.mil/News/Publications/MCPEL/?Page=1&Title=5040.6", isQuickLink: true },
    { title: "IGMC Website", url: "https://www.hqmc.marines.mil/igmc/", isQuickLink: true },
    { title: "Local MSC CGIP SOPs", url: "https://www.marines.mil" },
  ],
};

const IGMC_FUNCTIONAL_AREAS_DATA = {
  references: [
    { title: "NAVMC 5040.1 (IG Checklist User Guide)", url: "https://www.marines.mil/News/Publications/MCPEL/?Page=1&Title=5040.1", isQuickLink: true },
    { title: "IGMC Functional Area Checklists", url: "https://www.hqmc.marines.mil/igmc/", isQuickLink: true },
    { title: "MCO 5040.6H (Inspections Program)", url: "https://www.marines.mil/News/Publications/MCPEL/?Page=1&Title=5040.6" },
  ],
};

const POAM_MANAGEMENT_DATA = {
  references: [
    { title: "MCO 5040.6H (Inspections Program)", url: "https://www.marines.mil/News/Publications/MCPEL/?Page=1&Title=5040.6", isQuickLink: true },
    { title: "NAVMC 11333 (POA&M Template)", url: "https://www.marines.mil", isQuickLink: true },
    { title: "MCO 5210.11F (Records Management)", url: "https://www.marines.mil/News/Publications/MCPEL/?Page=1&Title=5210.11" },
  ],
};

const INTERNAL_INSPECTIONS_DATA = {
  references: [
    { title: "MCO 4790.2 (MIMMS Field Procedures)", url: "https://www.marines.mil/News/Publications/MCPEL/?Page=1&Title=4790.2", isQuickLink: true },
    { title: "MCO 4400.160 (FSMAO Program)", url: "https://www.marines.mil/News/Publications/MCPEL/?Page=1&Title=4400.160", isQuickLink: true },
    { title: "NAVMC 4400.150 (Consumer-Level Supply)", url: "https://www.marines.mil" },
  ],
};

const SMAT_INSPECTIONS_DATA = {
  references: [
    { title: "MCO 4400.160 (FSMAO Program)", url: "https://www.marines.mil/News/Publications/MCPEL/?Page=1&Title=4400.160", isQuickLink: true },
    { title: "Unit/MSC SOP", url: "https://www.marines.mil", isQuickLink: true },
    { title: "NAVMC 4400.150 (Consumer-Level Supply)", url: "https://www.marines.mil" },
  ],
};

const FSMAO_ANALYSIS_DATA = {
  references: [
    { title: "MCO 4400.160 (FSMAO Program)", url: "https://www.marines.mil/News/Publications/MCPEL/?Page=1&Title=4400.160", isQuickLink: true },
    { title: "MCO 4400.201 (Management of Property)", url: "https://www.marines.mil/News/Publications/MCPEL/?Page=1&Title=4400.201", isQuickLink: true },
    { title: "GCSS-MC Portal", url: "https://gcss-mc.marines.mil" },
  ],
};

const PRE_INSPECTION_PREP_DATA = {
  references: [
    { title: "MCO 5040.6H (Inspections Program)", url: "https://www.marines.mil/News/Publications/MCPEL/?Page=1&Title=5040.6", isQuickLink: true },
    { title: "NAVMC 5040.1 (IG Checklist User Guide)", url: "https://www.marines.mil", isQuickLink: true },
    { title: "IGMC Functional Area Checklists", url: "https://www.marines.mil" },
  ],
};

const CORRECTIVE_ACTION_TRACKING_DATA = {
  references: [
    { title: "MCO 5040.6H (Inspections Program)", url: "https://www.marines.mil/News/Publications/MCPEL/?Page=1&Title=5040.6", isQuickLink: true },
    { title: "NAVMC 11333 (POA&M Template)", url: "https://www.marines.mil", isQuickLink: true },
    { title: "Unit SOP for Corrective Actions", url: "https://www.marines.mil" },
  ],
};

// Commanders - Personnel Administration & Career Management Data
const FITREP_RESPONSIBILITIES_DATA = {
  references: [
    { title: "MCO 1610.7B (PES)", url: "https://www.marines.mil/News/Publications/MCPEL/?Page=1&Title=1610.7", isQuickLink: true },
    { title: "NAVMC 10835 (FITREP Form)", url: "https://www.marines.mil", isQuickLink: true },
    { title: "PES Online (APES)", url: "https://www.manpower.usmc.mil/webcenter/portal/PESOnline" },
  ],
};

const JEPES_COMMANDER_DATA = {
  references: [
    { title: "MCO 1616.1 (JEPES)", url: "https://www.marines.mil/News/Publications/MCPEL/?Page=1&Title=1616.1", isQuickLink: true },
    { title: "MARADMIN 505/20 (JEPES Implementation)", url: "https://www.marines.mil/News/Messages/MARADMINS/", isQuickLink: true },
    { title: "MOL JEPES Module", url: "https://mol.tfs.usmc.mil/" },
  ],
};

const COUNSELING_ENTRIES_6105_DATA = {
  references: [
    { title: "MCO 1900.16 (MARCORSEPMAN)", url: "https://www.marines.mil/News/Publications/MCPEL/?Page=1&Title=1900.16", isQuickLink: true },
    { title: "MCO P1070.12K (IRAM)", url: "https://www.marines.mil/Portals/1/Publications/MCO%20P1070.12K%20W%20CH%201.pdf", isQuickLink: true },
    { title: "6105 Entry Template", url: "https://www.marines.mil" },
  ],
};

const NOT_REC_AUTHORITY_DATA = {
  references: [
    { title: "MCO P1400.32D (Promotion Manual)", url: "https://www.marines.mil/News/Publications/MCPEL/?Page=1&Title=1400.32", isQuickLink: true },
    { title: "MCO P1070.12K (IRAM)", url: "https://www.marines.mil/Portals/1/Publications/MCO%20P1070.12K%20W%20CH%201.pdf", isQuickLink: true },
    { title: "MOL Select Grade Module", url: "https://mol.tfs.usmc.mil/" },
  ],
};

const ADVERSE_FITREPS_DATA = {
  references: [
    { title: "MCO 1610.7B (PES)", url: "https://www.marines.mil/News/Publications/MCPEL/?Page=1&Title=1610.7", isQuickLink: true },
    { title: "NAVMC 10835 (Fitness Report)", url: "https://www.marines.mil/News/Publications/MCPEL/?Page=1&Title=NAVMC%2010835" },
  ],
};

const MERITORIOUS_PROMOTION_DATA = {
  references: [
    { title: "MCO P1400.32D (Promotion Manual Vol 2)", url: "https://www.marines.mil/News/Publications/MCPEL/?Page=1&Title=1400.32", isQuickLink: true },
  ],
};

const REENLISTMENT_AUTHORITY_DATA = {
  references: [
    { title: "MCO 1040.31 (Enlisted Retention)", url: "https://www.marines.mil/News/Publications/MCPEL/?Page=1&Title=1040.31", isQuickLink: true },
    { title: "TFRS (Total Force Retention System)", url: "https://tfrs.usmc.mil/" },
  ],
};

const PAGE_11_COMMANDER_DATA = {
  references: [
    { title: "MCO P1070.12K (IRAM)", url: "https://www.marines.mil/Portals/1/Publications/MCO%20P1070.12K%20W%20CH%201.pdf", isQuickLink: true },
  ],
};

const ADVERSE_LETTERS_DATA = {
  references: [
    { title: "MCO 5800.16 Vol 14 (Legal Support)", url: "https://www.marines.mil/News/Publications/MCPEL/?Page=1&Title=5800.16", isQuickLink: true },
  ],
};

const TRANSITION_OVERSIGHT_DATA = {
  references: [
    { title: "MCO 1700.31 (Transition Readiness)", url: "https://www.marines.mil/News/Publications/MCPEL/?Page=1&Title=1700.31", isQuickLink: true },
    { title: "DD Form 2648 (Pre-Separation Counseling)", url: "https://www.esd.whs.mil/Portals/54/Documents/DD/forms/dd/dd2648.pdf" },
  ],
};

const MOL_MANAGEMENT_DATA = {
  references: [
    { title: "Marine Online (MOL)", url: "https://mol.tfs.usmc.mil/", isQuickLink: true },
    { title: "MISSO Support", url: "https://www.manpower.usmc.mil/webcenter/portal/MCIRSA", isQuickLink: true },
    { title: "MOL User Guide", url: "https://mol.tfs.usmc.mil/mol/help.html", isQuickLink: true },
    { title: "MCO P1070.12K (IRAM)", url: "https://www.marines.mil/News/Publications/MCPEL/?Page=1&Title=1070.12" },
  ],
};

// Commanders - Public Affairs & Media Relations Data
const MEDIA_ENGAGEMENT_DATA = {
  references: [
    { title: "MCO 5720.77 (Public Affairs)", url: "https://www.marines.mil/News/Publications/MCPEL/?Page=1&Title=5720.77", isQuickLink: true },
    { title: "SECNAVINST 5720.44C (DON PA Policy)", url: "https://www.secnav.navy.mil/doni/Directives/05000%20General%20Management%20Security%20and%20Safety%20Services/05-700%20General%20External%20and%20Internal%20Relations%20Services/5720.44C.pdf", isQuickLink: true },
    { title: "DoDI 5400.01 (Public Information Release)", url: "https://www.esd.whs.mil/Portals/54/Documents/DD/issuances/dodi/540001p.pdf" },
  ],
};

const RELEASABLE_INFORMATION_DATA = {
  references: [
    { title: "MCO 5720.77 (Public Affairs)", url: "https://www.marines.mil/News/Publications/MCPEL/?Page=1&Title=5720.77", isQuickLink: true },
    { title: "MCO 5211.2 (Privacy Act)", url: "https://www.marines.mil/News/Publications/MCPEL/?Page=1&Title=5211.2", isQuickLink: true },
    { title: "DoDI 5400.01 (Public Information Release)", url: "https://www.esd.whs.mil/Portals/54/Documents/DD/issuances/dodi/540001p.pdf" },
  ],
};

const CASUALTY_INFORMATION_RELEASE_DATA = {
  references: [
    { title: "MCO 3040.4 (Casualty Assistance)", url: "https://www.marines.mil/News/Publications/MCPEL/?Page=1&Title=3040.4", isQuickLink: true },
    { title: "MCO 5720.77 (Public Affairs)", url: "https://www.marines.mil/News/Publications/MCPEL/?Page=1&Title=5720.77", isQuickLink: true },
    { title: "HQMC Office of Marine Corps Communication", url: "https://www.marines.mil" },
  ],
};

const SOCIAL_MEDIA_POLICY_DATA = {
  references: [
    { title: "MCO 5239.2B (Cybersecurity Program)", url: "https://www.marines.mil/News/Publications/MCPEL/?Page=1&Title=5239.2", isQuickLink: true },
    { title: "MARADMIN 181/17 (Social Media Guidance)", url: "https://www.marines.mil/News/Messages/MARADMINS/", isQuickLink: true },
    { title: "DoDI 5400.01 (Public Information Release)", url: "https://www.esd.whs.mil/Portals/54/Documents/DD/issuances/dodi/540001p.pdf" },
  ],
};

const CRISIS_COMMUNICATION_DATA = {
  references: [
    { title: "MCO 5720.77 (Public Affairs)", url: "https://www.marines.mil/News/Publications/MCPEL/?Page=1&Title=5720.77", isQuickLink: true },
    { title: "JP 3-61 (Public Affairs)", url: "https://www.jcs.mil/Portals/36/Documents/Doctrine/pubs/jp3_61.pdf" },
  ],
};

const OPSEC_PUBLIC_STATEMENTS_DATA = {
  references: [
    { title: "MCO 3070.2 (Operations Security)", url: "https://www.marines.mil/News/Publications/MCPEL/?Page=1&Title=3070.2", isQuickLink: true },
    { title: "MCO 5720.77 (Public Affairs)", url: "https://www.marines.mil/News/Publications/MCPEL/?Page=1&Title=5720.77" },
  ],
};

const CLIMATE_MESSAGING_DATA = {
  references: [
    { title: "MCO 5354.1G (PAC Order)", url: "https://www.marines.mil/News/Publications/MCPEL/?Page=1&Title=5354.1", isQuickLink: true },
    { title: "MCO 5720.77 (Public Affairs)", url: "https://www.marines.mil/News/Publications/MCPEL/?Page=1&Title=5720.77" },
  ],
};

// Life Events Data
const BUYING_A_HOME_DATA = {
  references: [
    { title: "VA Home Loan Program", url: "https://www.va.gov/housing-assistance/home-loans/", isQuickLink: true },
    { title: "eBenefits COE Request", url: "https://www.ebenefits.va.gov/", isQuickLink: true },
    { title: "VA Form 26-1880", url: "https://www.va.gov/find-forms/about-form-26-1880/" },
    { title: "VA Funding Fee Table", url: "https://www.va.gov/housing-assistance/home-loans/funding-fee-and-closing-costs/" },
  ],
};

const DEPLOYING_DATA = {
  references: [
    { title: "SCRA Information", url: "https://www.militaryonesource.mil/legal/scra/", isQuickLink: true },
    { title: "Legal Assistance Locator", url: "https://legalassistance.law.af.mil/", isQuickLink: true },
    { title: "Family Care Plan (MCO 1740.13D)", url: "https://www.marines.mil/Portals/1/Publications/MCO%201740.13D.pdf" },
    { title: "SGLI Overview", url: "https://www.va.gov/life-insurance/options-eligibility/sgli/" },
  ],
};

const GETTING_MARRIED_DATA = {
  references: [
    { title: "DEERS Enrollment", url: "https://www.tricare.mil/Plans/Eligibility/DEERS", isQuickLink: true },
    { title: "ID Card Office Locator", url: "https://idco.dmdc.osd.mil/idco/", isQuickLink: true },
    { title: "TRICARE Plan Options", url: "https://www.tricare.mil/Plans" },
    { title: "DD Form 93", url: "https://www.esd.whs.mil/Portals/54/Documents/DD/forms/dd/dd0093.pdf" },
  ],
};

const GETTING_OUT_EAS_DATA = {
  references: [
    { title: "Transition Assistance Program", url: "https://www.dol.gov/agencies/vets/programs/tap", isQuickLink: true },
    { title: "VA Benefits", url: "https://www.va.gov/", isQuickLink: true },
    { title: "eBenefits", url: "https://www.ebenefits.va.gov/" },
    { title: "MCO 1900.16 (Separation Manual)", url: "https://www.marines.mil/Portals/1/Publications/MCO%201900.16.pdf" },
  ],
};

const HAVING_A_BABY_DATA = {
  references: [
    { title: "DEERS Enrollment", url: "https://www.tricare.mil/Plans/Eligibility/DEERS", isQuickLink: true },
    { title: "ID Card Office Locator", url: "https://idco.dmdc.osd.mil/idco/", isQuickLink: true },
    { title: "TRICARE Newborn Coverage", url: "https://www.tricare.mil/LifeEvents/Baby" },
    { title: "Paternity Leave Policy", url: "https://www.mynavyhr.navy.mil/References/Pay-Benefits/N130C/" },
  ],
};

const PCS_MOVE_DATA = {
  references: [
    { title: "Move.mil", url: "https://www.move.mil/", isQuickLink: true },
    { title: "DPS (Defense Personal Property System)", url: "https://www.move.mil/dps", isQuickLink: true },
    { title: "DTMO Travel Allowances", url: "https://www.travel.dod.mil/" },
    { title: "JTR (Joint Travel Regulations)", url: "https://www.travel.dod.mil/Policy-Regulations/Joint-Travel-Regulations/" },
  ],
};

function toTitle(slug: string) {
  const t = slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
  return t
    .replace(/\bSdap\b/g, "SDAP")
    .replace(/\bVbss\b/g, "VBSS")
    .replace(/\bPcs\b/g, "PCS")
    .replace(/\bHhg\b/g, "HHG")
    .replace(/\bPpm\b/g, "PPM")
    .replace(/\bDla\b/g, "DLA")
    .replace(/\bTle\b/g, "TLE")
    .replace(/\bTad\b/g, "TAD")
    .replace(/\bDts\b/g, "DTS")
    .replace(/\bGtcc\b/g, "GTCC")
    .replace(/\bEfmp\b/g, "EFMP")
    .replace(/\bOconus\b/g, "OCONUS")
    .replace(/\bId\b/g, "ID")
    .replace(/\bFcp\b/g, "FCP")
    .replace(/\bOmpf\b/g, "OMPF")
    .replace(/\bSrb\b/g, "SRB")
    .replace(/\bBcnr\b/g, "BCNR")
    .replace(/\bBah\b/g, "BAH")
    .replace(/\bBas\b/g, "BAS")
    .replace(/\bJepes\b/g, "JEPES")
    .replace(/\bEpme\b/g, "EPME")
    .replace(/\bTig\b/g, "TIG")
    .replace(/\bMos\b/g, "MOS")
    .replace(/\bPmos\b/g, "PMOS")
    .replace(/\bSgli\b/g, "SGLI")
    .replace(/\bCrsc\b/g, "CRSC")
    .replace(/\bSla\b/g, "SLA")
    .replace(/\bHfp\b/g, "HFP")
    .replace(/\bIdp\b/g, "IDP")
    .replace(/\bFsa\b/g, "FSA")
    .replace(/\bPdha\b/g, "PDHA")
    .replace(/\bPdhra\b/g, "PDHRA")
    .replace(/\bImr\b/g, "IMR")
    .replace(/\bSdp\b/g, "SDP")
    .replace(/\bCzte\b/g, "CZTE")
    .replace(/\bMol\b/g, "MOL")
    .replace(/\bTsgli\b/g, "TSGLI")
    .replace(/\bFsgli\b/g, "FSGLI")
    .replace(/\bVgli\b/g, "VGLI")
    .replace(/\bTricare\b/g, "TRICARE")
    .replace(/\bHcfsa\b/g, "HCFSA")
    .replace(/\bFedvip\b/g, "FEDVIP")
    .replace(/Foreign Language Proficiency Pay/i, "Foreign Language Proficiency Bonus")
    .replace(/\bPme\b/g, "PME")
    .replace(/\bCsc\b/g, "CSC")
    .replace(/\bDlpt\b/g, "DLPT")
    .replace(/\bFlpp\b/g, "FLPP")
    .replace(/\bCool\b/g, "COOL")
    .replace(/\bJst\b/g, "JST")
    .replace(/\bClep\b/g, "CLEP")
    .replace(/\bDsst\b/g, "DSST")
    .replace(/\bPla\b/g, "PLA")
    .replace(/\bTa\b/g, "TA")
    .replace(/\bGi\b/g, "GI")
    .replace(/\bEas\b/g, "EAS")
    .replace(/\bIdes\b/g, "IDES")
    .replace(/\bTdrl\b/g, "TDRL")
    .replace(/\bSbp\b/g, "SBP")
    .replace(/\bTap\b/g, "TAP")
    .replace(/\bVa\b/g, "VA")
    .replace(/\bIdt\b/g, "IDT")
    .replace(/\bAdos\b/g, "ADOS")
    .replace(/\bAdsw\b/g, "ADSW")
    .replace(/\bAdt\b/g, "ADT")
    .replace(/\bSmcr\b/g, "SMCR")
    .replace(/\bIma\b/g, "IMA")
    .replace(/\bIrr\b/g, "IRR")
    .replace(/\bCrcr\b/g, "CRCR")
    .replace(/\bMrows\b/g, "MROWS")
    .replace(/\bMcirsa\b/g, "MCIRSA")
    .replace(/\bMctfs\b/g, "MCTFS")
    .replace(/\bAt\b/g, "AT")
    .replace(/\bNjp\b/g, "NJP")
    .replace(/\bPlor\b/g, "PLOR")
    .replace(/\bNploc\b/g, "NPLOC")
    .replace(/\bVwap\b/g, "VWAP")
    .replace(/\bMpo\b/g, "MPO")
    .replace(/\bNcic\b/g, "NCIC")
    .replace(/\bIg\b/g, "IG")
    .replace(/\bUcmj\b/g, "UCMJ")
    .replace(/\bSja\b/g, "SJA")
    .replace(/\bJagman\b/g, "JAGMAN")
    .replace(/\bScra\b/g, "SCRA")
    .replace(/\bSvc\b/g, "SVC")
    .replace(/\bLro\b/g, "LRO")
    .replace(/\bPerb\b/g, "PERB")
    .replace(/\bMmpb\b/g, "MMPB")
    // Leader-specific acronyms
    .replace(/\bAdsep\b/g, "ADSEP")
    .replace(/\bFitrep\b/g, "FITREP")
    .replace(/\bFitreps\b/g, "FITREPs")
    .replace(/\bDeers\b/g, "DEERS")
    .replace(/\bIaps\b/g, "iAPS")
    .replace(/\bMarinenet\b/g, "MarineNet")
    .replace(/\bUa\b/g, "UA")
    .replace(/\bMro\b/g, "MRO")
    .replace(/\bPoa\b/g, "POA")
    .replace(/\bDd93\b/g, "DD93")
    .replace(/\b6105\b/g, "6105")
    .replace(/\bRs\b/g, "RS")
    .replace(/\bRo\b/g, "RO")
    .replace(/\bRv\b/g, "RV")
    .replace(/\bSiq\b/g, "SIQ");
}

export default async function RoleItemPage({ params }: { params: Promise<Params> }) {
  const p = await params;
  const safeRole = p.role ?? "marines";
  const safeSection = p.section ?? "unknown";
  const itemSlug = p.item ?? "item";
  const itemTitle = toTitle(itemSlug);
  if (itemSlug === "pay-corrections") return notFound();

  // Content map for slug-to-component mapping
  const contentMap: Record<string, React.ReactNode> = {
    // Pay & Allowances
    "basic-allowance-for-housing": <BAHContent bahData={BAH_DATA} />,
    "basic-allowance-for-subsistence": <BASContent basData={BAS_DATA} />,
    "cost-of-living-allowance": <COLAContent colaData={COLA_DATA} />,
    "overseas-housing-allowance": <OHAContent ohaData={OHA_DATA} />,
    "family-separation-allowance": <FSAContent fsaData={FSA_DATA} />,
    "hostile-fire-pay": <HostileFirePayContent hfpData={HFP_DATA} />,
    "imminent-danger-pay": <ImminentDangerPayContent idpData={IDP_DATA} />,
    "demolition-pay": <HDIPContent hdipData={HDIP_DATA} />,
    "hardship-duty-pay": <HDPContent hdpData={HDP_DATA} />,
    "dive-pay": <DivePayContent diveData={DIVE_DATA} />,
    "experimental-stress-duty": <ExperimentalStressContent stressData={STRESS_DATA} />,
    "flight-deck-duty": <FlightDeckContent fdhdData={FDHD_DATA} />,
    "parachute-duty-pay": <ParachuteContent parachuteData={PARACHUTE_DATA} />,
    "maritime-vbss-duty": <VBSSContent vbssData={VBSS_DATA} />,
    "special-operations-pay": <SpecialOperationsContent soData={SO_DATA} />,
    "toxic-materials-duty": <ToxicMaterialsContent tmData={TM_DATA} />,
    "aviation-career-incentive-pay": <AviationCareerIncentivePayContent acipData={ACIP_DATA} />,
    "foreign-language-proficiency-bonus": <ForeignLanguageProficiencyPayContent flppData={FLPP_DATA} />,
    "sdap": <SDAPContent sdapData={SDAP_DATA} />,
    "savings-deposit-program": <SDPContent sdpData={SDP_DATA} />,
    "blended-retirement-system": <BRSContent />,
    "legacy-high-3-retirement-system": <High3Content />,
    "continuation-pay": <ContinuationPayContent />,
    "transfer-of-educational-benefits": <TEBContent />,
    "thrift-savings-plan": <TSPContent />,
    "combat-zone-tax-exclusion": <CZTEContent />,
    "flexible-spending-accounts": <FlexibleSpendingAccountsContent />,
    "military-state-tax-relief": <MilitaryStateTaxReliefContent />,
    "allotments": <AllotmentsContent />,
    "basic-needs-allowance": <BasicNeedsAllowanceContent />,
    "debt-management": <DebtManagementContent />,
    "financial-hardship-assistance": <FinancialHardshipAssistanceContent />,
    "overpayment-repayment-plans": <OverpaymentRepaymentPlansContent />,
    // Travel & Transportation
    "pcs-orders-processing": <PCSOrdersProcessingContent data={PCS_ORDERS_DATA} />,
    "household-goods-shipment": <HouseholdGoodsShipmentContent data={HHG_DATA} />,
    "personally-procured-move": <PersonallyProcuredMoveContent data={PPM_DATA} />,
    "pcs-storage-entitlements": <PCSStorageContent data={PCS_STORAGE_DATA} />,
    "dislocation-allowance": <DislocationAllowanceContent data={DLA_DATA} />,
    "temporary-lodging-expense": <TemporaryLodgingExpenseContent data={TLE_DATA} />,
    "vehicle-processing-storage": <VehicleProcessingStorageContent data={VEHICLE_DATA} />,
    "tad-orders": <TADOrdersContent data={TAD_DATA} />,
    "per-diem-rates": <PerDiemRatesContent data={PER_DIEM_DATA} />,
    "travel-voucher-submission": <TravelVoucherSubmissionContent data={VOUCHER_DATA} />,
    "dts-authorization": <DTSAuthorizationContent data={DTS_DATA} />,
    "government-travel-charge-card": <GovernmentTravelChargeCardContent data={GTCC_DATA} />,
    "mileage-reimbursement": <MileageReimbursementContent data={MILEAGE_DATA} />,
    "advance-travel-pay": <AdvanceTravelPayContent data={ADVANCE_PAY_DATA} />,
    "leave-en-route-travel": <LeaveEnRouteTravelContent data={LEAVE_ENROUTE_DATA} />,
    // Dependency Management
    "marriage-documentation": <MarriageDocumentationContent data={MARRIAGE_DATA} />,
    "birth-adoption-of-children": <BirthAdoptionContent data={BIRTH_ADOPTION_DATA} />,
    "stepchildren-addition": <StepchildrenAdditionContent data={STEPCHILDREN_DATA} />,
    "secondary-dependents": <SecondaryDependentsContent data={SECONDARY_DEPENDENTS_DATA} />,
    "divorce-legal-separation": <DivorceLegalSeparationContent data={DIVORCE_DATA} />,
    "death-of-dependents": <DeathOfDependentsContent data={DEATH_OF_DEPENDENTS_DATA} />,
    "adult-children-age-21": <AdultChildrenContent data={ADULT_CHILDREN_DATA} />,
    "family-care-plan": <FamilyCarePlanContent data={FCP_DATA} />,
    "efmp": <EFMPContent data={EFMP_DATA} />,
    "emergency-contact-updates": <EmergencyContactUpdatesContent data={EMERGENCY_CONTACT_DATA} />,
    "dependent-id-card-updates": <DependentIDCardUpdatesContent data={ID_CARD_DATA} />,
    "command-sponsorship-oconus": <CommandSponsorshipContent data={COMMAND_SPONSORSHIP_DATA} />,
    // Personnel Administration
    "check-in-procedures": <CheckInProceduresContent data={CHECK_IN_DATA} />,
    "sponsorship-programs": <SponsorshipProgramContent data={SPONSORSHIP_DATA} />,
    "initial-bah-bas-verification": <InitialBAHBASVerificationContent data={INITIAL_BAH_BAS_DATA} />,
    "records-review": <RecordsReviewContent data={RECORDS_REVIEW_DATA} />,
    "security-clearance-transfer": <SecurityClearanceTransferContent data={SECURITY_CLEARANCE_DATA} />,
    // Outbound Processing
    "checkout-procedures": <CheckoutProceduresContent data={CHECKOUT_DATA} />,
    "final-pay-settlement": <FinalPaySettlementContent data={FINAL_PAY_DATA} />,
    "records-transfer": <RecordsTransferContent data={RECORDS_TRANSFER_DATA} />,
    "leave-settlement": <LeaveSettlementContent data={LEAVE_SETTLEMENT_DATA} />,
    // Personnel Records
    "ompf-management": <OMPFManagementContent data={OMPF_MANAGEMENT_DATA} />,
    "srb-corrections": <SRBCorrectionsContent data={SRB_CORRECTIONS_DATA} />,
    "awards-decorations": <AwardsDecorationsContent data={AWARDS_DECORATIONS_DATA} />,
    "training-record-updates": <TrainingRecordUpdatesContent data={TRAINING_RECORD_DATA} />,
    "education-records": <EducationRecordsContent data={EDUCATION_RECORDS_DATA} />,
    "bcnr": <BCNRContent data={BCNR_DATA} />,
    "medical-records": <MedicalRecordsContent data={MEDICAL_RECORDS_DATA} />,
    "page-11-entries": <Page11EntriesContent data={PAGE_11_ENTRIES_DATA} />,
    "training-jackets": <TrainingJacketsContent data={TRAINING_JACKETS_DATA} />,
    // Promotions and Career Progression
    "promotion-documentation": <PromotionDocumentationContent data={PROMOTION_DOCUMENTATION_DATA} />,
    "jepes": <JEPESContent data={JEPES_DATA} />,
    "cutting-score-verification": <CuttingScoreVerificationContent data={CUTTING_SCORE_DATA} />,
    "promotion-warrants": <PromotionWarrantsContent data={PROMOTION_WARRANTS_DATA} />,
    "meritorious-promotions": <MeritoriousPromotionsContent data={MERITORIOUS_PROMOTIONS_DATA} />,
    "epme-requirements": <EPMERequirementsContent data={EPME_REQUIREMENTS_DATA} />,
    "tig-corrections": <TIGCorrectionsContent data={TIG_CORRECTIONS_DATA} />,
    "mos-changes-lateral-moves": <MOSChangesContent data={MOS_CHANGES_DATA} />,
    "fitness-reports": <FitnessReportsContent data={FITNESS_REPORTS_DATA} />,
    "performance-evaluation-appeals": <PerformanceEvaluationAppealsContent data={PERFORMANCE_EVALUATION_APPEALS_DATA} />,
    "perb": <PERBContent data={PERB_DATA} />,
    "rank-reduction": <RankReductionContent data={RANK_REDUCTION_DATA} />,
    "frocking": <FrockingContent data={FROCKING_DATA} />,
    "date-of-rank-corrections": <DateOfRankCorrectionsContent data={DATE_OF_RANK_CORRECTIONS_DATA} />,
    "mos-reclassification": <MOSReclassificationContent data={MOS_RECLASSIFICATION_DATA} />,
    "additional-mos-assignment": <AdditionalMOSAssignmentContent data={ADDITIONAL_MOS_ASSIGNMENT_DATA} />,
    "primary-mos-changes": <PrimaryMOSChangesContent data={PRIMARY_MOS_CHANGES_DATA} />,
    // Deployment Support - Pre-Deployment
    "deployment-orders": <DeploymentOrdersContent data={DEPLOYMENT_ORDERS_DATA} />,
    "medical-readiness": <MedicalReadinessContent data={MEDICAL_READINESS_DATA} />,
    "dental-readiness": <DentalReadinessContent data={DENTAL_READINESS_DATA} />,
    "family-care-plan-validation": <FamilyCarePlanValidationContent data={FAMILY_CARE_PLAN_VALIDATION_DATA} />,
    "power-of-attorney": <PowerOfAttorneyContent data={POWER_OF_ATTORNEY_DATA} />,
    "sgli-beneficiary-updates": <SGLIBeneficiaryUpdatesContent data={SGLI_BENEFICIARY_UPDATES_DATA} />,
    "will-preparation": <WillPreparationContent data={WILL_PREPARATION_DATA} />,
    // Deployment Support - During Deployment
    "hfp-idp-verification": <HFPIDPVerificationContent data={HFP_IDP_VERIFICATION_DATA} />,
    "fsa-processing": <FSAProcessingContent data={FSA_PROCESSING_DATA} />,
    "dependent-support-services": <DependentSupportServicesContent data={DEPENDENT_SUPPORT_SERVICES_DATA} />,
    "emergency-leave-requests": <EmergencyLeaveRequestsContent data={EMERGENCY_LEAVE_REQUESTS_DATA} />,
    // Deployment Support - Post-Deployment
    "reintegration-processing": <ReintegrationProcessingContent data={REINTEGRATION_PROCESSING_DATA} />,
    "pay-entitlement-verification": <PayEntitlementVerificationContent data={PAY_ENTITLEMENT_VERIFICATION_DATA} />,
    "leave-accrual-review": <LeaveAccrualReviewContent data={LEAVE_ACCRUAL_REVIEW_DATA} />,
    "crsc": <CRSCContent data={CRSC_DATA} />,
    // Insurance & Healthcare - Life Insurance
    "sgli": <SGLIContent data={SGLI_DATA} />,
    "fsgli": <FSGLIContent data={FSGLI_DATA} />,
    "tsgli": <TSGLIContent data={TSGLI_DATA} />,
    "vgli": <VGLIContent data={VGLI_DATA} />,
    "beneficiary-updates": <BeneficiaryUpdatesContent data={BENEFICIARY_UPDATES_DATA} />,
    // Insurance & Healthcare - Healthcare Benefits
    "tricare-enrollment": <TRICAREEnrollmentContent data={TRICARE_ENROLLMENT_DATA} />,
    "hcfsa": <HCFSAContent data={HCFSA_DATA} />,
    "efmp-medical-screening": <EFMPMedicalScreeningContent data={EFMP_MEDICAL_SCREENING_DATA} />,
    "dental-coverage-fedvip": <DentalCoverageFEDVIPContent data={DENTAL_COVERAGE_FEDVIP_DATA} />,
    "vision-coverage": <VisionCoverageContent data={VISION_COVERAGE_DATA} />,
    // Education & Training - Military Education
    "pme": <PMEContent data={PME_DATA} />,
    "resident-non-resident-schools": <ResidentNonResidentSchoolsContent data={RESIDENT_NON_RESIDENT_SCHOOLS_DATA} />,
    "command-staff-college": <CommandStaffCollegeContent data={COMMAND_STAFF_COLLEGE_DATA} />,
    "war-college": <WarCollegeContent data={WAR_COLLEGE_DATA} />,
    "mos-specific-training": <MOSSpecificTrainingContent data={MOS_SPECIFIC_TRAINING_DATA} />,
    // Education & Training - Civilian Education
    "tuition-assistance": <TuitionAssistanceContent data={TUITION_ASSISTANCE_DATA} />,
    "gi-bill-benefits": <GIBillBenefitsContent data={GI_BILL_BENEFITS_DATA} />,
    "gi-bill-transfer": <GIBillTransferContent data={GI_BILL_TRANSFER_DATA} />,
    "jst": <JSTContent data={JST_DATA} />,
    "college-credit-military": <CollegeCreditMilitaryContent data={COLLEGE_CREDIT_MILITARY_DATA} />,
    // Education & Training - Professional Development
    "credentialing-programs": <CredentialingProgramsContent data={CREDENTIALING_PROGRAMS_DATA} />,
    "certification-reimbursement": <CertificationReimbursementContent data={CERTIFICATION_REIMBURSEMENT_DATA} />,
    "language-training-dlpt": <LanguageTrainingDLPTContent data={LANGUAGE_TRAINING_DLPT_DATA} />,
    "technical-certifications": <TechnicalCertificationsContent data={TECHNICAL_CERTIFICATIONS_DATA} />,
    // Separations & Transitions - Voluntary Separation
    "eas": <EASContent data={EAS_DATA} />,
    "voluntary-early-release": <VoluntaryEarlyReleaseContent data={VOLUNTARY_EARLY_RELEASE_DATA} />,
    "resignation-officers": <ResignationOfficersContent data={RESIGNATION_OFFICERS_DATA} />,
    // Separations & Transitions - Involuntary Separation
    "administrative-separation": <AdministrativeSeparationContent data={ADMINISTRATIVE_SEPARATION_DATA} />,
    "medical-separation": <MedicalSeparationContent data={MEDICAL_SEPARATION_DATA} />,
    "failure-to-meet-standards": <FailureToMeetStandardsContent data={FAILURE_TO_MEET_STANDARDS_DATA} />,
    "entry-level-separation": <EntryLevelSeparationContent data={ENTRY_LEVEL_SEPARATION_DATA} />,
    // Separations & Transitions - Retirement
    "active-duty-retirement": <ActiveDutyRetirementContent data={ACTIVE_DUTY_RETIREMENT_DATA} />,
    "reserve-retirement": <ReserveRetirementContent data={RESERVE_RETIREMENT_DATA} />,
    "medical-retirement": <MedicalRetirementContent data={MEDICAL_RETIREMENT_DATA} />,
    "tdrl": <TDRLContent data={TDRL_DATA} />,
    "sbp-elections": <SBPElectionsContent data={SBP_ELECTIONS_DATA} />,
    // Separations & Transitions - Transition Programs
    "tap": <TAPContent data={TAP_DATA} />,
    "va-benefits": <VABenefitsContent data={VA_BENEFITS_DATA} />,
    "employment-assistance": <EmploymentAssistanceContent data={EMPLOYMENT_ASSISTANCE_DATA} />,
    "education-benefits-transfer": <EducationBenefitsTransferContent data={EDUCATION_BENEFITS_TRANSFER_DATA} />,
    "skillbridge": <SkillBridgeContent data={SKILLBRIDGE_DATA} />,
    // Reserve & Mobilization - Reserve Administration
    "reserve-duty-status": <ReserveDutyStatusContent data={RESERVE_DUTY_STATUS_DATA} />,
    "idt-pay": <IDTPayContent data={IDT_PAY_DATA} />,
    "annual-training-orders": <AnnualTrainingOrdersContent data={ANNUAL_TRAINING_ORDERS_DATA} />,
    "retirement-points": <RetirementPointsContent data={RETIREMENT_POINTS_DATA} />,
    "reserve-promotion-system": <ReservePromotionSystemContent data={RESERVE_PROMOTION_SYSTEM_DATA} />,
    // Reserve & Mobilization - Mobilization/Activation
    "mobilization-orders": <MobilizationOrdersContent data={MOBILIZATION_ORDERS_DATA} />,
    "ados": <ADOSContent data={ADOS_DATA} />,
    "adsw": <ADSWContent data={ADSW_DATA} />,
    "adt": <ADTContent data={ADT_DATA} />,
    "demobilization-processing": <DemobilizationProcessingContent data={DEMOBILIZATION_PROCESSING_DATA} />,
    // Legal & Disciplinary - Administrative Actions
    "njp-article-15": <NJPArticle15Content data={NJP_ARTICLE_15_DATA} />,
    "punitive-letters-reprimand": <PunitiveLettersReprimandContent data={PUNITIVE_LETTERS_REPRIMAND_DATA} />,
    "page-11-counseling": <Page11CounselingContent data={PAGE_11_COUNSELING_DATA} />,
    "administrative-investigations": <AdministrativeInvestigationsContent data={ADMINISTRATIVE_INVESTIGATIONS_DATA} />,
    // Legal & Disciplinary - Legal Support
    "court-martial-support": <CourtMartialSupportContent data={COURT_MARTIAL_SUPPORT_DATA} />,
    "legal-assistance": <LegalAssistanceContent data={LEGAL_ASSISTANCE_DATA} />,
    "vwap": <VWAPContent data={VWAP_DATA} />,
    "military-protective-orders": <MilitaryProtectiveOrdersContent data={MILITARY_PROTECTIVE_ORDERS_DATA} />,
    "ig-complaints": <IGComplaintsContent data={IG_COMPLAINTS_DATA} />,
    // Systems Management - Personnel Systems
    "mol": <MOLManagementContent data={MOL_MANAGEMENT_DATA} />,
    "mctfs": <GenericContent title="MCTFS (Total Force System)" />,
    "mcirsa": <GenericContent title="MCIRSA" />,
    // Systems Management - Travel Systems
    "dts": <GenericContent title="Defense Travel System (DTS)" />,
    "gtcc-portal": <GenericContent title="GTCC Portal" />,
    // Systems Management - Reserve Systems
    "mrows": <GenericContent title="MROWS" />,
    // Leaders - Accountability & Discipline
    "njp-authority-levels": <NJPAuthorityLevelsContent data={NJP_AUTHORITY_LEVELS_DATA} />,
    "njp-recommendation-documentation": <NJPRecommendationContent data={NJP_RECOMMENDATION_DATA} />,
    "ua-desertion-reporting": <UADesertionReportingContent data={UA_DESERTION_REPORTING_DATA} />,
    "adsep-overview": <ADSEPOverviewContent data={ADSEP_OVERVIEW_DATA} />,
    "legal-hold-investigations": <LegalHoldInvestigationsContent data={LEGAL_HOLD_INVESTIGATIONS_DATA} />,
    "article-31b-rights": <Article31bRightsContent data={ARTICLE_31B_RIGHTS_DATA} />,
    "progressive-discipline": <ProgressiveDisciplineContent data={PROGRESSIVE_DISCIPLINE_DATA} />,
    "page11-vs-6105-decision-guide": <Page11vs6105DecisionGuideContent data={PAGE11_VS_6105_DECISION_GUIDE_DATA} />,
    "counseling-refusal-procedures": <CounselingRefusalProceduresContent data={COUNSELING_REFUSAL_PROCEDURES_DATA} />,
    "hazing-harassment-reporting": <HazingHarassmentReportingContent data={HAZING_HARASSMENT_REPORTING_DATA} />,
    // Leaders - Awards & Recognition
    "writing-award-recommendations": <WritingAwardRecommendationsContent data={WRITING_AWARD_RECOMMENDATIONS_DATA} />,
    "citation-format-requirements": <CitationFormatRequirementsContent data={CITATION_FORMAT_REQUIREMENTS_DATA} />,
    "common-award-errors": <CommonAwardErrorsContent data={COMMON_AWARD_ERRORS_DATA} />,
    "iaps-submission": <IAPSSubmissionContent data={IAPS_SUBMISSION_DATA} />,
    "award-routing-approval": <AwardRoutingApprovalContent data={AWARD_ROUTING_APPROVAL_DATA} />,
    "award-timeline-management": <AwardTimelineManagementContent data={AWARD_TIMELINE_MANAGEMENT_DATA} />,
    "award-troubleshooting": <AwardTroubleshootingContent data={AWARD_TROUBLESHOOTING_DATA} />,
    // Leaders - Career Development
    "supporting-reenlistment-decisions": <SupportingReenlistmentDecisionsContent data={SUPPORTING_REENLISTMENT_DECISIONS_DATA} />,
    "pme-tracking-completion": <PMETrackingCompletionContent data={PME_TRACKING_COMPLETION_DATA} />,
    "meritorious-promotion-preparation": <MeritoriousPromotionPreparationContent data={MERITORIOUS_PROMOTION_PREPARATION_DATA} />,
    "special-duty-assignment-screening": <SpecialDutyAssignmentScreeningContent data={SPECIAL_DUTY_ASSIGNMENT_SCREENING_DATA} />,
    "lateral-move-guidance": <LateralMoveGuidanceContent data={LATERAL_MOVE_GUIDANCE_DATA} />,
    "enlisted-commissioning-programs": <EnlistedCommissioningProgramsContent data={ENLISTED_COMMISSIONING_PROGRAMS_DATA} />,
    "warrant-officer-program-support": <WarrantOfficerProgramSupportContent data={WARRANT_OFFICER_PROGRAM_SUPPORT_DATA} />,
    // Leaders - Counseling & Documentation
    "six-functional-areas": <SixFunctionalAreasContent data={SIX_FUNCTIONAL_AREAS_DATA} />,
    "smart-goals": <SMARTGoalsContent data={SMART_GOALS_DATA} />,
    "counseling-fundamentals": <CounselingFundamentalsContent data={COUNSELING_FUNDAMENTALS_DATA} />,
    "required-counseling-occasions": <RequiredCounselingOccasionsContent data={REQUIRED_COUNSELING_OCCASIONS_DATA} />,
    "initial-counseling-session": <InitialCounselingSessionContent data={INITIAL_COUNSELING_SESSION_DATA} />,
    "follow-on-counseling-sessions": <FollowOnCounselingSessionsContent data={FOLLOW_ON_COUNSELING_SESSIONS_DATA} />,
    "marine-leader-notebooks": <MarineLeaderNotebooksContent data={MARINE_LEADER_NOTEBOOKS_DATA} />,
    // Leaders - Deployment & Readiness
    "upfrp-overview": <UPFRPOverviewContent data={UPFRP_OVERVIEW_DATA} />,
    "deployment-training-events": <DeploymentTrainingEventsContent data={DEPLOYMENT_TRAINING_EVENTS_DATA} />,
    "individual-readiness-requirements": <IndividualReadinessRequirementsContent data={INDIVIDUAL_READINESS_REQUIREMENTS_DATA} />,
    "family-care-plan-requirements": <FamilyCarePlanRequirementsContent data={FAMILY_CARE_PLAN_REQUIREMENTS_DATA} />,
    "obligated-service-deployment": <ObligatedServiceDeploymentContent data={OBLIGATED_SERVICE_DEPLOYMENT_DATA} />,
    "physical-fitness-readiness": <PhysicalFitnessReadinessContent data={PHYSICAL_FITNESS_READINESS_DATA} />,
    "pre-deployment-checklist": <PreDeploymentChecklistContent data={PRE_DEPLOYMENT_CHECKLIST_DATA} />,
    "supporting-ias-and-tad": <SupportingIAsAndTADContent data={SUPPORTING_IAS_AND_TAD_DATA} />,
    // Leaders - Performance Evaluation
    "jepes-overview": <JEPESOverviewContent data={JEPES_OVERVIEW_LEADERS_DATA} />,
    "jepes-reporting-chain": <JEPESReportingChainContent data={JEPES_REPORTING_CHAIN_DATA} />,
    "jepes-reporting-occasions": <JEPESReportingOccasionsContent data={JEPES_REPORTING_OCCASIONS_DATA} />,
    "jepes-command-input-metrics": <JEPESCommandInputMetricsContent data={JEPES_COMMAND_INPUT_METRICS_DATA} />,
    "not-rec": <NOTRECContent data={NOT_REC_DATA} />,
    "not-rec-appeal-process": <NOTRECAppealProcessContent data={NOT_REC_APPEAL_PROCESS_DATA} />,
    "jepes-objective-scores": <JEPESObjectiveScoresContent data={JEPES_OBJECTIVE_SCORES_DATA} />,
    "jepes-debriefing": <JEPESDebriefingContent data={JEPES_DEBRIEFING_DATA} />,
    "fitness-reports-leaders": <FitnessReportsLeadersContent data={FITNESS_REPORTS_LEADERS_DATA} />,
    "billet-accomplishments": <BilletAccomplishmentsContent data={BILLET_ACCOMPLISHMENTS_DATA} />,
    "jepes-corrective-procedures": <JEPESCorrectiveProceduresContent data={JEPES_CORRECTIVE_PROCEDURES_DATA} />,
    // Leaders - Personnel Accountability
    "daily-accountability-fundamentals": <DailyAccountabilityFundamentalsContent data={DAILY_ACCOUNTABILITY_FUNDAMENTALS_DATA} />,
    "gains-losses-processing": <GainsLossesProcessingContent data={GAINS_LOSSES_PROCESSING_DATA} />,
    "leave-liberty-management": <LeaveLibertyManagementContent data={LEAVE_LIBERTY_MANAGEMENT_DATA} />,
    "ua-procedures": <UAProceduresContent data={UA_PROCEDURES_DATA} />,
    "tad-detachment-tracking": <TADDetachmentTrackingContent data={TAD_DETACHMENT_TRACKING_DATA} />,
    "muster-formation-procedures": <MusterFormationProceduresContent data={MUSTER_FORMATION_PROCEDURES_DATA} />,
    "record-keeping-documentation": <RecordKeepingDocumentationContent data={RECORD_KEEPING_DOCUMENTATION_DATA} />,
    // Leaders - Administrative Systems
    "mctfs-overview": <MCTFSOverviewContent data={MCTFS_OVERVIEW_DATA} />,
    "mol-navigation": <MOLNavigationContent data={MOL_NAVIGATION_DATA} />,
    "jepes-system-navigation": <JEPESSystemNavigationContent data={JEPES_SYSTEM_NAVIGATION_DATA} />,
    "tfrs-overview": <TFRSOverviewContent data={TFRS_OVERVIEW_DATA} />,
    "unit-diary-reporting": <UnitDiaryReportingContent data={UNIT_DIARY_REPORTING_DATA} />,
    "training-information-systems": <TrainingInformationSystemsContent data={TRAINING_INFORMATION_SYSTEMS_DATA} />,
    "mco-quick-reference": <MCOQuickReferenceContent data={MCO_QUICK_REFERENCE_DATA} />,
    // Leaders - Conducting Investigations
    "review-convening-order": <ReviewConveningOrderContent data={REVIEW_CONVENING_ORDER_DATA} />,
    "contact-judge-advocate": <ContactJudgeAdvocateContent data={CONTACT_JUDGE_ADVOCATE_DATA} />,
    "coordinate-other-investigations": <CoordinateOtherInvestigationsContent data={COORDINATE_OTHER_INVESTIGATIONS_DATA} />,
    "preliminary-inquiry-io": <PreliminaryInquiryIOContent data={PRELIMINARY_INQUIRY_IO_DATA} />,
    "command-investigation-io": <CommandInvestigationIOContent data={COMMAND_INVESTIGATION_IO_DATA} />,
    "litigation-report-io": <LitigationReportIOContent data={LITIGATION_REPORT_IO_DATA} />,
    "collecting-evidence": <CollectingEvidenceContent data={COLLECTING_EVIDENCE_DATA} />,
    "interviewing-witnesses": <InterviewingWitnessesContent data={INTERVIEWING_WITNESSES_DATA} />,
    "standards-of-proof-io": <StandardsOfProofIOContent data={STANDARDS_OF_PROOF_IO_DATA} />,
    "investigation-report-format-io": <InvestigationReportFormatIOContent data={INVESTIGATION_REPORT_FORMAT_IO_DATA} />,
    "lod-misconduct-determinations": <LODMisconductDeterminationsContent data={LOD_MISCONDUCT_DETERMINATIONS_DATA} />,
    "death-case-procedures-io": <DeathCaseProceduresIOContent data={DEATH_CASE_PROCEDURES_IO_DATA} />,
    "common-investigation-mistakes": <CommonInvestigationMistakesContent data={COMMON_INVESTIGATION_MISTAKES_DATA} />,
    // Commanders - Transition of Command
    "cornerstone-attendance": <CornerstoneAttendanceContent />,
    "cor-incoming": <CertificateOfReliefContent />,
    "status-command-letter": <StatusCommandLetterContent />,
    "aviation-refresher": <AviationRefresherContent />,
    "30-day-safety": <SafetyPolicyContent />,
    "30-day-ctt": <CommandTeamTrainingContent />,
    "30-day-sarc": <SARCBriefContent />,
    "30-day-metl": <METLReviewContent />,
    "30-day-fund-control": <FundControlContent />,
    "30-day-aviation": <AviationSurveysContent />,
    "90-day-fap": <FAPTrainingContent />,
    // 60-90 Day Items
    "60-day-sapr": <SAPRPolicyContent />,
    "60-day-upfrp": <UPFRPSOPContent />,
    "60-day-philosophy": <CommandPhilosophyContent />,
    "90-day-pac": <PACPolicyContent />,
    "90-day-safety-survey": <SafetyClimateSurveyContent />,
    "90-day-deocs": <DEOCSContent />,
    // Annual Requirements
    "annual-deocs": <AnnualDEOCSContent />,
    "annual-safety-survey": <AnnualSafetySurveyContent />,
    "annual-te-review": <AnnualTEReviewContent />,
    "annual-inventory": <AnnualInventoryContent />,
    "annual-metl-review": <AnnualMETLReviewContent />,
    // Prior to Relinquishing Command
    "turnover-documentation": <StatusCommandLetterOutgoingContent />,
    "cor-outgoing": <CertificateOfReliefOutgoingContent />,
    "outgoing-deocs": <RelinquishDEOCSContent />,
    // Commanders - Admin Investigations
    "preliminary-inquiry": <PreliminaryInquiryContent data={PRELIMINARY_INQUIRY_CA_DATA} />,
    "command-investigations": <CommandInvestigationsContent data={COMMAND_INVESTIGATIONS_CA_DATA} />,
    "litigation-report-investigations": <LitigationReportInvestigationsContent data={LITIGATION_REPORT_INVESTIGATIONS_CA_DATA} />,
    "courts-boards-inquiry": <CourtsBoardsInquiryContent data={COURTS_BOARDS_INQUIRY_DATA} />,
    "convening-orders": <ConveningOrdersContent data={CONVENING_ORDERS_CA_DATA} />,
    "standards-of-proof": <StandardsOfProofContent data={STANDARDS_OF_PROOF_CA_DATA} />,
    "witness-procedures": <WitnessProceduresContent data={WITNESS_PROCEDURES_CA_DATA} />,
    "investigation-report-format": <InvestigationReportFormatContent data={INVESTIGATION_REPORT_FORMAT_CA_DATA} />,
    "line-of-duty": <LineOfDutyContent data={LINE_OF_DUTY_CA_DATA} />,
    "death-case-procedures": <DeathCaseProceduresContent data={DEATH_CASE_PROCEDURES_CA_DATA} />,
    "investigation-coordination": <InvestigationCoordinationContent data={INVESTIGATION_COORDINATION_DATA} />,
    // Commanders - Legal
    "njp-authority": <NJPAuthorityContent data={NJP_AUTHORITY_CA_DATA} />,
    "punishment-limits": <PunishmentLimitsContent data={PUNISHMENT_LIMITS_CA_DATA} />,
    "njp-process": <NJPProcessContent data={NJP_PROCESS_CA_DATA} />,
    "njp-appeals": <NJPAppealsContent data={NJP_APPEALS_CA_DATA} />,
    "summary-court-martial": <SummaryCourtMartialContent data={SUMMARY_COURT_MARTIAL_CA_DATA} />,
    "special-court-martial": <SpecialCourtMartialContent data={SPECIAL_COURT_MARTIAL_CA_DATA} />,
    "general-court-martial": <GeneralCourtMartialContent data={GENERAL_COURT_MARTIAL_CA_DATA} />,
    "disposition-options": <DispositionOptionsContent data={DISPOSITION_OPTIONS_CA_DATA} />,
    "adsep-authority": <AdminSepAuthorityContent data={ADMIN_SEP_AUTHORITY_CA_DATA} />,
    "service-characterization": <CharacterizationOfServiceContent data={CHARACTERIZATION_OF_SERVICE_CA_DATA} />,
    "religious-accommodation": <ReligiousAccommodationContent data={RELIGIOUS_ACCOMMODATION_CA_DATA} />,
    "request-mast": <RequestMastContent data={REQUEST_MAST_CA_DATA} />,
    "njp-procedures": <NJPProceduresContent data={NJP_PROCEDURES_DATA} />,
    "njp-punishment-limits": <PunishmentLimitsContent data={PUNISHMENT_LIMITS_CA_DATA} />,
    "separation-bases": <SeparationBasesContent data={SEPARATION_BASES_DATA} />,
    "adsep-due-process": <ADSEPDueProcessContent data={ADSEP_DUE_PROCESS_DATA} />,
    "appeal-rights": <AppealRightsContent data={APPEAL_RIGHTS_DATA} />,
    "adsep-commander-authority": <ADSEPAuthorityContent data={ADSEP_AUTHORITY_DATA} />,
    // Commanders - Suicide Prevention & Force Preservation
    "sppo-appointment": <SPPOAppointmentContent data={SPPO_APPOINTMENT_DATA} />,
    "force-preservation-council": <ForcePreservationCouncilContent data={FORCE_PRESERVATION_COUNCIL_DATA} />,
    "cirras-oversight": <CIRRASOversightContent data={CIRRAS_OVERSIGHT_DATA} />,
    "critical-stressors": <CriticalStressorsContent data={CRITICAL_STRESSORS_DATA} />,
    "lethal-means-safety": <LethalMeansSafetyContent data={LETHAL_MEANS_SAFETY_DATA} />,
    "postvention": <PostventionContent data={POSTVENTION_DATA} />,
    "mflc-program": <MFLCProgramContent data={MFLC_PROGRAM_DATA} />,
    "chaplain-support": <ChaplainSupportContent data={CHAPLAIN_SUPPORT_DATA} />,
    "cosc-oscar": <COSCOscarContent data={COSC_OSCAR_DATA} />,
    // Commanders - Training & Readiness
    "drrs-mc-overview": <DRRSMCOverviewContent data={DRRS_MC_OVERVIEW_DATA} />,
    "metl-development": <METLDevelopmentContent data={METL_DEVELOPMENT_DATA} />,
    "c-level-assessment": <CLevelAssessmentContent data={C_LEVEL_ASSESSMENT_DATA} />,
    "readiness-board": <ReadinessBoardContent data={READINESS_BOARD_DATA} />,
    "t-level-reporting": <TLevelReportingContent data={T_LEVEL_REPORTING_DATA} />,
    "p-level-reporting": <PLevelReportingContent data={P_LEVEL_REPORTING_DATA} />,
    "s-level-reporting": <SLevelReportingContent data={S_LEVEL_REPORTING_DATA} />,
    "r-level-reporting": <RLevelReportingContent data={R_LEVEL_REPORTING_DATA} />,
    "metl-annual-review": <METLAnnualReviewContent data={METL_ANNUAL_REVIEW_DATA} />,
    // Commanders - Equal Opportunity
    "eo-policy": <EOPolicyStatementContent data={EO_POLICY_STATEMENT_DATA} />,
    "eor-appointment": <EORepresentativeContent data={EO_REPRESENTATIVE_DATA} />,
    "eo-complaint-process": <EOComplaintProcessContent data={EO_COMPLAINT_PROCESS_DATA} />,
    "eo-investigation": <EOInvestigationContent data={EO_INVESTIGATION_DATA} />,
    "eo-climate-assessment": <EOClimateAssessmentContent data={EO_CLIMATE_ASSESSMENT_DATA} />,
    "eo-retaliation-prevention": <EORetaliationPreventionContent data={EO_RETALIATION_PREVENTION_DATA} />,
    // Commanders - Family Readiness & Casualty Affairs
    "upfrp-command-roles": <UPFRPCommandRolesContent data={UPFRP_COMMAND_ROLES_DATA} />,
    "drc-oversight": <DRCOversightContent data={DRC_OVERSIGHT_DATA} />,
    "limdu-coordinator": <LIMDUCoordinatorContent data={LIMDU_COORDINATOR_DATA} />,
    "caco-oversight": <CACOOversightContent data={CACO_OVERSIGHT_DATA} />,
    "ito-authority": <ITOAuthorityContent data={ITO_AUTHORITY_DATA} />,
    "rcc-referral": <RCCReferralContent data={RCC_REFERRAL_DATA} />,
    "ww-benefits": <WWBenefitsContent data={WW_BENEFITS_DATA} />,
    "fap-overview": <FAPOverviewContent data={FAP_OVERVIEW_DATA} />,
    "domestic-abuse-response": <DomesticAbuseResponseContent data={DOMESTIC_ABUSE_RESPONSE_DATA} />,
    "child-abuse-response": <ChildAbuseResponseContent data={CHILD_ABUSE_RESPONSE_DATA} />,
    "upfrp-sop": <UPFRPSOPRequirementContent data={UPFRP_SOP_DATA} />,
    "nok-notification": <NOKNotificationContent data={NOK_NOTIFICATION_DATA} />,
    "pcr-reporting": <PCRReportingContent data={PCR_REPORTING_DATA} />,
    // Commanders - Fiscal & Property Accountability
    "fund-control-training": <FundControlTrainingContent data={FUND_CONTROL_TRAINING_DATA} />,
    "budget-execution": <BudgetExecutionContent data={BUDGET_EXECUTION_DATA} />,
    "status-of-funds": <StatusOfFundsContent data={STATUS_OF_FUNDS_DATA} />,
    "ulo-validation": <ULOValidationContent data={ULO_VALIDATION_DATA} />,
    "supply-officer-appointment": <SupplyOfficerAppointmentContent data={SUPPLY_OFFICER_APPOINTMENT_DATA} />,
    "accountable-officer": <AccountableOfficerContent data={ACCOUNTABLE_OFFICER_DATA} />,
    "uac-prevention": <UACPreventionContent data={UAC_PREVENTION_DATA} />,
    "gtcc-oversight": <GTCCOversightContent data={GTCC_OVERSIGHT_DATA} />,
    "certificate-of-relief": <CertificateOfReliefFiscalContent data={CERTIFICATE_OF_RELIEF_FISCAL_DATA} />,
    // Commanders - Command Climate & Culture Programs
    "deocs-requirements": <DEOCSRequirementsContent data={DEOCS_REQUIREMENTS_DATA} />,
    "pac-program-overview": <PACProgramOverviewContent data={PAC_PROGRAM_OVERVIEW_DATA} />,
    "pac-policy-statement": <PACPolicyClimateContent data={PAC_POLICY_STATEMENT_DATA} />,
    "upfrp-sop-requirement": <UPFRPSOPClimateContent data={UPFRP_SOP_REQUIREMENT_DATA} />,
    "climate-surveys": <ClimateSurveysContent data={CLIMATE_SURVEYS_DATA} />,
    "command-team-training": <CommandTeamTrainingClimateContent data={COMMAND_TEAM_TRAINING_CLIMATE_DATA} />,
    "hazing-prevention": <HazingPreventionContent data={HAZING_PREVENTION_DATA} />,
    "harassment-response": <HarassmentResponseContent data={HARASSMENT_RESPONSE_DATA} />,
    "retaliation-prevention": <RetaliationPreventionContent data={RETALIATION_PREVENTION_DATA} />,
    "safety-policy-statement": <SafetyPolicyStatementContent data={SAFETY_POLICY_STATEMENT_DATA} />,
    "sapr-policy-statement": <SAPRPolicyStatementContent data={SAPR_POLICY_STATEMENT_DATA} />,
    // Commanders - Safety & Risk Management
    "safety-policy": <SafetyPolicyStatementDetailContent data={SAFETY_POLICY_DETAIL_DATA} />,
    "ground-safety": <GroundSafetyContent data={GROUND_SAFETY_DATA} />,
    "motor-vehicle-safety": <MotorVehicleSafetyContent data={MOTOR_VEHICLE_SAFETY_DATA} />,
    "orm-integration": <ORMIntegrationContent data={ORM_INTEGRATION_DATA} />,
    "mishap-reporting": <MishapReportingContent data={MISHAP_REPORTING_DATA} />,
    "pre-mishap-drills": <PreMishapDrillsContent data={PRE_MISHAP_DRILLS_DATA} />,
    "safety-climate-survey": <SafetyClimateSurveyDetailContent data={SAFETY_CLIMATE_SURVEY_DATA} />,
    "flight-schedule-approval": <FlightScheduleApprovalContent data={FLIGHT_SCHEDULE_APPROVAL_DATA} />,
    "mishap-investigation": <MishapInvestigationContent data={MISHAP_INVESTIGATION_DATA} />,
    "doss-relationship": <DOSSRelationshipContent data={DOSS_RELATIONSHIP_DATA} />,
    // Commanders - Substance Abuse & Urinalysis
    "inspection-testing": <InspectionTestingContent data={INSPECTION_TESTING_DATA} />,
    "substance-admin-actions": <SubstanceAdminActionsContent data={SUBSTANCE_ADMIN_ACTIONS_DATA} />,
    "uuc-appointment": <UUCAppointmentContent data={UUC_APPOINTMENT_DATA} />,
    "testing-requirements": <TestingRequirementsContent data={TESTING_REQUIREMENTS_DATA} />,
    "positive-result-procedures": <PositiveResultProceduresContent data={POSITIVE_RESULT_PROCEDURES_DATA} />,
    "treatment-referral": <TreatmentReferralContent data={TREATMENT_REFERRAL_DATA} />,
    // Commanders - SAPR
    "8-day-report": <EightDayReportContent data={EIGHT_DAY_REPORT_DATA} />,
    "expedited-transfer": <ExpeditedTransferContent data={EXPEDITED_TRANSFER_DATA} />,
    "hrrt": <HRRTContent data={HRRT_DATA} />,
    "sapr-policy-posting": <SAPRPolicyPostingContent data={SAPR_POLICY_POSTING_DATA} />,
    "sapr-reporting-types": <SAPRReportingTypesContent data={SAPR_REPORTING_TYPES_DATA} />,
    "sarc-coordination": <SARCCoordinationContent data={SARC_COORDINATION_DATA} />,
    "sapr-va-appointment": <SAPRVAAppointmentContent data={SAPR_VA_APPOINTMENT_DATA} />,
    "cmg-participation": <CMGParticipationContent data={CMG_PARTICIPATION_DATA} />,
    "mpo-sapr": <MPOSAPRContent data={MPO_SAPR_DATA} />,
    "sapr-retaliation": <SAPRRetaliationContent data={SAPR_RETALIATION_DATA} />,
    // Commanders - Inspector General & Inspections
    "cip-overview": <CIPOverviewContent data={CIP_OVERVIEW_DATA} />,
    "cgip-preparation": <CGIPPreparationContent data={CGIP_PREPARATION_DATA} />,
    "igmc-functional-areas": <IGMCFunctionalAreasContent data={IGMC_FUNCTIONAL_AREAS_DATA} />,
    "poam-management": <POAMManagementContent data={POAM_MANAGEMENT_DATA} />,
    "internal-inspections": <InternalInspectionsContent data={INTERNAL_INSPECTIONS_DATA} />,
    "smat-inspections": <SMATInspectionsContent data={SMAT_INSPECTIONS_DATA} />,
    "fsmao-analysis": <FSMAOAnalysisContent data={FSMAO_ANALYSIS_DATA} />,
    "pre-inspection-prep": <PreInspectionPrepContent data={PRE_INSPECTION_PREP_DATA} />,
    "corrective-action-tracking": <CorrectiveActionTrackingContent data={CORRECTIVE_ACTION_TRACKING_DATA} />,
    // Commanders - Personnel Administration & Career Management
    "fitrep-responsibilities": <FitnessReportContent data={FITREP_RESPONSIBILITIES_DATA} />,
    "jepes-commander": <JEPESCommanderRoleContent data={JEPES_COMMANDER_DATA} />,
    "6105-entries": <CounselingEntriesContent data={COUNSELING_ENTRIES_6105_DATA} />,
    "not-rec-authority": <NotRecAuthorityContent data={NOT_REC_AUTHORITY_DATA} />,
    "adverse-fitreps": <AdverseFitrepsContent data={ADVERSE_FITREPS_DATA} />,
    "meritorious-promotion-authority": <MeritoriousPromotionAuthorityContent data={MERITORIOUS_PROMOTION_DATA} />,
    "reenlistment-authority": <ReenlistmentAuthorityContent data={REENLISTMENT_AUTHORITY_DATA} />,
    "page-11-commander": <Page11CommanderContent data={PAGE_11_COMMANDER_DATA} />,
    "adverse-letters": <AdverseLettersContent data={ADVERSE_LETTERS_DATA} />,
    "transition-oversight": <TransitionOversightContent data={TRANSITION_OVERSIGHT_DATA} />,
    "mol-management": <MOLManagementContent data={MOL_MANAGEMENT_DATA} />,
    // Commanders - Public Affairs & Media Relations
    "media-engagement": <MediaEngagementContent data={MEDIA_ENGAGEMENT_DATA} />,
    "releasable-info": <ReleasableInformationContent data={RELEASABLE_INFORMATION_DATA} />,
    "casualty-info-release": <CasualtyInformationReleaseContent data={CASUALTY_INFORMATION_RELEASE_DATA} />,
    "social-media-policy": <SocialMediaPolicyContent data={SOCIAL_MEDIA_POLICY_DATA} />,
    "crisis-communication": <CrisisCommunicationContent data={CRISIS_COMMUNICATION_DATA} />,
    "opsec-public-statements": <OPSECPublicStatementsContent data={OPSEC_PUBLIC_STATEMENTS_DATA} />,
    "climate-messaging": <ClimateMessagingContent data={CLIMATE_MESSAGING_DATA} />,
    // Life Events
    "buying-a-home": <BuyingAHomeContent data={BUYING_A_HOME_DATA} />,
    "deploying": <DeployingContent data={DEPLOYING_DATA} />,
    "getting-married": <GettingMarriedContent data={GETTING_MARRIED_DATA} />,
    "getting-out": <GettingOutEASContent data={GETTING_OUT_EAS_DATA} />,
    "having-a-baby": <HavingABabyContent data={HAVING_A_BABY_DATA} />,
    "pcs-move": <PCSMoveContent data={PCS_MOVE_DATA} />,
    // Marine Online - Administration & Reference
    "mol-functional-modules": <FunctionalModulesPage data={{ modules: MOL_FUNCTIONAL_MODULES, references: MOL_DATA.references }} />,
    "mol-battalion-permissions": <BattalionPermissionsContent data={BATTALION_PERMISSIONS_DATA} references={BATTALION_PERMISSIONS_DATA.references} />,
    // Marine Online - Administrative Actions
    "mol-epar": <MOLFunctionalModuleContent data={MOL_FUNCTIONAL_MODULES["mol-epar"]} references={MOL_DATA.references} />,
    "mol-trouble-ticket-system": <MOLFunctionalModuleContent data={MOL_FUNCTIONAL_MODULES["mol-trouble-ticket-system"]} references={MOL_DATA.references} />,
    // Marine Online - Account Access
    "mol-login-cac-setup": <MOLFunctionalModuleContent data={MOL_FUNCTIONAL_MODULES["mol-login-cac-setup"]} references={MOL_DATA.references} />,
    "mol-password-pin-reset": <MOLFunctionalModuleContent data={MOL_FUNCTIONAL_MODULES["mol-password-pin-reset"]} references={MOL_DATA.references} />,
    "mol-view-permissions": <MOLFunctionalModuleContent data={MOL_FUNCTIONAL_MODULES["mol-view-permissions"]} references={MOL_DATA.references} />,
    "mol-two-factor-auth": <MOLFunctionalModuleContent data={MOL_FUNCTIONAL_MODULES["mol-two-factor-auth"]} references={MOL_DATA.references} />,
    "mol-personnel-accountability": <MOLFunctionalModuleContent data={MOL_FUNCTIONAL_MODULES["mol-personnel-accountability"]} references={MOL_DATA.references} />,
    // Marine Online - Personal Reports (Electronic Records)
    "mol-arcr": <MOLFunctionalModuleContent data={MOL_FUNCTIONAL_MODULES["mol-arcr"]} references={MOL_DATA.references} />,
    "mol-acip": <MOLFunctionalModuleContent data={MOL_FUNCTIONAL_MODULES["mol-acip"]} references={MOL_DATA.references} />,
    "mol-awards": <MOLFunctionalModuleContent data={MOL_FUNCTIONAL_MODULES["mol-awards"]} references={MOL_DATA.references} />,
    "mol-bir": <MOLFunctionalModuleContent data={MOL_FUNCTIONAL_MODULES["mol-bir"]} references={MOL_DATA.references} />,
    "mol-btr": <MOLFunctionalModuleContent data={MOL_FUNCTIONAL_MODULES["mol-btr"]} references={MOL_DATA.references} />,
    "mol-brs-tsp": <MOLFunctionalModuleContent data={MOL_FUNCTIONAL_MODULES["mol-brs-tsp"]} references={MOL_DATA.references} />,
    "mol-cei": <MOLFunctionalModuleContent data={MOL_FUNCTIONAL_MODULES["mol-cei"]} references={MOL_DATA.references} />,
    "mol-chro": <MOLFunctionalModuleContent data={MOL_FUNCTIONAL_MODULES["mol-chro"]} references={MOL_DATA.references} />,
    "mol-education": <MOLFunctionalModuleContent data={MOL_FUNCTIONAL_MODULES["mol-education"]} references={MOL_DATA.references} />,
    "mol-fcp": <MOLFunctionalModuleContent data={MOL_FUNCTIONAL_MODULES["mol-fcp"]} references={MOL_DATA.references} />,
    "mol-grade-report": <MOLFunctionalModuleContent data={MOL_FUNCTIONAL_MODULES["mol-grade-report"]} references={MOL_DATA.references} />,
    "mol-imr": <MOLFunctionalModuleContent data={MOL_FUNCTIONAL_MODULES["mol-imr"]} references={MOL_DATA.references} />,
    "mol-pay-leave": <MOLFunctionalModuleContent data={MOL_FUNCTIONAL_MODULES["mol-pay-leave"]} references={MOL_DATA.references} />,
    "mol-pers-tempo": <MOLFunctionalModuleContent data={MOL_FUNCTIONAL_MODULES["mol-pers-tempo"]} references={MOL_DATA.references} />,
    "mol-psmc": <MOLFunctionalModuleContent data={MOL_FUNCTIONAL_MODULES["mol-psmc"]} references={MOL_DATA.references} />,
    "mol-red": <MOLFunctionalModuleContent data={MOL_FUNCTIONAL_MODULES["mol-red"]} references={MOL_DATA.references} />,
    "mol-red-family": <MOLFunctionalModuleContent data={MOL_FUNCTIONAL_MODULES["mol-red-family"]} references={MOL_DATA.references} />,
    "mol-red-parents": <MOLFunctionalModuleContent data={MOL_FUNCTIONAL_MODULES["mol-red-parents"]} references={MOL_DATA.references} />,
    "mol-red-nok": <MOLFunctionalModuleContent data={MOL_FUNCTIONAL_MODULES["mol-red-nok"]} references={MOL_DATA.references} />,
    "mol-red-insurance": <MOLFunctionalModuleContent data={MOL_FUNCTIONAL_MODULES["mol-red-insurance"]} references={MOL_DATA.references} />,
    "mol-red-death-gratuity": <MOLFunctionalModuleContent data={MOL_FUNCTIONAL_MODULES["mol-red-death-gratuity"]} references={MOL_DATA.references} />,
    "mol-red-padd": <MOLFunctionalModuleContent data={MOL_FUNCTIONAL_MODULES["mol-red-padd"]} references={MOL_DATA.references} />,
    "mol-red-pay-arrears": <MOLFunctionalModuleContent data={MOL_FUNCTIONAL_MODULES["mol-red-pay-arrears"]} references={MOL_DATA.references} />,
    "mol-red-do-not-notify": <MOLFunctionalModuleContent data={MOL_FUNCTIONAL_MODULES["mol-red-do-not-notify"]} references={MOL_DATA.references} />,
    "mol-red-mia": <MOLFunctionalModuleContent data={MOL_FUNCTIONAL_MODULES["mol-red-mia"]} references={MOL_DATA.references} />,
    "mol-red-certification": <MOLFunctionalModuleContent data={MOL_FUNCTIONAL_MODULES["mol-red-certification"]} references={MOL_DATA.references} />,
    "mol-reserve-drill": <MOLFunctionalModuleContent data={MOL_FUNCTIONAL_MODULES["mol-reserve-drill"]} references={MOL_DATA.references} />,
    "mol-ros": <MOLFunctionalModuleContent data={MOL_FUNCTIONAL_MODULES["mol-ros"]} references={MOL_DATA.references} />,
    "mol-cultural-info": <MOLFunctionalModuleContent data={MOL_FUNCTIONAL_MODULES["mol-cultural-info"]} references={MOL_DATA.references} />,
    "mol-rank-mos": <MOLFunctionalModuleContent data={MOL_FUNCTIONAL_MODULES["mol-rank-mos"]} references={MOL_DATA.references} />,
    "mol-slate": <MOLFunctionalModuleContent data={MOL_FUNCTIONAL_MODULES["mol-slate"]} references={MOL_DATA.references} />,
    "mol-w2": <MOLFunctionalModuleContent data={MOL_FUNCTIONAL_MODULES["mol-w2"]} references={MOL_DATA.references} />,
    // Marine Online - Personal Updates
    "mol-personal-information": <MOLFunctionalModuleContent data={MOL_FUNCTIONAL_MODULES["mol-personal-information"]} references={MOL_DATA.references} />,
    "mol-contact-info": <MOLFunctionalModuleContent data={MOL_FUNCTIONAL_MODULES["mol-contact-info"]} references={MOL_DATA.references} />,
    "mol-foreign-travel": <MOLFunctionalModuleContent data={MOL_FUNCTIONAL_MODULES["mol-foreign-travel"]} references={MOL_DATA.references} />,
    "mol-gas-mask-helmet": <MOLFunctionalModuleContent data={MOL_FUNCTIONAL_MODULES["mol-gas-mask-helmet"]} references={MOL_DATA.references} />,
    "mol-race-ethnic": <MOLFunctionalModuleContent data={MOL_FUNCTIONAL_MODULES["mol-race-ethnic"]} references={MOL_DATA.references} />,
    "mol-religion": <MOLFunctionalModuleContent data={MOL_FUNCTIONAL_MODULES["mol-religion"]} references={MOL_DATA.references} />,
    "mol-language-skills": <MOLFunctionalModuleContent data={MOL_FUNCTIONAL_MODULES["mol-language-skills"]} references={MOL_DATA.references} />,
    // Marine Online - Self-Certified Transactions
    "mol-brs-opt-in": <MOLFunctionalModuleContent data={MOL_FUNCTIONAL_MODULES["mol-brs-opt-in"]} references={MOL_DATA.references} />,
    "mol-acknowledgements": <MOLFunctionalModuleContent data={MOL_FUNCTIONAL_MODULES["mol-acknowledgements"]} references={MOL_DATA.references} />,
    "mol-career-designation": <MOLFunctionalModuleContent data={MOL_FUNCTIONAL_MODULES["mol-career-designation"]} references={MOL_DATA.references} />,
    "mol-career-retirement-cert": <MOLFunctionalModuleContent data={MOL_FUNCTIONAL_MODULES["mol-career-retirement-cert"]} references={MOL_DATA.references} />,
    "mol-w2-electronic": <MOLFunctionalModuleContent data={MOL_FUNCTIONAL_MODULES["mol-w2-electronic"]} references={MOL_DATA.references} />,
  };

  const displayTitle = itemSlug === "sdap" ? "Special Duty Assignment Pay (SDAP)" : itemTitle;
  const contentToRender = contentMap[itemSlug] ?? <GenericContent title={itemTitle} />;

  // Get section title for breadcrumb
  const sectionData = SECTIONS[safeSection];
  const sectionTitle = sectionData?.title ?? toTitle(safeSection);
  const roleLabel = safeRole === "marines" ? "All Marines" : safeRole[0].toUpperCase() + safeRole.slice(1);

  const breadcrumbItems = [
    { label: roleLabel, href: `/roles/${safeRole}` },
    { label: sectionTitle, href: `/roles/${safeRole}/${safeSection}` },
    { label: displayTitle },
  ];

  return (
    <div className="space-y-8">
      <Breadcrumb items={breadcrumbItems} />
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">{displayTitle}</h1>
          <p className="text-zinc-700 dark:text-zinc-300">Detailed guidance, rates, and references.</p>
        </div>
        <Link prefetch={false} href={`/roles/${safeRole}/${safeSection}`} className="inline-flex items-center justify-center rounded-md border border-black/10 bg-white px-4 py-2 text-[var(--sa-navy)] shadow-sm transition hover:bg-[var(--sa-cream)]/60 dark:border-white/15 dark:bg-black/60 dark:text-[var(--sa-cream)] dark:hover:bg-white/10">Back</Link>
      </div>

      {contentToRender}
    </div>
  );
}

export function generateStaticParams(): { role: Role; section: string; item: string }[] {
  const roles: Role[] = ["marines", "administrators", "leaders", "commanders"];
  const payAllowancesSection = "pay-allowances";
  const payAllowancesSlugs = [
    "legacy-high-3-retirement-system",
    "blended-retirement-system",
    "continuation-pay",
    "transfer-of-educational-benefits",
    "thrift-savings-plan",
    "combat-zone-tax-exclusion",
    "military-state-tax-relief",
    "allotments",
    "basic-needs-allowance",
    "debt-management",
    "financial-hardship-assistance",
    "overpayment-repayment-plans",
    "flexible-spending-accounts",
    "basic-allowance-for-housing",
    "basic-allowance-for-subsistence",
    "cost-of-living-allowance",
    "overseas-housing-allowance",
    "demolition-pay",
    "dive-pay",
    "experimental-stress-duty",
    "aviation-career-incentive-pay",
    "flight-deck-duty",
    "foreign-language-proficiency-bonus",
    "hardship-duty-pay",
    "parachute-duty-pay",
    "maritime-vbss-duty",
    "sdap",
    "special-operations-pay",
    "toxic-materials-duty",
    "family-separation-allowance",
    "hostile-fire-pay",
    "imminent-danger-pay",
    "savings-deposit-program",
  ];
  const travelSection = "travel-transportation";
  const travelSlugs = [
    "pcs-orders-processing",
    "household-goods-shipment",
    "personally-procured-move",
    "pcs-storage-entitlements",
    "dislocation-allowance",
    "temporary-lodging-expense",
    "vehicle-processing-storage",
    "tad-orders",
    "per-diem-rates",
    "travel-voucher-submission",
    "dts-authorization",
    "government-travel-charge-card",
    "mileage-reimbursement",
    "advance-travel-pay",
    "leave-en-route-travel",
  ];
  const dependencySection = "dependency-management";
  const dependencySlugs = [
    "marriage-documentation",
    "birth-adoption-of-children",
    "stepchildren-addition",
    "secondary-dependents",
    "divorce-legal-separation",
    "death-of-dependents",
    "adult-children-age-21",
    "family-care-plan",
    "efmp",
    "emergency-contact-updates",
    "dependent-id-card-updates",
    "command-sponsorship-oconus",
  ];
  const personnelSection = "personnel-administration";
  const personnelSlugs = [
    "check-in-procedures",
    "sponsorship-programs",
    "initial-bah-bas-verification",
    "records-review",
    "security-clearance-transfer",
    "checkout-procedures",
    "final-pay-settlement",
    "records-transfer",
    "leave-settlement",
    "ompf-management",
    "page-11-entries",
    "srb-corrections",
    "awards-decorations",
    "medical-records",
    "training-jackets",
  ];
  const promotionsSection = "promotions-career-progression";
  const promotionsSlugs = [
    "promotion-documentation",
    "epme-requirements",
    "jepes",
    "cutting-score-verification",
    "promotion-warrants",
    "meritorious-promotions",
    "tig-corrections", // ref to records-corrections
    "date-of-rank-corrections", // ref to records-corrections
    "frocking",
    "fitness-reports",
    "perb",
    "mos-changes-lateral-moves",
    "mos-reclassification",
    "additional-mos-assignment",
    "primary-mos-changes",
  ];
  const deploymentSection = "deployment-support";
  const deploymentSlugs = [
    // Pre-Deployment
    "deployment-orders",
    "medical-readiness",
    "dental-readiness",
    "family-care-plan-validation", // ref to dependency-management
    "power-of-attorney", // ref to legal-disciplinary
    "sgli-beneficiary-updates", // ref to insurance-healthcare
    "will-preparation", // ref to legal-disciplinary
    // During Deployment
    "hfp-idp-verification",
    "fsa-processing",
    "dependent-support-services",
    "emergency-leave-requests",
    // Post-Deployment
    "reintegration-processing",
    "pay-entitlement-verification",
    "leave-accrual-review",
  ];
  const insuranceHealthcareSection = "insurance-healthcare";
  const insuranceHealthcareSlugs = [
    // Life Insurance
    "sgli",
    "fsgli",
    "tsgli",
    "vgli",
    "beneficiary-updates",
    // Healthcare Benefits
    "tricare-enrollment",
    "hcfsa",
    "efmp-medical-screening",
    "dental-coverage-fedvip",
    "vision-coverage",
  ];
  const educationTrainingSection = "education-training";
  const educationTrainingSlugs = [
    // Military Education
    "pme",
    "resident-non-resident-schools",
    "command-staff-college",
    "war-college",
    "mos-specific-training",
    // Civilian Education
    "tuition-assistance",
    "gi-bill-benefits",
    "gi-bill-transfer",
    "jst",
    "college-credit-military",
    // Professional Development
    "credentialing-programs",
    "certification-reimbursement",
    "language-training-dlpt",
    "technical-certifications",
    // Training Records
    "training-record-updates",
    "education-records",
  ];
  const separationsTransitionsSection = "separations-transitions";
  const separationsTransitionsSlugs = [
    // Voluntary Separation
    "eas",
    "voluntary-early-release",
    "resignation-officers",
    // Involuntary Separation
    "administrative-separation",
    "medical-separation",
    "failure-to-meet-standards",
    "entry-level-separation",
    // Retirement
    "active-duty-retirement",
    "reserve-retirement",
    "medical-retirement",
    "tdrl",
    "sbp-elections",
    "crsc",
    // Transition Programs
    "tap",
    "va-benefits",
    "employment-assistance",
    "education-benefits-transfer",
    "skillbridge",
  ];
  const reserveMobilizationSection = "reserve-mobilization";
  const reserveMobilizationSlugs = [
    // Reserve Administration
    "reserve-duty-status",
    "idt-pay",
    "annual-training-orders",
    "retirement-points",
    "reserve-promotion-system",
    // Mobilization/Activation
    "mobilization-orders",
    "ados",
    "adsw",
    "adt",
    "demobilization-processing",
  ];
  const legalDisciplinarySection = "legal-disciplinary";
  const legalDisciplinarySlugs = [
    // Administrative Actions
    "njp-article-15",
    "punitive-letters-reprimand",
    "page-11-counseling",
    "administrative-investigations",
    "rank-reduction",
    // Legal Support
    "court-martial-support",
    "legal-assistance",
    "power-of-attorney",
    "will-preparation",
    "vwap",
    "military-protective-orders",
    "ig-complaints",
  ];
  const recordsCorrectionsSection = "records-corrections";
  const recordsCorrectionsSlugs = [
    // Official Records
    "ompf-management",
    "srb-corrections",
    "medical-records",
    "training-jackets",
    // Record Corrections
    "tig-corrections",
    "date-of-rank-corrections",
    "page-11-entries",
    // Correction Boards
    "bcnr",
    "perb", // ref to promotions
  ];
  const marineOnlineSection = "marine-online";
  const marineOnlineSlugs = [
    // Account Access
    "mol-login-cac-setup",
    "mol-mobile-access",
    "mol-password-pin-reset",
    "mol-view-permissions",
    "mol-two-factor-auth",
    "mol-personnel-accountability",
    // Personal Reports (Electronic Records)
    "mol-arcr",
    "mol-acip",
    "mol-awards",
    "mol-bir",
    "mol-btr",
    "mol-brs-tsp",
    "mol-cei",
    "mol-chro",
    "mol-education",
    "mol-fcp",
    "mol-imr",
    "mol-pay-leave",
    "mol-pers-tempo",
    "mol-psmc",
    "mol-red",
    "mol-reserve-drill",
    "mol-ros",
    "mol-w2",
    // Personal Updates
    "mol-personal-information",
    "mol-contact-info",
    "mol-foreign-travel",
    "mol-gas-mask-helmet",
    "mol-race-ethnic",
    "mol-religion",
    "mol-language-skills",
    // Self-Certified Transactions
    "mol-brs-opt-in",
    "mol-acknowledgements",
    "mol-career-designation",
    "mol-career-retirement-cert",
    "mol-red-certification",
    "mol-w2-electronic",
    // Leave Management
    "mol-submit-leave",
    "mol-leave-balance",
    "mol-cancel-leave",
    // Administrative Actions
    "mol-epar",
    "mol-trouble-ticket-system",
    "mol-dependency-updates",
    "mol-address-changes",
    // Administration & Reference
    "mol-functional-modules",
    "mol-battalion-permissions",
  ];

  // ============================================
  // LIFE EVENTS SECTION
  // ============================================
  const lifeEventsSection = "life-events";
  const lifeEventsSlugs = [
    "deploying",
    "getting-out",
    "buying-a-home",
    "getting-married",
    "having-a-baby",
    "pcs-move",
  ];

  // ============================================
  // LEADER-SPECIFIC SECTIONS
  // ============================================
  const leadersAccountabilitySection = "leaders-accountability-discipline";
  const leadersAccountabilitySlugs = [
    "njp-authority-levels",
    "njp-recommendation-documentation",
    "article-31b-rights",
    "progressive-discipline",
    "ua-desertion-reporting",
    "adsep-overview",
    "legal-hold-investigations",
    "hazing-harassment-reporting",
    "page11-vs-6105-decision-guide",
    "counseling-refusal-procedures",
  ];
  const leadersAwardsSection = "leaders-awards-recognition";
  const leadersAwardsSlugs = [
    "writing-award-recommendations",
    "citation-format-requirements",
    "common-award-errors",
    "iaps-submission",
    "award-routing-approval",
    "award-timeline-management",
    "award-troubleshooting",
  ];
  const leadersCareerSection = "leaders-career-development";
  const leadersCareerSlugs = [
    "reenlistment-packages",
    "reenlistment-prerequisites",
    "pme-enrollment-tracking",
    "mos-school-recommendations",
    "meritorious-promotion-packages",
    "cutting-score-guidance",
    "career-counseling",
    "enlisted-commissioning-programs",
    "lateral-move-guidance",
    "meritorious-promotion-preparation",
    "pme-tracking-completion",
    "special-duty-assignment-screening",
    "supporting-reenlistment-decisions",
    "warrant-officer-program-support",
  ];
  const leadersCounselingSection = "leaders-counseling-documentation";
  const leadersCounselingSlugs = [
    "page11-vs-6105",
    "writing-page11-entries",
    "6105-counseling-requirements",
    "nploc-guidance",
    "mro-counseling",
    "rebuttal-rights-timelines",
    "common-documentation-errors",
    "counseling-fundamentals",
    "follow-on-counseling-sessions",
    "initial-counseling-session",
    "required-counseling-occasions",
    "six-functional-areas",
    "smart-goals",
  ];
  const leadersDeploymentSection = "leaders-deployment-readiness";
  const leadersDeploymentSlugs = [
    "pre-deployment-checklist",
    "sgli-beneficiary-verification",
    "dd93-page2-verification",
    "family-care-plan-requirements",
    "deers-id-currency",
    "poa-guidance",
    "post-deployment-actions",
    "family-readiness-responsibilities",
    "deployment-training-events",
    "individual-readiness-requirements",
    "obligated-service-deployment",
    "physical-fitness-readiness",
    "supporting-ias-and-tad",
    "upfrp-overview",
  ];
  const leadersPerformanceSection = "leaders-performance-evaluation";
  const leadersPerformanceSlugs = [
    "jepes-overview",
    "jepes-reporting-chain",
    "jepes-reporting-occasions",
    "jepes-command-input-metrics",
    "not-rec",
    "jepes-objective-scores",
    "jepes-debriefing",
    "fitness-reports-leaders",
    "billet-accomplishments",
    "jepes-corrective-procedures",
    "not-rec-appeal-process",
    "performance-evaluation-appeals",
  ];
  const leadersPersonnelSection = "leaders-personnel-accountability";
  const leadersPersonnelSlugs = [
    "daily-accountability-fundamentals",
    "gains-losses-processing",
    "leave-liberty-management",
    "ua-procedures",
    "tad-detachment-tracking",
    "muster-formation-procedures",
    "record-keeping-documentation",
    "marine-leader-notebooks",
  ];
  const leadersSystemsSection = "leaders-administrative-systems";
  const leadersSystemsSlugs = [
    "mctfs-overview",
    "mol-navigation",
    "jepes-system-navigation",
    "tfrs-overview",
    "unit-diary-reporting",
    "training-information-systems",
    "mco-quick-reference",
  ];
  const leadersConductingSection = "leaders-conducting-investigations";
  const leadersConductingSlugs = [
    "review-convening-order",
    "contact-judge-advocate",
    "coordinate-other-investigations",
    "preliminary-inquiry-io",
    "command-investigation-io",
    "litigation-report-io",
    "collecting-evidence",
    "interviewing-witnesses",
    "standards-of-proof-io",
    "investigation-report-format-io",
    "lod-misconduct-determinations",
    "death-case-procedures-io",
    "common-investigation-mistakes",
  ];

  const params: { role: Role; section: string; item: string }[] = [];
  for (const role of roles) {
    for (const item of payAllowancesSlugs) params.push({ role, section: payAllowancesSection, item });
    for (const item of travelSlugs) params.push({ role, section: travelSection, item });
    for (const item of dependencySlugs) params.push({ role, section: dependencySection, item });
    for (const item of personnelSlugs) params.push({ role, section: personnelSection, item });
    for (const item of promotionsSlugs) params.push({ role, section: promotionsSection, item });
    for (const item of deploymentSlugs) params.push({ role, section: deploymentSection, item });
    for (const item of insuranceHealthcareSlugs) params.push({ role, section: insuranceHealthcareSection, item });
    for (const item of educationTrainingSlugs) params.push({ role, section: educationTrainingSection, item });
    for (const item of separationsTransitionsSlugs) params.push({ role, section: separationsTransitionsSection, item });
    for (const item of reserveMobilizationSlugs) params.push({ role, section: reserveMobilizationSection, item });
    for (const item of legalDisciplinarySlugs) params.push({ role, section: legalDisciplinarySection, item });
    for (const item of recordsCorrectionsSlugs) params.push({ role, section: recordsCorrectionsSection, item });
    for (const item of marineOnlineSlugs) params.push({ role, section: marineOnlineSection, item });
    for (const item of lifeEventsSlugs) params.push({ role, section: lifeEventsSection, item });
  }

  // Leaders-only sections
  const leaderRole: Role = "leaders";
  for (const item of leadersAccountabilitySlugs) params.push({ role: leaderRole, section: leadersAccountabilitySection, item });
  for (const item of leadersAwardsSlugs) params.push({ role: leaderRole, section: leadersAwardsSection, item });
  for (const item of leadersCareerSlugs) params.push({ role: leaderRole, section: leadersCareerSection, item });
  for (const item of leadersCounselingSlugs) params.push({ role: leaderRole, section: leadersCounselingSection, item });
  for (const item of leadersDeploymentSlugs) params.push({ role: leaderRole, section: leadersDeploymentSection, item });
  for (const item of leadersPerformanceSlugs) params.push({ role: leaderRole, section: leadersPerformanceSection, item });
  for (const item of leadersPersonnelSlugs) params.push({ role: leaderRole, section: leadersPersonnelSection, item });
  for (const item of leadersSystemsSlugs) params.push({ role: leaderRole, section: leadersSystemsSection, item });
  for (const item of leadersConductingSlugs) params.push({ role: leaderRole, section: leadersConductingSection, item });

  // Commanders-only sections
  const commanderRole: Role = "commanders";

  // Group A: Command Authority
  const commandersAuthoritySection = "commanders-authority-legal";
  const commandersAuthoritySlugs = [
    "njp-authority",
    "njp-process",
    "njp-appeals",
    "summary-court-martial",
    "special-court-martial",
    "general-court-martial",
    "disposition-options",
    "adsep-authority",
    "service-characterization",
    "religious-accommodation",
    "request-mast",
  ];

  const commandersPersonnelSection = "commanders-personnel-career";
  const commandersPersonnelSlugs = [
    "adverse-fitreps",
    "meritorious-promotion-authority",
    "reenlistment-authority",
    "transition-oversight",
    "page-11-commander",
    "adverse-letters",
  ];

  // Group B: Command Climate and Welfare
  const commandersClimateSection = "commanders-climate-culture";
  const commandersClimateSlugs = [
    "deocs-requirements",
    "climate-surveys",
    "command-team-training",
    "safety-policy-statement",
    "sapr-policy-statement",
    "upfrp-sop-requirement",
    "pac-policy-statement",
    "pac-program-overview",
    "hazing-prevention",
    "harassment-response",
    "retaliation-prevention",
  ];

  const commandersSaprSection = "commanders-sapr";
  const commandersSaprSlugs: string[] = [];

  const commandersSuicideSection = "commanders-suicide-prevention";
  const commandersSuicideSlugs = [
    "sppo-appointment",
    "force-preservation-council",
    "postvention",
    "cirras-oversight",
    "critical-stressors",
    "lethal-means-safety",
    "mflc-program",
    "chaplain-support",
    "cosc-oscar",
  ];

  const commandersFamilySection = "commanders-family-readiness";
  const commandersFamilySlugs = [
    "upfrp-sop",
    "upfrp-command-roles",
    "drc-oversight",
    "fap-overview",
    "child-abuse-response",
    "domestic-abuse-response",
    "caco-oversight",
    "pcr-reporting",
    "nok-notification",
    "limdu-coordinator",
    "ito-authority",
    "rcc-referral",
    "ww-benefits",
  ];

  const commandersSubstanceSection = "commanders-substance-abuse";
  const commandersSubstanceSlugs = [
    "uuc-appointment",
    "testing-requirements",
    "inspection-testing",
    "positive-result-procedures",
    "substance-admin-actions",
    "treatment-referral",
  ];

  const commandersEOSection = "commanders-equal-opportunity";
  const commandersEOSlugs = [
    "eor-appointment",
    "eo-policy",
    "eo-climate-assessment",
    "eo-complaint-process",
    "eo-investigation",
    "eo-retaliation-prevention",
  ];

  const commandersLegalSection = "commanders-legal-discipline";
  const commandersLegalSlugs: string[] = [];

  const commandersAdminInvestigationsSection = "commanders-admin-investigations";
  const commandersAdminInvestigationsSlugs = [
    "preliminary-inquiry",
    "command-investigations",
    "litigation-report-investigations",
    "courts-boards-inquiry",
    "convening-orders",
    "standards-of-proof",
    "witness-procedures",
    "investigation-report-format",
    "line-of-duty",
    "death-case-procedures",
    "investigation-coordination",
  ];

  // Group C: Readiness and Resources
  const commandersTrainingSection = "commanders-training-readiness";
  const commandersTrainingSlugs = [
    "commanders-override",
    "metl-assessment",
  ];

  const commandersFiscalSection = "commanders-fiscal-property";
  const commandersFiscalSlugs = [
    "accountable-officer",
    "budget-execution",
    "status-of-funds",
    "fund-control-training",
    "uac-prevention",
    "ulo-validation",
    "gtcc-oversight",
    "certificate-of-relief",
    "supply-officer-appointment",
    "annual-inventory",
  ];


  // Group D: Compliance and Security
  const commandersSafetySection = "commanders-safety-risk";
  const commandersSafetySlugs = [
    "safety-policy",
    "safety-climate-survey",
    "ground-safety",
    "orm-integration",
    "doss-relationship",
    "flight-schedule-approval",
    "pre-mishap-drills",
    "mishap-reporting",
    "mishap-investigation",
    "motor-vehicle-safety",
  ];

  const commandersIGSection = "commanders-inspector-general";
  const commandersIGSlugs: string[] = [];

  const commandersPublicAffairsSection = "commanders-public-affairs";
  const commandersPublicAffairsSlugs = [
    "crisis-communication",
    "opsec-public-statements",
    "climate-messaging",
  ];

  const commandersTransitionSection = "commanders-transition-command";
  const commandersTransitionSlugs = [
    "cornerstone-attendance",
    "cor-incoming",
    "mol-management",
    "status-command-letter",
    "aviation-refresher",
    "30-day-safety",
    "30-day-ctt",
    "30-day-sarc",
    "30-day-metl",
    "30-day-fund-control",
    "30-day-aviation",
    "60-day-sapr",
    "60-day-upfrp",
    "60-day-philosophy",
    "90-day-pac",
    "90-day-safety-survey",
    "90-day-deocs",
    "90-day-fap",
    "annual-deocs",
    "annual-safety-survey",
    "annual-te-review",
    "annual-inventory",
    "annual-metl-review",
    "outgoing-deocs",
    "turnover-documentation",
    "cor-outgoing",
  ];

  // Push all commander slugs
  for (const item of commandersAuthoritySlugs) params.push({ role: commanderRole, section: commandersAuthoritySection, item });
  for (const item of commandersPersonnelSlugs) params.push({ role: commanderRole, section: commandersPersonnelSection, item });
  for (const item of commandersClimateSlugs) params.push({ role: commanderRole, section: commandersClimateSection, item });
  for (const item of commandersSaprSlugs) params.push({ role: commanderRole, section: commandersSaprSection, item });
  for (const item of commandersSuicideSlugs) params.push({ role: commanderRole, section: commandersSuicideSection, item });
  for (const item of commandersFamilySlugs) params.push({ role: commanderRole, section: commandersFamilySection, item });
  for (const item of commandersSubstanceSlugs) params.push({ role: commanderRole, section: commandersSubstanceSection, item });
  for (const item of commandersEOSlugs) params.push({ role: commanderRole, section: commandersEOSection, item });
  for (const item of commandersLegalSlugs) params.push({ role: commanderRole, section: commandersLegalSection, item });
  for (const item of commandersAdminInvestigationsSlugs) params.push({ role: commanderRole, section: commandersAdminInvestigationsSection, item });
  for (const item of commandersTrainingSlugs) params.push({ role: commanderRole, section: commandersTrainingSection, item });
  for (const item of commandersFiscalSlugs) params.push({ role: commanderRole, section: commandersFiscalSection, item });
  for (const item of commandersSafetySlugs) params.push({ role: commanderRole, section: commandersSafetySection, item });
  for (const item of commandersIGSlugs) params.push({ role: commanderRole, section: commandersIGSection, item });
  for (const item of commandersPublicAffairsSlugs) params.push({ role: commanderRole, section: commandersPublicAffairsSection, item });
  for (const item of commandersTransitionSlugs) params.push({ role: commanderRole, section: commandersTransitionSection, item });

  return params;
}

function GenericContent({ title }: { title: string }) {
  return (
    <div className="grid gap-6 lg:grid-cols-3">
      <div className="lg:col-span-2 space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Overview</h2>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">Content coming soon for {title}. In the meantime, use official references and your unit admin for specific actions.</p>
        </section>
      </div>
      <aside className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">References</h3>
          <ul className="mt-3 space-y-2 text-sm">
            <li><a className="text-[var(--sa-red)] hover:underline" href="https://www.dfas.mil/militarymembers/payentitlements/" target="_blank" rel="noopener noreferrer">DFAS Pay Entitlements</a></li>
            <li><a className="text-[var(--sa-red)] hover:underline" href="https://www.travel.dod.mil/Allowances/" target="_blank" rel="noopener noreferrer">DoD Travel Allowances</a></li>
          </ul>
        </section>
      </aside>
    </div>
  );
}


