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
import { PromotionDocumentationContent } from "../../../../../components/PromotionDocumentationContent";
import { JEPESContent } from "../../../../../components/JEPESContent";
import { CuttingScoreVerificationContent } from "../../../../../components/CuttingScoreVerificationContent";
import { PromotionWarrantsContent } from "../../../../../components/PromotionWarrantsContent";
import { MeritoriousPromotionsContent } from "../../../../../components/MeritoriousPromotionsContent";
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
// Commanders - Transition of Command
import { CornerstoneAttendanceContent } from "../../../../../components/commanders/transition/CornerstoneAttendanceContent";
import { CertificateOfReliefContent } from "../../../../../components/commanders/transition/CertificateOfReliefContent";
import { SafetyPolicyContent } from "../../../../../components/commanders/transition/SafetyPolicyContent";

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
    { title: "MCO 7220.12R", desc: "Marine Corps SDAP Program", url: "https://www.marines.mil/", type: "Order" },
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
    { title: "MCO 7220.52F", desc: "Marine Corps Aviation Incentive Pay Program.", url: "https://www.marines.mil/", type: "Order" },
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
    { title: "MCO 7220.52", desc: "Marine Corps Foreign Language Proficiency Bonus program.", url: "https://www.marines.mil/", type: "Order" },
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
    { rank: "O-10 to O-7", withDependents: 6151.81, withoutDependents: 4997.43 },
    { rank: "O-6", withDependents: 5539.14, withoutDependents: 4584.74 },
    { rank: "O-5", withDependents: 5339.17, withoutDependents: 4415.71 },
    { rank: "O-4", withDependents: 4706.58, withoutDependents: 4092.11 },
    { rank: "O-3", withDependents: 3893.91, withoutDependents: 3279.49 },
    { rank: "O-2", withDependents: 3324.93, withoutDependents: 2601.45 },
    { rank: "O-1", withDependents: 2972.28, withoutDependents: 2190.58 },
    { rank: "O-3E", withDependents: 4184.78, withoutDependents: 3541.26 },
    { rank: "O-2E", withDependents: 3775.79, withoutDependents: 3010.47 },
    { rank: "O-1E", withDependents: 3488.54, withoutDependents: 2588.72 },
    { rank: "W-5", withDependents: 4542.95, withoutDependents: 4157.52 },
    { rank: "W-4", withDependents: 4164.85, withoutDependents: 3692.15 },
    { rank: "W-3", withDependents: 3815.78, withoutDependents: 3103.16 },
    { rank: "W-2", withDependents: 3510.36, withoutDependents: 2755.97 },
    { rank: "W-1", withDependents: 3035.94, withoutDependents: 2306.89 },
    { rank: "E-9", withDependents: 3997.60, withoutDependents: 3032.31 },
    { rank: "E-8", withDependents: 3684.91, withoutDependents: 2783.21 },
    { rank: "E-7", withDependents: 3421.30, withoutDependents: 2377.83 },
    { rank: "E-6", withDependents: 3418.13, withoutDependents: 2301.95 },
    { rank: "E-5", withDependents: 3418.13, withoutDependents: 2301.95 },
    { rank: "E-4", withDependents: 3418.13, withoutDependents: 2301.95 },
    { rank: "E-3", withDependents: 3418.13, withoutDependents: 2269.25 },
    { rank: "E-2", withDependents: 3418.13, withoutDependents: 1951.12 },
    { rank: "E-1", withDependents: 3418.13, withoutDependents: 1802.10 },
  ],
  references: [
    { title: "JTR Chapter 5 Section 0505", desc: "DLA entitlement, eligibility, and fiscal year limitations.", url: "https://media.defense.gov/2022/Jan/04/2002917147/-1/-1/0/JTR.PDF", type: "Policy" },
    { title: "MCO 1000.6", desc: "Marine Corps assignment and travel policy.", url: "https://www.marines.mil/News/Publications/ELECTRONIC-LIBRARY/Electronic-Library-Display/Article/899526/mco-10006/", type: "Policy" },
    { title: "37 U.S.C. 477", desc: "Statutory authority for DLA payment.", url: "https://www.law.cornell.edu/uscode/text/37/477", type: "Policy" },
    { title: "DTMO DLA Rate Lookup", desc: "Current DLA rates by grade and dependency status.", url: "https://www.travel.dod.mil/Travel-Transportation-Rates/Dislocation-Allowance/", type: "Website" },
    { title: "2025 DLA Rate Table (PDF)", desc: "Official DLA rates effective 1 January 2025.", url: "https://www.travel.dod.mil/Portals/119/Documents/DLA/DLA-2025-01-01.pdf", type: "Website" },
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
    { title: "MCO 1000.6 (Assignment Systems)", url: "https://www.marines.mil/", isQuickLink: false },
  ],
};

const RECORDS_TRANSFER_DATA = {
  references: [
    { title: "MOL OMPF Viewer", url: "https://mol.tfs.usmc.mil/", isQuickLink: true },
    { title: "ORMA (Record Corrections)", url: "https://mol.tfs.usmc.mil/", isQuickLink: true },
    { title: "HQMC MMRP", url: "https://www.manpower.usmc.mil/webcenter/portal/MMRP_pub", isQuickLink: true },
    { title: "MCO P1070.12K (IRAM)", url: "https://www.marines.mil/", isQuickLink: false },
    { title: "MCO 1070.1 (Individual Records)", url: "https://www.marines.mil/", isQuickLink: false },
    { title: "BUMEDINST 6150.29 (Medical Records)", url: "https://www.med.navy.mil/", isQuickLink: false },
  ],
};

const LEAVE_SETTLEMENT_DATA = {
  references: [
    { title: "MOL Leave Management", url: "https://mol.tfs.usmc.mil/", isQuickLink: true },
    { title: "myPay (Leave Balance)", url: "https://mypay.dfas.mil/", isQuickLink: true },
    { title: "HQMC MMRP", url: "https://www.manpower.usmc.mil/webcenter/portal/MMRP_pub", isQuickLink: true },
    { title: "MCO 1050.3J (Leave Manual)", url: "https://www.marines.mil/", isQuickLink: false },
    { title: "JTR (Joint Travel Regulations)", url: "https://www.travel.dod.mil/Policy-Regulations/Joint-Travel-Regulations/", isQuickLink: false },
    { title: "DoD FMR 7000.14-R Volume 7A", url: "https://comptroller.defense.gov/FMR/", isQuickLink: false },
  ],
};

const OMPF_MANAGEMENT_DATA = {
  references: [
    { title: "MOL OMPF Viewer", url: "https://mol.tfs.usmc.mil/", isQuickLink: true },
    { title: "ORMA (Online Record Modular Application)", url: "https://mol.tfs.usmc.mil/", isQuickLink: true },
    { title: "HQMC MMRP", url: "https://www.manpower.usmc.mil/webcenter/portal/MMRP_pub", isQuickLink: true },
    { title: "MCO P1070.12K (IRAM)", url: "https://www.marines.mil/", isQuickLink: false },
    { title: "MMRP (Military Manpower Records Program)", url: "https://www.manpower.usmc.mil/", isQuickLink: false },
    { title: "NPRC (National Personnel Records Center)", url: "https://www.archives.gov/veterans", isQuickLink: false },
  ],
};

const SRB_CORRECTIONS_DATA = {
  references: [
    { title: "MOL (BIR/BTR Access)", url: "https://mol.tfs.usmc.mil/", isQuickLink: true },
    { title: "ORMA", url: "https://mol.tfs.usmc.mil/", isQuickLink: true },
    { title: "HQMC MMRP", url: "https://www.manpower.usmc.mil/webcenter/portal/MMRP_pub", isQuickLink: true },
    { title: "MCO P1070.12K (IRAM)", url: "https://www.marines.mil/", isQuickLink: false },
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
    { title: "NAVMC 11533 (Personal Award Recommendation)", url: "https://www.marines.mil/", isQuickLink: false },
    { title: "MARADMIN Award Messages", url: "https://www.marines.mil/News/Messages/", isQuickLink: false },
  ],
};

const TRAINING_RECORD_DATA = {
  references: [
    { title: "MOL (BTR Access)", url: "https://mol.tfs.usmc.mil/", isQuickLink: true },
    { title: "MarineNet", url: "https://www.marinenet.usmc.mil/", isQuickLink: true },
    { title: "MCTIMS", url: "https://www.trngcmd.marines.mil/", isQuickLink: true },
    { title: "MCO 1553.4B (Training and Readiness Manual)", url: "https://www.marines.mil/", isQuickLink: false },
    { title: "COOL (Credentialing Opportunities On-Line)", url: "https://www.cool.osd.mil/usmc/", isQuickLink: false },
    { title: "JST (Joint Services Transcript)", url: "https://jst.doded.mil/", isQuickLink: false },
  ],
};

const EDUCATION_RECORDS_DATA = {
  references: [
    { title: "MOL (Education Record)", url: "https://mol.tfs.usmc.mil/", isQuickLink: true },
    { title: "JST Portal", url: "https://jst.doded.mil/", isQuickLink: true },
    { title: "MCCS Voluntary Education", url: "https://www.usmc-mccs.org/services/education/", isQuickLink: true },
    { title: "MCO 1560.25 (Tuition Assistance)", url: "https://www.marines.mil/", isQuickLink: false },
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
    { title: "MCO 1610.11D - Performance Evaluation Appeals", url: "https://www.marines.mil/", isQuickLink: true },
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
    { title: "MCO 1320.11H (Deployment)", url: "https://www.marines.mil/News/Publications/MCPEL/", isQuickLink: false },
    { title: "IPAC", url: "#", isQuickLink: false },
  ],
};

const MEDICAL_READINESS_DATA = {
  references: [
    { title: "MRRS (Medical Readiness)", url: "https://mrrs.sscno.nmci.navy.mil/", isQuickLink: true },
    { title: "MOL Medical Module", url: "https://mol.tfs.usmc.mil/", isQuickLink: true },
    { title: "Branch Medical Clinic", url: "#", isQuickLink: true },
    { title: "MCO 6100.13 (Medical/Dental Readiness)", url: "https://www.marines.mil/News/Publications/MCPEL/", isQuickLink: false },
    { title: "DoDI 6025.19 (Individual Medical Readiness)", url: "https://www.esd.whs.mil/Directives/issuances/dodi/", isQuickLink: false },
  ],
};

const DENTAL_READINESS_DATA = {
  references: [
    { title: "MOL Dental Status", url: "https://mol.tfs.usmc.mil/", isQuickLink: true },
    { title: "Dental Clinic", url: "#", isQuickLink: true },
    { title: "MCO 6100.13 (Medical/Dental Readiness)", url: "https://www.marines.mil/News/Publications/MCPEL/", isQuickLink: false },
    { title: "BUMED Dental Readiness", url: "https://www.med.navy.mil/", isQuickLink: false },
  ],
};

const FAMILY_CARE_PLAN_VALIDATION_DATA = {
  references: [
    { title: "MCO 1740.13C (Family Care)", url: "https://www.marines.mil/News/Publications/MCPEL/", isQuickLink: true },
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
    { title: "MCO 1553.4B", url: "https://www.marines.mil/", isQuickLink: true },
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
    { title: "MCO 1553.4B", url: "https://www.marines.mil/", isQuickLink: false },
    { title: "Joint Chiefs of Staff PME Policy", url: "https://www.jcs.mil/", isQuickLink: false },
  ],
};

const COMMAND_STAFF_COLLEGE_DATA = {
  references: [
    { title: "Marine Corps Command and Staff College", url: "https://www.usmcu.edu/CSC/", isQuickLink: true },
    { title: "MCO 1553.4B", url: "https://www.marines.mil/", isQuickLink: true },
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
    { title: "MCO 1510.118A", url: "https://www.marines.mil/", isQuickLink: true },
    { title: "TECOM Training Information", url: "https://www.trngcmd.marines.mil/", isQuickLink: true },
    { title: "JEPES Marine Corps Order", url: "https://www.marines.mil/", isQuickLink: false },
    { title: "MOS Manual", url: "https://www.marines.mil/", isQuickLink: false },
  ],
};

// Education & Training - Civilian Education
const TUITION_ASSISTANCE_DATA = {
  references: [
    { title: "DoD Tuition Assistance Policy", url: "https://www.dodmou.com/", isQuickLink: true },
    { title: "Marine Corps TA Request (via MOL)", url: "https://www.mol.usmc.mil/", isQuickLink: true },
    { title: "MCO 1560.25A", url: "https://www.marines.mil/", isQuickLink: true },
    { title: "JEPES Marine Corps Order", url: "https://www.marines.mil/", isQuickLink: false },
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
    { title: "MCO 1900.16 - Separation and Retirement Manual", url: "https://www.marines.mil/", isQuickLink: true },
    { title: "MCO 1040.31 - Transition Readiness Program", url: "https://www.marines.mil/", isQuickLink: true },
    { title: "TAP Website", url: "https://www.tapevents.mil/", isQuickLink: true },
    { title: "DD-214 Information", url: "https://www.archives.gov/veterans/military-service-records", isQuickLink: false },
  ],
};

const VOLUNTARY_EARLY_RELEASE_DATA = {
  references: [
    { title: "MCO 1900.16 - Separation and Retirement Manual", url: "https://www.marines.mil/", isQuickLink: true },
    { title: "MARADMIN Messages", url: "https://www.marines.mil/News/Messages/MARADMINS/", isQuickLink: false },
  ],
};

const RESIGNATION_OFFICERS_DATA = {
  references: [
    { title: "MCO 1900.16 - Separation and Retirement Manual", url: "https://www.marines.mil/", isQuickLink: true },
    { title: "10 U.S.C. Officer Separations", url: "https://uscode.house.gov/", isQuickLink: false },
    { title: "MMOA", url: "https://www.manpower.usmc.mil/", isQuickLink: false },
  ],
};

// Separations & Transitions - Involuntary Separation
const ADMINISTRATIVE_SEPARATION_DATA = {
  references: [
    { title: "MCO 1900.16 - Separation and Retirement Manual", url: "https://www.marines.mil/", isQuickLink: true },
    { title: "Legal Assistance Office", url: "https://www.marines.mil/", isQuickLink: false },
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
    { title: "MCO 1900.16 - Separation and Retirement Manual", url: "https://www.marines.mil/", isQuickLink: true },
    { title: "MCO 6110.3A - Physical Fitness", url: "https://www.marines.mil/", isQuickLink: true },
    { title: "MCO 6110.3 - Body Composition Program", url: "https://www.marines.mil/", isQuickLink: false },
  ],
};

const ENTRY_LEVEL_SEPARATION_DATA = {
  references: [
    { title: "MCO 1900.16 - Separation and Retirement Manual", url: "https://www.marines.mil/", isQuickLink: true },
  ],
};

// Separations & Transitions - Retirement
const ACTIVE_DUTY_RETIREMENT_DATA = {
  references: [
    { title: "10 U.S.C. Chapter 71 - Retirement", url: "https://uscode.house.gov/", isQuickLink: true },
    { title: "MCO 1900.16 - Separation and Retirement Manual", url: "https://www.marines.mil/", isQuickLink: true },
    { title: "DFAS Retired Pay", url: "https://www.dfas.mil/retiredmilitary/", isQuickLink: true },
  ],
};

const RESERVE_RETIREMENT_DATA = {
  references: [
    { title: "10 U.S.C. Chapter 1223 - Reserve Retirement", url: "https://uscode.house.gov/", isQuickLink: true },
    { title: "MCO 1900.16 - Separation and Retirement Manual", url: "https://www.marines.mil/", isQuickLink: false },
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
    { title: "MCO 1040.31 - Transition Readiness Program", url: "https://www.marines.mil/", isQuickLink: true },
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
    { title: "NAVMC 1700.2B - SkillBridge Employment Training", url: "https://www.marines.mil/", isQuickLink: true },
    { title: "MARADMIN 280/24 - SkillBridge Interim Guidance", url: "https://www.marines.mil/News/Messages/MARADMINS/", isQuickLink: true },
    { title: "DOD SkillBridge", url: "https://skillbridge.osd.mil/", isQuickLink: true },
    { title: "DODI 1322.29", url: "https://www.esd.whs.mil/Directives/issuances/dodi/", isQuickLink: false },
    { title: "10 U.S.C. 1143(e)", url: "https://uscode.house.gov/", isQuickLink: false },
  ],
};

// Reserve & Mobilization - Reserve Administration
const RESERVE_DUTY_STATUS_DATA = {
  references: [
    { title: "MCO 1001R.1L W/CH 1 - MCRAMM", url: "https://www.marines.mil/", isQuickLink: true },
    { title: "10 U.S.C. Sections 10141-10154", url: "https://uscode.house.gov/", isQuickLink: true },
    { title: "Marine Forces Reserve", url: "https://www.marforres.marines.mil/", isQuickLink: false },
  ],
};

const IDT_PAY_DATA = {
  references: [
    { title: "MCO 1001R.1L Chapter 3 - Reserve Duty and Training", url: "https://www.marines.mil/", isQuickLink: true },
    { title: "MARADMIN 157/25 - IDT Travel Reimbursement", url: "https://www.marines.mil/News/Messages/MARADMINS/", isQuickLink: true },
    { title: "MARADMIN 571/25 - Appropriate Duty Policy", url: "https://www.marines.mil/News/Messages/MARADMINS/", isQuickLink: true },
    { title: "Joint Travel Regulations", url: "https://www.travel.dod.mil/Policy-Regulations/Joint-Travel-Regulations/", isQuickLink: false },
  ],
};

const ANNUAL_TRAINING_ORDERS_DATA = {
  references: [
    { title: "MCO 1001R.1L Chapter 7 - Selected Reserve", url: "https://www.marines.mil/", isQuickLink: true },
    { title: "Joint Travel Regulations", url: "https://www.travel.dod.mil/Policy-Regulations/Joint-Travel-Regulations/", isQuickLink: true },
    { title: "MROWS", url: "https://mrows.usmc.mil/", isQuickLink: false },
  ],
};

const RETIREMENT_POINTS_DATA = {
  references: [
    { title: "MCO 1001R.1L Chapter 4 - Reserve Retirement", url: "https://www.marines.mil/", isQuickLink: true },
    { title: "10 U.S.C. Chapter 1223 - Reserve Retirement", url: "https://uscode.house.gov/", isQuickLink: true },
    { title: "DoDI 1215.07 - Service Credit", url: "https://www.esd.whs.mil/Directives/issuances/dodi/", isQuickLink: false },
    { title: "Marine Online (MOL)", url: "https://mol.tfs.usmc.mil/", isQuickLink: false },
  ],
};

const RESERVE_PROMOTION_SYSTEM_DATA = {
  references: [
    { title: "MCO P1400.32D W/CH 2 - Promotion Manual Vol 2", url: "https://www.marines.mil/", isQuickLink: true },
    { title: "MARADMIN 373/24 - FY25 SNCO Board Schedule", url: "https://www.marines.mil/News/Messages/MARADMINS/", isQuickLink: true },
    { title: "MCO 1001R.1L Chapter 4 - Reserve Promotions", url: "https://www.marines.mil/", isQuickLink: false },
    { title: "MCIRSA", url: "https://www.marforres.marines.mil/Units/Force-Headquarters-Group/Marine-Corps-Individual-Reserve-Support-Activity/", isQuickLink: false },
  ],
};

// Reserve & Mobilization - Mobilization/Activation
const MOBILIZATION_ORDERS_DATA = {
  references: [
    { title: "MCO 3061.1 - Total Force Mobilization Plan", url: "https://www.marines.mil/", isQuickLink: true },
    { title: "MCO 3000.19B - MAID-P", url: "https://www.marines.mil/", isQuickLink: true },
    { title: "10 U.S.C. 12301, 12302, 12304, 12304b", url: "https://uscode.house.gov/", isQuickLink: false },
  ],
};

const ADOS_DATA = {
  references: [
    { title: "MCO 1001R.1L Chapter 3 - Active Duty Types", url: "https://www.marines.mil/", isQuickLink: true },
    { title: "MARFORRES Definitions", url: "https://www.marforres.marines.mil/", isQuickLink: false },
    { title: "MROWS", url: "https://mrows.usmc.mil/", isQuickLink: false },
  ],
};

const ADSW_DATA = {
  references: [
    { title: "MCO 1000.8", url: "https://www.marines.mil/", isQuickLink: true },
    { title: "MCO 1001R.1L Chapter 3", url: "https://www.marines.mil/", isQuickLink: true },
    { title: "HQMC M&RA", url: "https://www.manpower.usmc.mil/", isQuickLink: false },
  ],
};

const ADT_DATA = {
  references: [
    { title: "MCO 1001R.1L Chapter 3 and Chapter 7", url: "https://www.marines.mil/", isQuickLink: true },
    { title: "MCO 1510R.39B - Reserve Training", url: "https://www.marines.mil/", isQuickLink: true },
    { title: "MROWS", url: "https://mrows.usmc.mil/", isQuickLink: false },
  ],
};

const DEMOBILIZATION_PROCESSING_DATA = {
  references: [
    { title: "MCO 3061.1 - TFMDP", url: "https://www.marines.mil/", isQuickLink: true },
    { title: "MCO 3000.19B - MAID-P", url: "https://www.marines.mil/", isQuickLink: true },
    { title: "MCO 1001R.1L Chapter 10 - Mobilization", url: "https://www.marines.mil/", isQuickLink: false },
    { title: "VA Benefits", url: "https://www.va.gov/", isQuickLink: false },
  ],
};

// Legal & Disciplinary - Administrative Actions
const NJP_ARTICLE_15_DATA = {
  references: [
    { title: "MCO 5800.16 Vol 14 - NJP", url: "https://www.marines.mil/", isQuickLink: true },
    { title: "JAGINST 5800.7F - JAG Manual", url: "https://www.jag.navy.mil/", isQuickLink: true },
    { title: "NAVMC 10132 - Unit Punishment Book", url: "https://www.marines.mil/", isQuickLink: false },
    { title: "Article 15 UCMJ", url: "https://www.law.cornell.edu/uscode/text/10/815", isQuickLink: false },
  ],
};

const PUNITIVE_LETTERS_REPRIMAND_DATA = {
  references: [
    { title: "MCO 5800.16 Vol 14 - NJP", url: "https://www.marines.mil/", isQuickLink: true },
    { title: "JAGINST 5800.7F - JAG Manual", url: "https://www.jag.navy.mil/", isQuickLink: true },
    { title: "MCO P1070.12K - IRAM", url: "https://www.marines.mil/", isQuickLink: false },
  ],
};

const PAGE_11_COUNSELING_DATA = {
  references: [
    { title: "MCO P1070.12K - IRAM", url: "https://www.marines.mil/", isQuickLink: true },
    { title: "Marine Online (MOL)", url: "https://mol.usmc.mil/", isQuickLink: true },
    { title: "NAVMC 11035 - Admin Change Request", url: "https://www.marines.mil/", isQuickLink: false },
    { title: "BCNR", url: "https://www.secnav.navy.mil/mra/CORB/pages/home.aspx", isQuickLink: false },
  ],
};

const ADMINISTRATIVE_INVESTIGATIONS_DATA = {
  references: [
    { title: "JAGINST 5800.7F - JAG Manual", url: "https://www.jag.navy.mil/", isQuickLink: true },
    { title: "MCO 5830.1A - Command Investigations", url: "https://www.marines.mil/", isQuickLink: true },
    { title: "SECNAVINST 5211.5E - Privacy Act", url: "https://www.secnav.navy.mil/", isQuickLink: false },
  ],
};

// Legal & Disciplinary - Legal Support
const COURT_MARTIAL_SUPPORT_DATA = {
  references: [
    { title: "Manual for Courts-Martial (MCM)", url: "https://jsc.defense.gov/Portals/99/Documents/MCM.pdf", isQuickLink: true },
    { title: "JAGINST 5800.7F - JAG Manual", url: "https://www.jag.navy.mil/", isQuickLink: true },
    { title: "MCO 5800.16 - LSAM", url: "https://www.marines.mil/", isQuickLink: false },
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

// ============================================
// LEADERS - ACCOUNTABILITY & DISCIPLINE
// ============================================

const NJP_AUTHORITY_LEVELS_DATA = {
  references: [
    { title: "MCO 5800.16 Volume 14 - Legal Support and Administration Manual", url: "https://www.marines.mil/News/Publications/MCPEL/Electronic-Library-Display/Article/899474/mco-580016-vol-14/" },
    { title: "Manual for Courts-Martial, Part V - NJP Procedures", url: "https://jsc.defense.gov/Military-Law/Current-Publications-702-HG/" },
    { title: "JAGMAN 0111 - NJP Guidance", url: "https://www.jag.navy.mil/library/instructions/JAGINST_5800.7G.pdf" },
  ],
};

const NJP_RECOMMENDATION_DATA = {
  references: [
    { title: "MCO 5800.16 Volume 14 - Legal Support and Administration Manual", url: "https://www.marines.mil/News/Publications/MCPEL/Electronic-Library-Display/Article/899474/mco-580016-vol-14/" },
    { title: "MCO P1070.12K - Individual Records Administration Manual (IRAM)", url: "https://www.marines.mil/News/Publications/MCPEL/Electronic-Library-Display/Article/899135/mco-p107012k/" },
  ],
};

const UA_DESERTION_REPORTING_DATA = {
  references: [
    { title: "MCO 1620.3A - Absentee and Deserter Apprehension Program", url: "https://www.marines.mil/News/Publications/MCPEL/Electronic-Library-Display/Article/899304/mco-16203a/" },
    { title: "MCO P5800.16A - Legal Administration Manual", url: "https://www.marines.mil/News/Publications/MCPEL/Electronic-Library-Display/Article/899474/mco-580016-vol-14/" },
    { title: "MCO 1610.7 - Performance Evaluation System (Chapter 3)", url: "https://www.marines.mil/News/Publications/MCPEL/Electronic-Library-Display/Article/899293/mco-16107/" },
  ],
};

const ADSEP_OVERVIEW_DATA = {
  references: [
    { title: "MCO P1900.16 - MARCORSEPMAN (Paragraph 6105)", url: "https://www.marines.mil/News/Publications/MCPEL/Electronic-Library-Display/Article/899390/mco-190016g/" },
    { title: "MCO P1070.12K - Individual Records Administration Manual (IRAM)", url: "https://www.marines.mil/News/Publications/MCPEL/Electronic-Library-Display/Article/899135/mco-p107012k/" },
    { title: "DoDI 1332.14 - Enlisted Administrative Separations", url: "https://www.esd.whs.mil/Portals/54/Documents/DD/issuances/dodi/133214p.pdf" },
  ],
};

const LEGAL_HOLD_INVESTIGATIONS_DATA = {
  references: [
    { title: "MCO 5800.16 - Legal Support and Administration Manual", url: "https://www.marines.mil/News/Publications/MCPEL/Electronic-Library-Display/Article/899474/mco-580016-vol-14/" },
    { title: "JAGMAN - Judge Advocate General Manual", url: "https://www.jag.navy.mil/library/instructions/JAGINST_5800.7G.pdf" },
  ],
};

const ARTICLE_31B_RIGHTS_DATA = {
  references: [
    { title: "10 U.S.C. 831 - Article 31, UCMJ", url: "https://www.law.cornell.edu/uscode/text/10/831" },
    { title: "Military Rules of Evidence 305", url: "https://jsc.defense.gov/Military-Law/Current-Publications-702-HG/" },
    { title: "MCO 5800.16 - Legal Support and Administration Manual", url: "https://www.marines.mil/News/Publications/MCPEL/Electronic-Library-Display/Article/899474/mco-580016-vol-14/" },
    { title: "HQMC Practice Advisory 21-4 - Article 31 Rights Advisories", url: "https://www.hqmc.marines.mil/sja/" },
  ],
};

const PROGRESSIVE_DISCIPLINE_DATA = {
  references: [
    { title: "MCO P1070.12K - IRAM (Page 11 Entries)", url: "https://www.marines.mil/News/Publications/MCPEL/Electronic-Library-Display/Article/899135/mco-p107012k/" },
    { title: "MCO P1900.16 - MARCORSEPMAN (Paragraph 6105)", url: "https://www.marines.mil/News/Publications/MCPEL/Electronic-Library-Display/Article/899390/mco-190016g/" },
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

// Leaders - Awards & Recognition
const WRITING_AWARD_RECOMMENDATIONS_DATA = {
  references: [
    { title: "SECNAV M-1650.1 - Navy and Marine Corps Awards Manual", url: "https://www.secnav.navy.mil/doni/SECNAV%20Manuals1/1650.1.pdf" },
    { title: "SECNAVINST 1650.1J - Department of the Navy Military Awards Policy", url: "https://www.secnav.navy.mil/doni/Directives/01000%20Military%20Personnel%20Support/01-600%20Performance%20and%20Discipline%20Programs/1650.1J.pdf" },
    { title: "MCO 1650.19J with CH1 - Administrative and Issue Procedures for Decorations, Medals, and Awards", url: "https://www.marines.mil/News/Publications/MCPEL/Electronic-Library-Display/Article/899334/mco-165019j-wch-1/" },
  ],
};

const CITATION_FORMAT_REQUIREMENTS_DATA = {
  references: [
    { title: "SECNAV M-1650.1, Chapter 2, Appendix B - Sample Citations", url: "https://www.secnav.navy.mil/doni/SECNAV%20Manuals1/1650.1.pdf" },
    { title: "SECNAV M-1650.1, Table 20 - PMD Combination Citation/Certificate Format", url: "https://www.secnav.navy.mil/doni/SECNAV%20Manuals1/1650.1.pdf" },
    { title: "SECNAV M-1650.1, Table 21 - NC and NAM Standard Opening Sentences", url: "https://www.secnav.navy.mil/doni/SECNAV%20Manuals1/1650.1.pdf" },
  ],
};

const COMMON_AWARD_ERRORS_DATA = {
  references: [
    { title: "SECNAV M-1650.1 - Navy and Marine Corps Awards Manual", url: "https://www.secnav.navy.mil/doni/SECNAV%20Manuals1/1650.1.pdf" },
    { title: "MARADMIN 077/25 - CMC Delegation of Awarding Authority", url: "https://www.marines.mil/News/Messages/Messages-Display/Article/4073209/commandant-of-the-marine-corps-delegation-of-awarding-authority-for-military-aw/" },
    { title: "MARADMIN 093/25 - PCS Season Awards Guidance", url: "https://www.marines.mil/News/Messages/Messages-Display/Article/4078781/military-awards-guidance-for-permanent-change-of-station-season/" },
  ],
};

const IAPS_SUBMISSION_DATA = {
  references: [
    { title: "MARADMIN 042/08 - Implementation of iAPS", url: "https://www.marines.mil/News/Messages/Messages-Display/Article/893622/implementation-of-the-improved-awards-processing-system-iaps/" },
    { title: "MARADMIN 099/18 - iAPS Updates", url: "https://www.marines.mil/News/Messages/Messages-Display/Article/1438860/improved-awards-processing-system-iaps-updates/" },
    { title: "MARADMIN 077/25 - CMC Delegation of Awarding Authority", url: "https://www.marines.mil/News/Messages/Messages-Display/Article/4073209/commandant-of-the-marine-corps-delegation-of-awarding-authority-for-military-aw/" },
  ],
};

const AWARD_ROUTING_APPROVAL_DATA = {
  references: [
    { title: "MARADMIN 077/25 (21 Feb 2025) - CMC Delegation of Awarding Authority for Military Awards", url: "https://www.marines.mil/News/Messages/Messages-Display/Article/4073209/commandant-of-the-marine-corps-delegation-of-awarding-authority-for-military-aw/" },
    { title: "SECNAVINST 1650.1J - Department of the Navy Military Awards Policy", url: "https://www.secnav.navy.mil/doni/Directives/01000%20Military%20Personnel%20Support/01-600%20Performance%20and%20Discipline%20Programs/1650.1J.pdf" },
    { title: "SECNAV M-1650.1 - Navy and Marine Corps Awards Manual", url: "https://www.secnav.navy.mil/doni/SECNAV%20Manuals1/1650.1.pdf" },
    { title: "MCO 1650.19J with CH1 - Administrative and Issue Procedures for Decorations, Medals, and Awards", url: "https://www.marines.mil/News/Publications/MCPEL/Electronic-Library-Display/Article/899334/mco-165019j-wch-1/" },
  ],
};

const AWARD_TIMELINE_MANAGEMENT_DATA = {
  references: [
    { title: "MARADMIN 093/25 - PCS Season Awards Guidance", url: "https://www.marines.mil/News/Messages/Messages-Display/Article/4078781/military-awards-guidance-for-permanent-change-of-station-season/" },
    { title: "MCO 1650.19J with CH1 - Administrative and Issue Procedures for Decorations, Medals, and Awards", url: "https://www.marines.mil/News/Publications/MCPEL/Electronic-Library-Display/Article/899334/mco-165019j-wch-1/" },
  ],
};

const AWARD_TROUBLESHOOTING_DATA = {
  references: [
    { title: "MCO 1650.19J with CH1 - Administrative and Issue Procedures for Decorations, Medals, and Awards", url: "https://www.marines.mil/News/Publications/MCPEL/Electronic-Library-Display/Article/899334/mco-165019j-wch-1/" },
    { title: "MARADMIN 093/25 - PCS Season Awards Guidance", url: "https://www.marines.mil/News/Messages/Messages-Display/Article/4078781/military-awards-guidance-for-permanent-change-of-station-season/" },
  ],
};

// Leaders - Career Development
const SUPPORTING_REENLISTMENT_DECISIONS_DATA = {
  references: [
    { title: "MCO 1616.1 - Junior Enlisted Performance Evaluation System (JEPES)", url: "https://www.marines.mil/News/Publications/MCPEL/Electronic-Library-Display/Article/899293/mco-16107/" },
    { title: "MCO P1040.31J - Enlisted Retention and Career Development Manual", url: "https://www.marines.mil/News/Publications/MCPEL/Electronic-Library-Display/Article/899214/mco-p104031j/" },
    { title: "MARADMIN 046/24 - Updates to JEPES MOS Qualifications Initiative", url: "https://www.marines.mil/News/Messages/Messages-Display/Article/3662965/updates-to-the-implementation-of-military-occupational-specialty-qualifications/" },
  ],
};

const PME_TRACKING_COMPLETION_DATA = {
  references: [
    { title: "MCO 1553.4B - Professional Military Education", url: "https://www.marines.mil/News/Publications/MCPEL/Electronic-Library-Display/Article/899348/mco-15534b/" },
    { title: "MCO P1400.32D - Enlisted Promotion Manual", url: "https://www.marines.mil/News/Publications/MCPEL/Electronic-Library-Display/Article/899216/mco-p140032d/" },
    { title: "MARADMIN 474/21 - Updated Enlisted PME Requirements by Grade", url: "https://www.marines.mil/News/Messages/Messages-Display/Article/2763368/updated-enlisted-professional-military-education-requirements-by-grade/" },
  ],
};

const MERITORIOUS_PROMOTION_PREPARATION_DATA = {
  references: [
    { title: "MCO P1400.32D - Enlisted Promotion Manual", url: "https://www.marines.mil/News/Publications/MCPEL/Electronic-Library-Display/Article/899216/mco-p140032d/" },
    { title: "MARADMIN 667/22 - Update to Meritorious Promotion Policy to Cpl and Sgt", url: "https://www.marines.mil/News/Messages/Messages-Display/Article/3241497/update-to-meritorious-promotion-policy-to-corporal-and-sergeant/" },
  ],
};

const SPECIAL_DUTY_ASSIGNMENT_SCREENING_DATA = {
  references: [
    { title: "MCO 1326.6 - SCREENMAN (Special Duty Assignment Screening)", url: "https://www.marines.mil/News/Publications/MCPEL/Electronic-Library-Display/Article/899313/mco-13266/" },
    { title: "MARADMIN 706/19 - SDA and Screenable Billets Compliance Requirements", url: "https://www.marines.mil/News/Messages/Messages-Display/Article/2046247/special-duty-assignment-and-screenable-billets-compliance-requirements/" },
  ],
};

const LATERAL_MOVE_GUIDANCE_DATA = {
  references: [
    { title: "MCO P1040.31J - Enlisted Retention and Career Development Manual", url: "https://www.marines.mil/News/Publications/MCPEL/Electronic-Library-Display/Article/899214/mco-p104031j/" },
  ],
};

const ENLISTED_COMMISSIONING_PROGRAMS_DATA = {
  references: [
    { title: "MCO 1040.43B - Enlisted to Officer Commissioning Programs", url: "https://www.marines.mil/News/Publications/MCPEL/Electronic-Library-Display/Article/899211/mco-104043b/" },
    { title: "MCO 1560.15L - Marine Enlisted Commissioning Education Program (MECEP)", url: "https://www.marines.mil/News/Publications/MCPEL/Electronic-Library-Display/Article/899354/mco-156015l/" },
  ],
};

const WARRANT_OFFICER_PROGRAM_SUPPORT_DATA = {
  references: [
    { title: "MCO 1040.42A/B - Warrant Officer and LDO Accession Programs", url: "https://www.marines.mil/News/Publications/MCPEL/Electronic-Library-Display/Article/899210/mco-104042b/" },
    { title: "SECNAVINST 1412.9B - Officer Accession Programs", url: "https://www.secnav.navy.mil/doni/Directives/01000%20Military%20Personnel%20Support/01-400%20Promotion%20and%20Advancement%20Programs/1412.9B.pdf" },
  ],
};

// Leaders - Counseling & Documentation
const SIX_FUNCTIONAL_AREAS_DATA = {
  references: [
    { title: "MCO 1500.61 - Marine Leader Development", url: "https://www.marines.mil/News/Publications/MCPEL/Electronic-Library-Display/Article/900396/mco-150061/" },
    { title: "NAVMC 2795 - User's Guide to Counseling", url: "https://www.marines.mil/Portals/1/Publications/NAVMC%202795.pdf" },
  ],
};

const SMART_GOALS_DATA = {
  references: [
    { title: "MCO 1500.61 - Marine Leader Development", url: "https://www.marines.mil/News/Publications/MCPEL/Electronic-Library-Display/Article/900396/mco-150061/" },
    { title: "NAVMC 2795 - User's Guide to Counseling", url: "https://www.marines.mil/Portals/1/Publications/NAVMC%202795.pdf" },
  ],
};

const COUNSELING_FUNDAMENTALS_DATA = {
  references: [
    { title: "MCO 1500.61 - Marine Leader Development", url: "https://www.marines.mil/News/Publications/MCPEL/Electronic-Library-Display/Article/900396/mco-150061/" },
    { title: "NAVMC 2795 - User's Guide to Counseling", url: "https://www.marines.mil/Portals/1/Publications/NAVMC%202795.pdf" },
  ],
};

const REQUIRED_COUNSELING_OCCASIONS_DATA = {
  references: [
    { title: "MCO 1500.61 - Marine Leader Development", url: "https://www.marines.mil/News/Publications/MCPEL/Electronic-Library-Display/Article/900396/mco-150061/" },
    { title: "NAVMC 2795 - User's Guide to Counseling", url: "https://www.marines.mil/Portals/1/Publications/NAVMC%202795.pdf" },
  ],
};

const INITIAL_COUNSELING_SESSION_DATA = {
  references: [
    { title: "MCO 1500.61 - Marine Leader Development", url: "https://www.marines.mil/News/Publications/MCPEL/Electronic-Library-Display/Article/900396/mco-150061/" },
    { title: "NAVMC 2795 - User's Guide to Counseling", url: "https://www.marines.mil/Portals/1/Publications/NAVMC%202795.pdf" },
  ],
};

const FOLLOW_ON_COUNSELING_SESSIONS_DATA = {
  references: [
    { title: "MCO 1500.61 - Marine Leader Development", url: "https://www.marines.mil/News/Publications/MCPEL/Electronic-Library-Display/Article/900396/mco-150061/" },
    { title: "NAVMC 2795 - User's Guide to Counseling", url: "https://www.marines.mil/Portals/1/Publications/NAVMC%202795.pdf" },
  ],
};

const MARINE_LEADER_NOTEBOOKS_DATA = {
  references: [
    { title: "MCO 1500.61 - Marine Leader Development", url: "https://www.marines.mil/News/Publications/MCPEL/Electronic-Library-Display/Article/900396/mco-150061/" },
    { title: "NAVMC 2795 - User's Guide to Counseling", url: "https://www.marines.mil/Portals/1/Publications/NAVMC%202795.pdf" },
  ],
};

// Leaders - Deployment & Readiness
const UPFRP_OVERVIEW_DATA = {
  references: [
    { title: "MCO 1754.9B - Unit, Personal and Family Readiness Program", url: "https://www.marines.mil/portals/1/Publications/MCO%201754.9B.pdf?ver=2019-04-03-142738-677" },
  ],
};

const DEPLOYMENT_TRAINING_EVENTS_DATA = {
  references: [
    { title: "MCO 1754.9B - Unit, Personal and Family Readiness Program", url: "https://www.marines.mil/portals/1/Publications/MCO%201754.9B.pdf?ver=2019-04-03-142738-677" },
  ],
};

const INDIVIDUAL_READINESS_REQUIREMENTS_DATA = {
  references: [
    { title: "MCO 6100.13A - Marine Corps Physical Fitness Program", url: "https://www.marines.mil/Portals/1/Publications/MCO%206100.13A.pdf" },
    { title: "MCO 1040.31 - Enlisted Retention and Career Development", url: "https://www.marines.mil/News/Publications/MCPEL/Electronic-Library-Display/Article/899193/mco-104031/" },
    { title: "BUMEDINST 6230.15B - Immunizations and Chemoprophylaxis", url: "https://www.med.navy.mil/Portals/62/Documents/BUMED/Directives/6000s/6230_15B.pdf" },
  ],
};

const FAMILY_CARE_PLAN_REQUIREMENTS_DATA = {
  references: [
    { title: "MCO 1754.6 - Family Care Plan Policy", url: "https://www.marines.mil/News/Publications/MCPEL/Electronic-Library-Display/Article/899529/mco-17546/" },
    { title: "MCO 1040.31 - Enlisted Retention and Career Development", url: "https://www.marines.mil/News/Publications/MCPEL/Electronic-Library-Display/Article/899193/mco-104031/" },
  ],
};

const OBLIGATED_SERVICE_DEPLOYMENT_DATA = {
  references: [
    { title: "MCO 1040.31 - Enlisted Retention and Career Development", url: "https://www.marines.mil/News/Publications/MCPEL/Electronic-Library-Display/Article/899193/mco-104031/" },
    { title: "MCO 1300.8 - Marine Corps Personnel Assignment Policy", url: "https://www.marines.mil/News/Publications/MCPEL/Electronic-Library-Display/Article/899258/mco-13008/" },
  ],
};

const PHYSICAL_FITNESS_READINESS_DATA = {
  references: [
    { title: "MCO 6100.13A - Marine Corps Physical Fitness Program", url: "https://www.marines.mil/Portals/1/Publications/MCO%206100.13A.pdf" },
  ],
};

const PRE_DEPLOYMENT_CHECKLIST_DATA = {
  references: [
    { title: "MCO 1754.9B - Unit, Personal and Family Readiness Program", url: "https://www.marines.mil/portals/1/Publications/MCO%201754.9B.pdf?ver=2019-04-03-142738-677" },
    { title: "MCO 3000.11E - Marine Corps Deployment Planning", url: "https://www.marines.mil/News/Publications/MCPEL/Electronic-Library-Display/Article/899716/mco-300011e/" },
  ],
};

const SUPPORTING_IAS_AND_TAD_DATA = {
  references: [
    { title: "MCO 1754.9B - Unit, Personal and Family Readiness Program", url: "https://www.marines.mil/portals/1/Publications/MCO%201754.9B.pdf?ver=2019-04-03-142738-677" },
  ],
};

// Leaders - Performance Evaluation
const JEPES_OVERVIEW_LEADERS_DATA = {
  references: [
    { title: "MCO 1616.1 - JEPES", url: "https://www.marines.mil/News/Publications/MCPEL/Electronic-Library-Display/Article/899232/mco-16161/" },
    { title: "MCO P1400.32D - Enlisted Promotion Manual", url: "https://www.marines.mil/News/Publications/MCPEL/Electronic-Library-Display/Article/899270/mco-p140032d/" },
  ],
};

const JEPES_REPORTING_CHAIN_DATA = {
  references: [
    { title: "MCO 1616.1 - JEPES", url: "https://www.marines.mil/News/Publications/MCPEL/Electronic-Library-Display/Article/899232/mco-16161/" },
  ],
};

const JEPES_REPORTING_OCCASIONS_DATA = {
  references: [
    { title: "MCO 1616.1 - JEPES", url: "https://www.marines.mil/News/Publications/MCPEL/Electronic-Library-Display/Article/899232/mco-16161/" },
  ],
};

const JEPES_COMMAND_INPUT_METRICS_DATA = {
  references: [
    { title: "MCO 1616.1 - JEPES", url: "https://www.marines.mil/News/Publications/MCPEL/Electronic-Library-Display/Article/899232/mco-16161/" },
  ],
};

const NOT_REC_DATA = {
  references: [
    { title: "MCO 1616.1 - JEPES", url: "https://www.marines.mil/News/Publications/MCPEL/Electronic-Library-Display/Article/899232/mco-16161/" },
    { title: "MCO P1400.32D - Enlisted Promotion Manual", url: "https://www.marines.mil/News/Publications/MCPEL/Electronic-Library-Display/Article/899270/mco-p140032d/" },
  ],
};

const JEPES_OBJECTIVE_SCORES_DATA = {
  references: [
    { title: "MCO 1616.1 - JEPES", url: "https://www.marines.mil/News/Publications/MCPEL/Electronic-Library-Display/Article/899232/mco-16161/" },
    { title: "MARADMIN 046/24 - Updates to JEPES MOS Qualifications", url: "https://www.marines.mil/News/Messages/MARADMINS/" },
  ],
};

const JEPES_DEBRIEFING_DATA = {
  references: [
    { title: "MCO 1616.1 - JEPES", url: "https://www.marines.mil/News/Publications/MCPEL/Electronic-Library-Display/Article/899232/mco-16161/" },
  ],
};

const FITNESS_REPORTS_LEADERS_DATA = {
  references: [
    { title: "MCO 1610.7 - Performance Evaluation System", url: "https://www.marines.mil/News/Publications/MCPEL/Electronic-Library-Display/Article/899225/mco-16107/" },
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
    { title: "MCO 1616.1 - JEPES", url: "https://www.marines.mil/News/Publications/MCPEL/Electronic-Library-Display/Article/899232/mco-16161/" },
  ],
};

const JEPES_CORRECTIVE_PROCEDURES_DATA = {
  references: [
    { title: "MCO 1616.1 - JEPES", url: "https://www.marines.mil/News/Publications/MCPEL/Electronic-Library-Display/Article/899232/mco-16161/" },
  ],
};

// Leaders - Personnel Accountability DATA
const DAILY_ACCOUNTABILITY_FUNDAMENTALS_DATA = {
  references: [
    { title: "MCO 1040.31 - Time Lost", url: "https://www.marines.mil/News/Publications/MCPEL/Electronic-Library-Display/Article/899178/mco-104031/" },
    { title: "MCO 1050.3 - Leave and Liberty", url: "https://www.marines.mil/News/Publications/MCPEL/Electronic-Library-Display/Article/899184/mco-10503k/" },
  ],
};

const GAINS_LOSSES_PROCESSING_DATA = {
  references: [
    { title: "MCO P1070.12K - IRAM", url: "https://www.marines.mil/News/Publications/MCPEL/Electronic-Library-Display/Article/899193/mco-p107012k/" },
    { title: "MCO 1040.31 - Time Lost", url: "https://www.marines.mil/News/Publications/MCPEL/Electronic-Library-Display/Article/899178/mco-104031/" },
  ],
};

const LEAVE_LIBERTY_MANAGEMENT_DATA = {
  references: [
    { title: "MCO 1050.3 - Leave and Liberty", url: "https://www.marines.mil/News/Publications/MCPEL/Electronic-Library-Display/Article/899184/mco-10503k/" },
    { title: "DoD FMR Vol 7A, Ch 34 - Leave", url: "https://comptroller.defense.gov/Portals/45/documents/fmr/current/07a/07a_34.pdf" },
  ],
};

const UA_PROCEDURES_DATA = {
  references: [
    { title: "MCO 1040.31 - Time Lost", url: "https://www.marines.mil/News/Publications/MCPEL/Electronic-Library-Display/Article/899178/mco-104031/" },
    { title: "MCO P1070.12K - IRAM", url: "https://www.marines.mil/News/Publications/MCPEL/Electronic-Library-Display/Article/899193/mco-p107012k/" },
    { title: "UCMJ Article 86 - Absence Without Leave", url: "https://www.law.cornell.edu/uscode/text/10/886" },
  ],
};

const TAD_DETACHMENT_TRACKING_DATA = {
  references: [
    { title: "MCO P1070.12K - IRAM", url: "https://www.marines.mil/News/Publications/MCPEL/Electronic-Library-Display/Article/899193/mco-p107012k/" },
    { title: "JTR - Joint Travel Regulations", url: "https://www.travel.dod.mil/Policy-Regulations/Joint-Travel-Regulations/" },
  ],
};

const MUSTER_FORMATION_PROCEDURES_DATA = {
  references: [
    { title: "MCO 1040.31 - Time Lost", url: "https://www.marines.mil/News/Publications/MCPEL/Electronic-Library-Display/Article/899178/mco-104031/" },
    { title: "MCO P1050.3 - Leave and Liberty", url: "https://www.marines.mil/News/Publications/MCPEL/Electronic-Library-Display/Article/899184/mco-10503k/" },
  ],
};

const RECORD_KEEPING_DOCUMENTATION_DATA = {
  references: [
    { title: "MCO P1070.12K - IRAM", url: "https://www.marines.mil/News/Publications/MCPEL/Electronic-Library-Display/Article/899193/mco-p107012k/" },
    { title: "MCTFS User Guide", url: "https://www.manpower.usmc.mil/webcenter/portal/MCTFS" },
    { title: "MCO 5210.11 - Records Management", url: "https://www.marines.mil/News/Publications/MCPEL/Electronic-Library-Display/Article/899348/mco-521011f/" },
  ],
};

// Leaders - Administrative Systems DATA
const MCTFS_OVERVIEW_DATA = {
  references: [
    { title: "MCO 1754.9B - Unit, Personal and Family Readiness", url: "https://www.marines.mil/portals/1/Publications/MCO%201754.9B.pdf?ver=2019-04-03-142738-677" },
    { title: "MCO 1616.1 - JEPES", url: "https://www.marines.mil/News/Publications/MCPEL/Electronic-Library-Display/Article/899232/mco-16161/" },
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
    { title: "MCO 1616.1 - JEPES", url: "https://www.marines.mil/News/Publications/MCPEL/Electronic-Library-Display/Article/899232/mco-16161/" },
    { title: "Marine Online (MOL)", url: "https://mol.tfs.usmc.mil", isQuickLink: true },
  ],
};

const TFRS_OVERVIEW_DATA = {
  references: [
    { title: "MCO 1040.31 - Enlisted Retention", url: "https://www.marines.mil/News/Publications/MCPEL/Electronic-Library-Display/Article/899178/mco-104031/" },
    { title: "NAVMC 11537 - Reenlistment Screening", url: "https://forms.documentservices.dla.mil/order/" },
  ],
};

const UNIT_DIARY_REPORTING_DATA = {
  references: [
    { title: "MCO P1070.12K - IRAM", url: "https://www.marines.mil/News/Publications/MCPEL/Electronic-Library-Display/Article/899193/mco-p107012k/" },
    { title: "MCO 6100.13A - Physical Fitness Program", url: "https://www.marines.mil/News/Publications/MCPEL/Electronic-Library-Display/Article/899201/mco-610013a/" },
    { title: "MCTFS PRIUM", url: "https://www.manpower.usmc.mil/webcenter/portal/MCTFS" },
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
    { title: "Marines.mil Publications", url: "https://www.marines.mil/News/Publications/MCPEL/" },
    { title: "Marine Corps Publications Electronic Library (MCPEL)", url: "https://www.marines.mil/News/Publications/MCPEL/Electronic-Library-Display/" },
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
    // Promotions and Career Progression
    "promotion-documentation": <PromotionDocumentationContent data={PROMOTION_DOCUMENTATION_DATA} />,
    "jepes": <JEPESContent data={JEPES_DATA} />,
    "cutting-score-verification": <CuttingScoreVerificationContent data={CUTTING_SCORE_DATA} />,
    "promotion-warrants": <PromotionWarrantsContent data={PROMOTION_WARRANTS_DATA} />,
    "meritorious-promotions": <MeritoriousPromotionsContent data={MERITORIOUS_PROMOTIONS_DATA} />,
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
    "mol": <GenericContent title="Marine Online (MOL)" />,
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
    // Commanders - Transition of Command
    "cornerstone-attendance": <CornerstoneAttendanceContent />,
    "cor-incoming": <CertificateOfReliefContent />,
    "30-day-safety": <SafetyPolicyContent />,
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
  const systemsManagementSection = "systems-management";
  const systemsManagementSlugs = [
    // Personnel Systems
    "mol",
    "mctfs",
    "mcirsa",
    // Travel Systems
    "dts",
    "gtcc-portal",
    // Reserve Systems
    "mrows",
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
    for (const item of systemsManagementSlugs) params.push({ role, section: systemsManagementSection, item });
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
    "njp-punishment-limits",
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
    "fitrep-responsibilities",
    "adverse-fitreps",
    "procon-oversight",
    "jepes-commander",
    "not-rec-authority",
    "meritorious-promotion-authority",
    "reenlistment-authority",
    "transition-oversight",
    "page-11-commander",
    "6105-entries",
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
  const commandersSaprSlugs = [
    "sapr-va-appointment",
    "sarc-coordination",
    "sapr-policy-posting",
    "sapr-reporting-types",
    "8-day-report",
    "cmg-participation",
    "hrrt",
    "expedited-transfer",
    "mpo-sapr",
    "sapr-retaliation",
  ];

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
  const commandersLegalSlugs = [
    "njp-procedures",
    "punishment-limits",
    "appeal-rights",
    "adsep-commander-authority",
    "separation-bases",
    "adsep-due-process",
  ];

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
    "drrs-mc-overview",
    "c-level-assessment",
    "commanders-override",
    "readiness-board",
    "p-level-reporting",
    "s-level-reporting",
    "r-level-reporting",
    "t-level-reporting",
    "metl-development",
    "metl-assessment",
    "metl-annual-review",
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

  const commandersMaintenanceSection = "commanders-maintenance-logistics";
  const commandersMaintenanceSlugs = [
    "ro-appointment",
    "te-review",
    "gcss-mc-oversight",
    "small-arms-accountability",
    "tmde-accountability",
    "esr-reporting",
    "mmo-appointment",
    "cpac-program",
    "elmp",
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
  const commandersIGSlugs = [
    "cip-overview",
    "igmc-functional-areas",
    "internal-inspections",
    "fsmao-analysis",
    "cgip-preparation",
    "smat-inspections",
    "poam-management",
    "pre-inspection-prep",
    "corrective-action-tracking",
  ];

  const commandersEnvironmentalSection = "commanders-environmental";
  const commandersEnvironmentalSlugs = [
    "ems-overview",
    "ecc-appointment",
    "environmental-funding",
    "spill-reporting",
    "hazmat-management",
    "nepa-compliance",
    "internal-ece",
    "benchmark-ece",
  ];

  const commandersSecuritySection = "commanders-security";
  const commandersSecuritySlugs = [
    "infosec-program",
    "classified-accountability",
    "opsec-program",
    "personnel-security",
    "physical-security",
    "insider-threat",
    "cybersecurity-program",
    "atfp-program",
  ];

  const commandersPublicAffairsSection = "commanders-public-affairs";
  const commandersPublicAffairsSlugs = [
    "media-engagement",
    "crisis-communication",
    "opsec-public-statements",
    "casualty-info-release",
    "releasable-info",
    "social-media-policy",
    "climate-messaging",
  ];

  const commandersTransitionSection = "commanders-transition-command";
  const commandersTransitionSlugs = [
    "cornerstone-attendance",
    "cor-incoming",
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
  for (const item of commandersMaintenanceSlugs) params.push({ role: commanderRole, section: commandersMaintenanceSection, item });
  for (const item of commandersSafetySlugs) params.push({ role: commanderRole, section: commandersSafetySection, item });
  for (const item of commandersIGSlugs) params.push({ role: commanderRole, section: commandersIGSection, item });
  for (const item of commandersEnvironmentalSlugs) params.push({ role: commanderRole, section: commandersEnvironmentalSection, item });
  for (const item of commandersSecuritySlugs) params.push({ role: commanderRole, section: commandersSecuritySection, item });
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


