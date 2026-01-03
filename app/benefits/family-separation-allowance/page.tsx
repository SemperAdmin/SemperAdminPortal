import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Family Separation Allowance (FSA)",
  description:
    "Monthly allowance when separated from dependents due to military duty. Overview, types, eligibility, documents, and common issues.",
};

export default function Page() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-10">
      <header className="mb-8 text-center">
        <h1 className="text-4xl font-bold tracking-tight text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
          Family Separation Allowance (FSA)
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-zinc-700 dark:text-zinc-300">
          Monthly allowance when separated from dependents due to military duty
        </p>
        <div className="mt-4 flex flex-wrap items-center justify-center gap-2 text-sm text-zinc-600 dark:text-zinc-400">
          <span>DEERS Enrollment</span>
          <span>DD Form 1561</span>
          <span>DoDI 1340.24</span>
          <span>FSA rates and general information</span>
        </div>
      </header>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">🔎 Overview</h2>
        <h3 className="text-xl font-semibold">📋 WHAT IS FAMILY SEPARATION ALLOWANCE?</h3>
        <p className="text-zinc-800 dark:text-zinc-200">
          Family Separation Allowance (FSA) is a monthly payment to help offset the added expenses that occur when a service member is separated from their dependents due to military orders. FSA recognizes the financial and personal hardship of enforced family separation during military service.
        </p>
        <h4 className="text-lg font-semibold">Policy update (2023–2024):</h4>
        <p className="text-zinc-800 dark:text-zinc-200">
          The Department of Defense transitioned from legacy FSA-R/S/T designations to a unified administrative model using FSA-Continuous (FSA-C) and FSA-Board (FSA-B) under the FY24 NDAA and updated DoDI 1340.24. Current pay systems often display simply &quot;FSA&quot; on the LES.
        </p>
        <h4 className="text-lg font-semibold">Legacy mapping and current categories:</h4>
        <ul className="list-disc pl-6 text-zinc-800 dark:text-zinc-200">
          <li>FSA-R → generally referenced as FSA-Unaccompanied (FSA-U)</li>
          <li>FSA-S and FSA-T → grouped as FSA-Away from Homeport/PDS</li>
        </ul>
        <p className="text-zinc-800 dark:text-zinc-200">CURRENT RATE: $300 per month (regardless of number of dependents)</p>
        <p className="text-zinc-800 dark:text-zinc-200">FSA is NOT taxable income.</p>

        <h4 className="text-lg font-semibold">IMPORTANT REQUIREMENTS:</h4>
        <ul className="list-disc pl-6 text-zinc-800 dark:text-zinc-200">
          <li>Must complete DD Form 1561 to substantiate FSA entitlement</li>
          <li>Separation must exceed 30 continuous days</li>
          <li>Cannot receive more than one FSA type for same period</li>
          <li>Flat rate - same amount for one dependent or multiple dependents</li>
        </ul>
      </section>

      <section className="mt-10 space-y-6">
        <h2 className="text-2xl font-semibold">✅ WHO GETS FSA-R (RESERVE COMPONENT)?</h2>
        <h3 className="text-xl font-semibold">ELIGIBILITY REQUIREMENTS:</h3>
        <p className="text-zinc-800 dark:text-zinc-200">Reserve Component members may receive FSA-R when:</p>
        <p className="text-zinc-800 dark:text-zinc-200">You must meet ALL of these criteria:</p>
        <ol className="list-decimal pl-6 text-zinc-800 dark:text-zinc-200">
          <li>
            RESERVE COMPONENT MEMBER
            <ul className="list-disc pl-6">
              <li>Member of Reserve Component (National Guard or Reserve)</li>
              <li>Called or ordered to active duty</li>
            </ul>
          </li>
          <li>
            ACTIVE DUTY ORDERS
            <ul className="list-disc pl-6">
              <li>On active duty under orders for continuous period of more than 30 days</li>
              <li>Not annual training or weekend drills</li>
            </ul>
          </li>
          <li>
            HAVE AUTHORIZED DEPENDENTS
            <ul className="list-disc pl-6">
              <li>Must have at least one authorized dependent</li>
              <li>Spouse and/or children enrolled in DEERS</li>
            </ul>
          </li>
          <li>
            SEPARATED FROM DEPENDENTS
            <ul className="list-disc pl-6">
              <li>Physical separation from all dependents</li>
              <li>Due to military orders</li>
              <li>Dependents not residing with member</li>
            </ul>
          </li>
          <li>
            SPECIFIC QUALIFYING REASONS
            <ul className="list-disc pl-6">
              <li>Member&apos;s residence different from permanent duty station</li>
              <li>OR dependents not permitted at permanent duty station</li>
              <li>OR member on ship deployment</li>
            </ul>
          </li>
        </ol>

        <h4 className="text-lg font-semibold">TYPICAL FSA-R SCENARIOS:</h4>
        <h5 className="font-semibold">MOBILIZATION:</h5>
        <ul className="list-disc pl-6 text-zinc-800 dark:text-zinc-200">
          <li>Reserve Component member mobilized for deployment</li>
          <li>Ordered to active duty for more than 30 days</li>
          <li>Separated from family due to mobilization</li>
        </ul>
        <h5 className="font-semibold">EXTENDED ACTIVE DUTY:</h5>
        <ul className="list-disc pl-6 text-zinc-800 dark:text-zinc-200">
          <li>RC member on extended active duty orders</li>
          <li>Away from home for more than 30 days</li>
          <li>Dependents remain at home of record</li>
        </ul>
        <h5 className="font-semibold">DEPLOYMENT FROM RESERVE STATUS:</h5>
        <ul className="list-disc pl-6 text-zinc-800 dark:text-zinc-200">
          <li>Deployed from Reserve/Guard status</li>
          <li>Family unable to accompany</li>
          <li>Separated for duration of deployment</li>
        </ul>
        <h4 className="text-lg font-semibold">You are NOT entitled to FSA-R if:</h4>
        <ul className="list-disc pl-6 text-zinc-800 dark:text-zinc-200">
          <li>On annual training (typically 2 weeks)</li>
          <li>Weekend drill periods</li>
          <li>Active duty orders 30 days or less</li>
          <li>Dependents residing with you at duty location</li>
        </ul>
      </section>

      <section className="mt-10 space-y-6">
        <h2 className="text-2xl font-semibold">💵 HOW MUCH DO I GET?</h2>
        <h3 className="text-xl font-semibold">MONTHLY RATE:</h3>
        <p className="text-zinc-800 dark:text-zinc-200">FAMILY SEPARATION ALLOWANCE: $300–$400 per month (statutory range; FY24 NDAA authorizes up to $400; Services may set current rate)</p>
        <h4 className="text-lg font-semibold">FLAT RATE FOR ALL DEPENDENTS:</h4>
        <ul className="list-disc pl-6 text-zinc-800 dark:text-zinc-200">
          <li>Same $300/month whether you have one dependent or ten dependents</li>
          <li>Not calculated per dependent</li>
          <li>Per service member, not per dependent</li>
        </ul>

        <h3 className="text-xl font-semibold">PAYMENT START - 30-DAY RULE:</h3>
        <h4 className="text-lg font-semibold">CONTINUOUS SEPARATION MUST EXCEED 30 DAYS:</h4>
        <ul className="list-disc pl-6 text-zinc-800 dark:text-zinc-200">
          <li>Count actual calendar days (including 31st day of month)</li>
          <li>FSA begins on the 31st day of continuous separation</li>
          <li>Payment is RETROACTIVE to day 1 of separation once 30 days completed</li>
        </ul>
        <p className="text-zinc-800 dark:text-zinc-200">Cliff: Returning on day 30 yields $0; returning on day 31 yields a full month&apos;s payment retroactive to day 1.</p>
        <h4 className="text-lg font-semibold">FOR FSA-R:</h4>
        <ul className="list-disc pl-6 text-zinc-800 dark:text-zinc-200">
          <li>Day 1 = Date of departure from old duty station (or end of leave en route/proceed time)</li>
          <li>Day 31 = FSA eligibility begins, retroactive to day 1</li>
        </ul>
        <h4 className="text-lg font-semibold">FOR FSA-S:</h4>
        <ul className="list-disc pl-6 text-zinc-800 dark:text-zinc-200">
          <li>Day 1 = Date ship departs homeport (or date join ship away from homeport)</li>
          <li>Day 31 = FSA eligibility begins, retroactive to day 1</li>
          <li>If under orders to remain aboard at homeport, days at homeport count</li>
        </ul>
        <h4 className="text-lg font-semibold">FOR FSA-T:</h4>
        <ul className="list-disc pl-6 text-zinc-800 dark:text-zinc-200">
          <li>Day 1 = Date of departure on TDY/TAD</li>
          <li>Day 31 = FSA eligibility begins, retroactive to day 1</li>
        </ul>

        <h3 className="text-xl font-semibold">PAYMENT CALCULATION:</h3>
        <h4 className="text-lg font-semibold">MONTHLY PAYMENT:</h4>
        <ul className="list-disc pl-6 text-zinc-800 dark:text-zinc-200">
          <li>Calculated on 30-day month basis (even for 31-day months)</li>
          <li>February treated as 30-day month for calculation</li>
          <li>Exclude 31st day of any month from computation</li>
        </ul>
        <h4 className="text-lg font-semibold">PRORATED PAYMENT:</h4>
        <ul className="list-disc pl-6 text-zinc-800 dark:text-zinc-200">
          <li>If qualify for only part of month, payment prorated</li>
          <li>Based on number of qualifying days in that month</li>
          <li>Calculation: ($300 / 30) × number of qualifying days</li>
        </ul>
        <h3 className="text-xl font-semibold">PAYMENT DURATION:</h3>
        <h4 className="text-lg font-semibold">NO MAXIMUM DURATION:</h4>
        <ul className="list-disc pl-6 text-zinc-800 dark:text-zinc-200">
          <li>FSA continues as long as separation continues</li>
          <li>Can receive for months or years</li>
          <li>No limit on total FSA payments</li>
        </ul>
        <h4 className="text-lg font-semibold">CONTINUES UNTIL:</h4>
        <ul className="list-disc pl-6 text-zinc-800 dark:text-zinc-200">
          <li>Reunited with dependents (permanent reunion)</li>
          <li>Orders terminate or change</li>
          <li>Loss of all dependents</li>
          <li>Voluntary reunion</li>
        </ul>
        <h4 className="text-lg font-semibold">ONLY ONE FSA TYPE PER MONTH:</h4>
        <ul className="list-disc pl-6 text-zinc-800 dark:text-zinc-200">
          <li>Cannot receive FSA-R and FSA-S simultaneously</li>
          <li>Cannot receive FSA-R and FSA-T simultaneously</li>
          <li>Cannot receive FSA-S and FSA-T simultaneously</li>
          <li>Even if qualified for multiple types, receive only one</li>
        </ul>
        <h4 className="text-lg font-semibold">ANNUAL AMOUNT:</h4>
        <p className="text-zinc-800 dark:text-zinc-200">$300/month × 12 months = $3,600/year (if receiving all year)</p>
        <h4 className="text-lg font-semibold">TAX STATUS:</h4>
        <p className="text-zinc-800 dark:text-zinc-200">FSA is NOT taxable income • Not included in gross income for federal or state taxes • Not reported on W-2</p>
      </section>

      <section className="mt-10 space-y-6">
        <h2 className="text-2xl font-semibold">Types of Family Separation Allowance</h2>
        <h3 className="text-xl font-semibold">✅ FSA-R (RESTRICTED) - PCS ASSIGNMENTS</h3>
        <p className="text-zinc-800 dark:text-zinc-200">
          FSA-R is for service members assigned to a permanent duty station where dependents cannot accompany them or where dependent travel is not authorized at government expense.
        </p>
        <h4 className="text-lg font-semibold">ELIGIBILITY REQUIREMENTS:</h4>
        <p className="text-zinc-800 dark:text-zinc-200">You must meet ALL of these criteria:</p>
        <ol className="list-decimal pl-6 text-zinc-800 dark:text-zinc-200">
          <li>
            HAVE AUTHORIZED DEPENDENTS
            <ul className="list-disc pl-6">
              <li>At least one authorized dependent enrolled in DEERS</li>
              <li>Spouse, children, or approved secondary dependents</li>
              <li>Dependents properly documented in personnel system</li>
            </ul>
          </li>
          <li>
            PCS ASSIGNMENT WHERE DEPENDENTS CANNOT ACCOMPANY
            <ul className="list-disc pl-6">
              <li>Dependents not authorized to travel at government expense to duty station</li>
              <li>
                OR unaccompanied tour selected due to certified medical reasons preventing dependent from accompanying
              </li>
              <li>Dependent-restricted area (overseas locations prohibiting dependents)</li>
            </ul>
          </li>
          <li>
            DEPENDENTS DO NOT LIVE AT OR NEAR DUTY STATION
            <ul className="list-disc pl-6">
              <li>Dependents not within commuting distance (see below)</li>
              <li>Not residing with you at duty station</li>
              <li>Separation enforced by military orders, not personal choice</li>
            </ul>
          </li>
          <li>
            CONTINUOUS SEPARATION EXCEEDS 30 DAYS
            <ul className="list-disc pl-6">
              <li>Separated from ALL dependents</li>
              <li>For continuous period of more than 30 days</li>
              <li>FSA begins on 31st day, retroactive to day 1</li>
            </ul>
          </li>
        </ol>

        <h4 className="text-lg font-semibold">COMMUTING DISTANCE DEFINED:</h4>
        <p className="text-zinc-800 dark:text-zinc-200">NOT within commuting distance if:</p>
        <ul className="list-disc pl-6 text-zinc-800 dark:text-zinc-200">
          <li>More than 50 miles one way from duty station</li>
          <li>Less than 50 miles with onerous commute documented and determined at commander discretion; not automatic</li>
          <li>Member does not actually commute daily</li>
        </ul>
        <p className="text-zinc-800 dark:text-zinc-200">WITHIN commuting distance if:</p>
        <ul className="list-disc pl-6 text-zinc-800 dark:text-zinc-200">
          <li>50 miles or less and routine commute deemed reasonable</li>
          <li>Member actually commutes daily regardless of distance</li>
        </ul>

        <h4 className="text-lg font-semibold">OVERSEAS UNACCOMPANIED TOURS:</h4>
        <p className="text-zinc-800 dark:text-zinc-200">AUTOMATIC FSA-R ENTITLEMENT:</p>
        <ul className="list-disc pl-6 text-zinc-800 dark:text-zinc-200">
          <li>Assigned to dependent-restricted area overseas</li>
          <li>Dependents prohibited from accompanying by military</li>
          <li>Entitled to FSA-R for entire unaccompanied tour</li>
        </ul>
        <p className="text-zinc-800 dark:text-zinc-200">NO FSA-R ENTITLEMENT:</p>
        <ul className="list-disc pl-6 text-zinc-800 dark:text-zinc-200">
          <li>Elected unaccompanied tour when accompanied tour was authorized</li>
          <li>Voluntarily chose not to bring dependents when authorized</li>
          <li>Exception: Secretarial waiver may be granted for unusual circumstances</li>
          <li>Exception: Medical certification that dependent cannot accompany</li>
        </ul>

        <h4 className="text-lg font-semibold">CONUS ASSIGNMENTS:</h4>
        <ul className="list-disc pl-6 text-zinc-800 dark:text-zinc-200">
          <li>FSA-R authorized only when dependent movement not authorized at government expense</li>
          <li>
            If dependents authorized to travel at government expense but you choose not to bring them, generally not entitled to FSA-R
          </li>
          <li>Exception: Medical reasons preventing dependent from accompanying</li>
        </ul>
        <h4 className="text-lg font-semibold">You are NOT entitled to FSA-R if:</h4>
        <ul className="list-disc pl-6 text-zinc-800 dark:text-zinc-200">
          <li>Dependents authorized concurrent travel and you chose not to bring them (no medical reason)</li>
          <li>Elected unaccompanied tour when accompanied tour available (without waiver)</li>
          <li>Dependents living at or near duty station (within commuting distance)</li>
          <li>Voluntary or permissive assignment</li>
          <li>
            Moved dependents away from duty station for personal reasons after they were authorized to be there
          </li>
        </ul>

        <h3 className="text-xl font-semibold">✅ FSA-S (SHIP) - SHIP DEPLOYMENTS</h3>
        <h4 className="text-lg font-semibold">WHAT IS FSA-S?</h4>
        <p className="text-zinc-800 dark:text-zinc-200">
          FSA-S is for service members on duty aboard a ship away from homeport or under orders to remain aboard ship while at homeport.
        </p>
        <h4 className="text-lg font-semibold">ELIGIBILITY REQUIREMENTS:</h4>
        <p className="text-zinc-800 dark:text-zinc-200">You must meet ALL of these criteria:</p>
        <ol className="list-decimal pl-6 text-zinc-800 dark:text-zinc-200">
          <li>
            HAVE AUTHORIZED DEPENDENTS
            <ul className="list-disc pl-6">
              <li>At least one authorized dependent enrolled in DEERS</li>
              <li>Note: Dependents NOT required to reside near homeport</li>
            </ul>
          </li>
          <li>
            DUTY ABOARD SHIP
            <ul className="list-disc pl-6">
              <li>Assigned to duty aboard ship</li>
              <li>Ship must have designated homeport</li>
            </ul>
          </li>
          <li>
            SHIP AWAY FROM HOMEPORT OR ORDERED TO REMAIN ABOARD AT HOMEPORT
            <ul className="list-disc pl-6">
              <li>Ship away from homeport continuously for more than 30 days</li>
              <li>
                OR under orders to remain aboard ship while at homeport for continuous period of more than 30 days
              </li>
            </ul>
          </li>
          <li>
            CONTINUOUS DUTY EXCEEDS 30 DAYS
            <ul className="list-disc pl-6">
              <li>More than 30 continuous days aboard ship</li>
              <li>FSA begins on 31st day, retroactive to day 1</li>
            </ul>
          </li>
        </ol>
        <h4 className="text-lg font-semibold">SHIP AWAY FROM HOMEPORT:</h4>
        <p className="text-zinc-800 dark:text-zinc-200">QUALIFYING SITUATIONS:</p>
        <ul className="list-disc pl-6 text-zinc-800 dark:text-zinc-200">
          <li>Ship deployed from homeport</li>
          <li>Ship moves to port other than homeport</li>
          <li>Distance from homeport does not matter</li>
          <li>Actual absence from homeport is what qualifies</li>
        </ul>
        <p className="text-zinc-800 dark:text-zinc-200">NOT QUALIFYING:</p>
        <ul className="list-disc pl-6 text-zinc-800 dark:text-zinc-200">
          <li>Ship moves less than 50 miles from homeport (or 1.5 hours travel time)</li>
          <li>Ship at port where you can commute daily to dependents</li>
        </ul>
        <h4 className="text-lg font-semibold">SHIP AT HOMEPORT - SPECIAL RULES:</h4>
        <p className="text-zinc-800 dark:text-zinc-200">QUALIFYING FOR FSA-S WHILE AT HOMEPORT:</p>
        <ul className="list-disc pl-6 text-zinc-800 dark:text-zinc-200">
          <li>Must be under orders to remain aboard ship while at homeport</li>
          <li>Orders must specify duty aboard ship for continuous period exceeding 30 days</li>
          <li>Days at homeport count toward the 30-day requirement</li>
        </ul>
        <p className="text-zinc-800 dark:text-zinc-200">DOES NOT QUALIFY:</p>
        <ul className="list-disc pl-6 text-zinc-800 dark:text-zinc-200">
          <li>Required to remain aboard solely for disciplinary reasons</li>
          <li>Disciplinary restriction days do NOT count toward FSA-S</li>
        </ul>
        <h4 className="text-lg font-semibold">CONTINUOUS DUTY CALCULATION:</h4>
        <p className="text-zinc-800 dark:text-zinc-200">DOES NOT BREAK CONTINUITY:</p>
        <ul className="list-disc pl-6 text-zinc-800 dark:text-zinc-200">
          <li>Leave while ship deployed</li>
          <li>TAD while ship deployed (if remain assigned to ship)</li>
          <li>Hospitalization while ship deployed (if remain assigned to ship)</li>
          <li>Military confinement in pay status</li>
          <li>Short visits to homeport by member (not the ship)</li>
        </ul>
        <p className="text-zinc-800 dark:text-zinc-200">BREAKS CONTINUITY:</p>
        <ul className="list-disc pl-6 text-zinc-800 dark:text-zinc-200">
          <li>Ship returns to homeport (unless under orders to remain aboard)</li>
          <li>Detached from ship (PCS)</li>
          <li>Member stays at homeport when ship departs</li>
        </ul>
        <h4 className="text-lg font-semibold">REDEPLOYMENT RULES:</h4>
        <p className="text-zinc-800 dark:text-zinc-200">
          If ship returns to homeport 30 days or less, then redeploys for more than 30 days:
        </p>
        <ul className="list-disc pl-6 text-zinc-800 dark:text-zinc-200">
          <li>FSA-S continues during interim period and redeployment</li>
          <li>No break in FSA-S entitlement</li>
          <li>Interim period plus redeployment treated as continuous</li>
        </ul>
        <p className="text-zinc-800 dark:text-zinc-200">Example: Ship deployed 35 days, returned home 25 days, redeployed 40 days — FSA-S continues for all periods (total 100 days)</p>
        <p className="text-zinc-800 dark:text-zinc-200">If interim period exceeds 30 days:</p>
        <ul className="list-disc pl-6 text-zinc-800 dark:text-zinc-200">
          <li>FSA-S stops when ship returns to homeport</li>
          <li>New 30-day requirement for next deployment</li>
        </ul>
        <h4 className="text-lg font-semibold">You are NOT entitled to FSA-S if:</h4>
        <ul className="list-disc pl-6 text-zinc-800 dark:text-zinc-200">
          <li>Ship at homeport and not under orders to remain aboard</li>
          <li>Ship at port where dependents reside and you commute to them</li>
          <li>Required aboard solely for disciplinary reasons</li>
          <li>Continuous duty does not exceed 30 days</li>
        </ul>

        <h3 className="text-xl font-semibold">✅ FSA-T (TEMPORARY) - TDY/TAD ASSIGNMENTS</h3>
        <p className="text-zinc-800 dark:text-zinc-200">
          FSA-T is for service members on temporary duty (TDY) or temporary assigned duty (TAD) away from their permanent duty station or homeport, separated from dependents for more than 30 continuous days.
        </p>
        <h4 className="text-lg font-semibold">ELIGIBILITY REQUIREMENTS:</h4>
        <p className="text-zinc-800 dark:text-zinc-200">You must meet ALL of these criteria:</p>
        <ol className="list-decimal pl-6 text-zinc-800 dark:text-zinc-200">
          <li>
            HAVE AUTHORIZED DEPENDENTS
            <ul className="list-disc pl-6">
              <li>At least one authorized dependent enrolled in DEERS</li>
            </ul>
          </li>
          <li>
            TDY/TAD ORDERS
            <ul className="list-disc pl-6">
              <li>On TDY or TAD away from permanent duty station or homeport</li>
              <li>Orders for duty performance (not permissive TDY)</li>
              <li>Includes TDY/TAD en route to PCS</li>
            </ul>
          </li>
          <li>
            DEPENDENTS DO NOT RESIDE AT OR NEAR TDY/TAD LOCATION
            <ul className="list-disc pl-6">
              <li>Dependents not within commuting distance of TDY location</li>
              <li>Cannot commute daily to dependents</li>
              <li>Separation enforced by orders</li>
            </ul>
          </li>
          <li>
            CONTINUOUS SEPARATION EXCEEDS 30 DAYS
            <ul className="list-disc pl-6">
              <li>More than 30 continuous days on TDY/TAD</li>
              <li>FSA begins on 31st day, retroactive to day 1</li>
            </ul>
          </li>
        </ol>
        <h4 className="text-lg font-semibold">COMMUTING DISTANCE FOR FSA-T:</h4>
        <p className="text-zinc-800 dark:text-zinc-200">NOT within commuting distance if:</p>
        <ul className="list-disc pl-6 text-zinc-800 dark:text-zinc-200">
          <li>More than 50 miles one way from TDY location</li>
          <li>OR less than 50 miles but travel time exceeds 1.5 hours one way</li>
          <li>Member does not actually commute daily</li>
        </ul>
        <p className="text-zinc-800 dark:text-zinc-200">WITHIN commuting distance (no FSA-T):</p>
        <ul className="list-disc pl-6 text-zinc-800 dark:text-zinc-200">
          <li>50 miles or less AND travel time 1.5 hours or less</li>
          <li>OR member able to commute and actually commutes daily</li>
        </ul>
        <h4 className="text-lg font-semibold">QUALIFYING TDY/TAD:</h4>
        <p className="text-zinc-800 dark:text-zinc-200">DOES QUALIFY:</p>
        <ul className="list-disc pl-6 text-zinc-800 dark:text-zinc-200">
          <li>TDY for training exceeding 30 days</li>
          <li>TDY for temporary assignment exceeding 30 days</li>
          <li>TDY/TAD en route to PCS</li>
          <li>Unit ordered on exercise for more than 30 days</li>
          <li>Deployment from Reserve status for more than 30 days</li>
        </ul>
        <p className="text-zinc-800 dark:text-zinc-200">DOES NOT QUALIFY:</p>
        <ul className="list-disc pl-6 text-zinc-800 dark:text-zinc-200">
          <li>Permissive TDY (house hunting, job search, etc.)</li>
          <li>TDY within commuting distance of dependents</li>
          <li>TDY where member actually commutes daily to dependents</li>
        </ul>
        <h4 className="text-lg font-semibold">RESERVE COMPONENT FSA-T:</h4>
        <p className="text-zinc-800 dark:text-zinc-200">
          RC members on active duty orders exceeding 30 days: Permanent duty station considered location from which ordered to active duty OR place of entry to active duty. If separated from dependents for more than 30 days, entitled to FSA-T. Does NOT apply to annual training (typically 2 weeks). Does NOT apply to weekend drills.
        </p>
        <h4 className="text-lg font-semibold">REDEPLOYMENT RULES:</h4>
        <p className="text-zinc-800 dark:text-zinc-200">
          If return from TDY 30 days or less, then redeploy on TDY for more than 30 days:
        </p>
        <ul className="list-disc pl-6 text-zinc-800 dark:text-zinc-200">
          <li>FSA-T continues during interim period and redeployment</li>
          <li>No break in FSA-T entitlement</li>
        </ul>
        <p className="text-zinc-800 dark:text-zinc-200">If interim period exceeds 30 days:</p>
        <ul className="list-disc pl-6 text-zinc-800 dark:text-zinc-200">
          <li>FSA-T stops upon return from first TDY</li>
          <li>New 30-day requirement for next TDY</li>
        </ul>
        <h4 className="text-lg font-semibold">You are NOT entitled to FSA-T if:</h4>
        <ul className="list-disc pl-6 text-zinc-800 dark:text-zinc-200">
          <li>TDY is permissive (not required duty performance)</li>
          <li>Within commuting distance of dependents</li>
          <li>Actually commute daily to dependents</li>
          <li>TDY does not exceed 30 continuous days</li>
          <li>On authorized leave en route or proceed time</li>
        </ul>
      </section>

      <section className="mt-10 space-y-6">
        <h2 className="text-2xl font-semibold">📄 WHAT DOCUMENTS DO YOU NEED?</h2>
        <h3 className="text-xl font-semibold">REQUIRED FOR ALL FSA TYPES:</h3>
        <h4 className="text-lg font-semibold">DD Form 1561 - Statement to Substantiate Payment of FSA</h4>
        <ul className="list-disc pl-6 text-zinc-800 dark:text-zinc-200">
          <li>Required to substantiate FSA entitlement</li>
          <li>Member completes Part I (certification section)</li>
          <li>Certifying officer completes Part II</li>
          <li>Must be completed before FSA can be authorized</li>
        </ul>
        <h4 className="text-lg font-semibold">PART I - MEMBER CERTIFICATION (DD Form 1561):</h4>
        <p className="text-zinc-800 dark:text-zinc-200">You must certify the following (check applicable boxes):</p>
        <ul className="list-disc pl-6 text-zinc-800 dark:text-zinc-200">
          <li>Not divorced or legally separated from spouse</li>
          <li>Dependent children not in legal custody of another person when you received orders</li>
          <li>Dependents (other than spouse) not military members on active duty</li>
          <li>Sole dependent not in institution for over 1 year</li>
          <li>If claiming parent dependents, maintain residence for them</li>
          <li>
            If married to military member, spouse WAS or WAS NOT residing with you before separation by orders
          </li>
          <li>
            Last TDY/deployment WAS or WAS NOT within 30 days of current TDY/deployment
          </li>
        </ul>
        <p className="text-zinc-800 dark:text-zinc-200">Must provide:</p>
        <ul className="list-disc pl-6 text-zinc-800 dark:text-zinc-200">
          <li>Current addresses of all dependents</li>
          <li>Type of FSA claimed (FSA-R, FSA-S, or FSA-T)</li>
          <li>Member signature and date</li>
        </ul>
        <h4 className="text-lg font-semibold">PART II - CERTIFYING OFFICER SECTION (DD Form 1561):</h4>
        <p className="text-zinc-800 dark:text-zinc-200">For FSA-T:</p>
        <ul className="list-disc pl-6 text-zinc-800 dark:text-zinc-200">
          <li>TDY location(s)</li>
          <li>Inclusive dates of TDY</li>
          <li>Number of days</li>
          <li>Certification location outside reasonable commuting distance</li>
        </ul>
        <p className="text-zinc-800 dark:text-zinc-200">For FSA-R:</p>
        <ul className="list-disc pl-6 text-zinc-800 dark:text-zinc-200">
          <li>Date departed last PDS</li>
          <li>Leave en route dates (if applicable)</li>
          <li>Proceed time dates (if applicable)</li>
          <li>Date reported to new PDS</li>
          <li>Certification dependents not authorized transport at government expense</li>
        </ul>
        <p className="text-zinc-800 dark:text-zinc-200">For FSA-S:</p>
        <ul className="list-disc pl-6 text-zinc-800 dark:text-zinc-200">
          <li>Date commenced duty aboard ship away from homeport</li>
          <li>Ship name</li>
          <li>Homeport designation</li>
        </ul>
        <p className="text-zinc-800 dark:text-zinc-200">All types:</p>
        <ul className="list-disc pl-6 text-zinc-800 dark:text-zinc-200">
          <li>Orders number and date</li>
          <li>Confirmation receiving BAH-WITH or married to military member</li>
          <li>Certifying officer signature</li>
        </ul>
        <h4 className="text-lg font-semibold">SUPPORTING DOCUMENTS:</h4>
        <p className="text-zinc-800 dark:text-zinc-200">Dependent Enrollment in DEERS</p>
        <ul className="list-disc pl-6 text-zinc-800 dark:text-zinc-200">
          <li>All dependents must be enrolled</li>
          <li>Marriage certificate for spouse</li>
          <li>Birth certificates for children</li>
          <li>DD Form 137 for secondary dependents (parents, etc.)</li>
        </ul>
        <p className="text-zinc-800 dark:text-zinc-200">Orders Creating Separation</p>
        <ul className="list-disc pl-6 text-zinc-800 dark:text-zinc-200">
          <li>PCS orders (for FSA-R)</li>
          <li>TDY/TAD orders (for FSA-T)</li>
          <li>Ship deployment orders or duty assignment (for FSA-S)</li>
        </ul>
        <p className="text-zinc-800 dark:text-zinc-200">BAH Documentation</p>
        <ul className="list-disc pl-6 text-zinc-800 dark:text-zinc-200">
          <li>Must be receiving BAH-WITH (with dependents) OR married to military member</li>
          <li>BAH rate sheet showing dependent location</li>
        </ul>
        <h4 className="text-lg font-semibold">FOR SPECIAL SITUATIONS:</h4>
        <p className="text-zinc-800 dark:text-zinc-200">Joint Custody Documentation (if applicable):</p>
        <ul className="list-disc pl-6 text-zinc-800 dark:text-zinc-200">
          <li>Court order or divorce decree showing joint legal and physical custody</li>
          <li>Documentation that child resides with you at least 14 days per month</li>
          <li>Custody agreement or affidavit signed by both parents and notarized</li>
        </ul>
        <p className="text-zinc-800 dark:text-zinc-200">Medical Certification (if applicable):</p>
        <ul className="list-disc pl-6 text-zinc-800 dark:text-zinc-200">
          <li>
            If claiming FSA-R due to dependent medical condition preventing accompaniment to overseas location
          </li>
          <li>Medical documentation from competent medical authority</li>
          <li>Certification dependent cannot accompany due to medical reasons</li>
        </ul>
        <p className="text-zinc-800 dark:text-zinc-200">Dual Military Couple Documentation:</p>
        <ul className="list-disc pl-6 text-zinc-800 dark:text-zinc-200">
          <li>Spouse DoD ID number</li>
          <li>Spouse branch and component</li>
          <li>Certification of living together before separation by orders</li>
        </ul>
        <p className="text-zinc-800 dark:text-zinc-200">Unit Diary Entry:</p>
        <ul className="list-disc pl-6 text-zinc-800 dark:text-zinc-200">
          <li>S-1 processes diary action to start FSA in MCTFS</li>
          <li>Links DD Form 1561, orders, and dependent information to pay system</li>
          <li>Effective date: Based on type of FSA (see start dates above)</li>
        </ul>
      </section>

      <section className="mt-10 space-y-6">
        <h2 className="text-2xl font-semibold">🔧 HOW FSA WORKS</h2>
        <h3 className="text-xl font-semibold">STARTING FSA - GENERAL PROCESS:</h3>
        <ol className="list-decimal pl-6 text-zinc-800 dark:text-zinc-200">
          <li>
            Determine which type of FSA applies
            <ul className="list-disc pl-6">
              <li>FSA-R: PCS where dependents not authorized</li>
              <li>FSA-S: Ship deployment from homeport</li>
              <li>FSA-T: TDY/TAD away from PDS</li>
            </ul>
          </li>
          <li>Verify dependent enrollment in DEERS</li>
          <li>Receive orders creating separation</li>
          <li>Physical separation begins</li>
          <li>Complete DD Form 1561</li>
          <li>Obtain certifying officer completion</li>
          <li>Submit to S-1 for processing</li>
          <li>Complete 30 continuous days of separation</li>
          <li>FSA appears on LES</li>
        </ol>
        <h3 className="text-xl font-semibold">MAINTAINING FSA:</h3>
        <p className="text-zinc-800 dark:text-zinc-200">
          FSA continues monthly while separation continues under orders. Notify command immediately if conditions change (dependents move, dependency status changes, extended visits, etc.).
        </p>
        <h3 className="text-xl font-semibold">TEMPORARY VISITS BY DEPENDENTS:</h3>
        <table className="w-full text-sm border border-zinc-200 dark:border-zinc-700">
          <thead className="bg-zinc-100 dark:bg-zinc-800">
            <tr>
              <th className="p-2 text-left">Type of Separation</th>
              <th className="p-2 text-left">Length of visit allowed</th>
              <th className="p-2 text-left">Result if exceeded</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t border-zinc-200 dark:border-zinc-700">
              <td className="p-2">PCS (Unaccompanied)</td>
              <td className="p-2">Up to 90 days</td>
              <td className="p-2">Pay stops on Day 91</td>
            </tr>
            <tr className="border-t border-zinc-200 dark:border-zinc-700">
              <td className="p-2">TDY / Deployment</td>
              <td className="p-2">Up to 30 days</td>
              <td className="p-2">Pay stops for entire period of visit</td>
            </tr>
            <tr className="border-t border-zinc-200 dark:border-zinc-700">
              <td className="p-2">Ship (at port)</td>
              <td className="p-2">Up to 30 days</td>
              <td className="p-2">Pay stops for entire period of visit</td>
            </tr>
          </tbody>
        </table>
        <p className="mt-3 text-zinc-800 dark:text-zinc-200">Critical note: If the visit is social (hotel stay), FSA continues. If the visit reestablishes a household (move into house/apartment), FSA stops immediately.</p>
        <h3 className="text-xl font-semibold">WHEN FSA STOPS:</h3>
        <ul className="list-disc pl-6 text-zinc-800 dark:text-zinc-200">
          <li>Return to permanent duty station (end of TDY)</li>
          <li>Ship returns to homeport (end of deployment)</li>
          <li>Dependents join you at duty location (permanent change of residence)</li>
          <li>PCS to location where dependents authorized</li>
          <li>Loss of all dependents</li>
        </ul>
      </section>

      <section className="mt-10 space-y-6">
        <h2 className="text-2xl font-semibold">⚠️ IMPORTANT THINGS TO KNOW</h2>
        <ul className="list-disc pl-6 text-zinc-800 dark:text-zinc-200">
          <li>DD Form 1561 required</li>
          <li>Separation must be more than 30 days (31+)</li>
          <li>Flat rate $300/month regardless of dependents</li>
          <li>Enforced separation required by orders</li>
          <li>Only one FSA type per month</li>
          <li>FSA and BAH-WITH can be received simultaneously</li>
          <li>FSA continues during authorized leave</li>
          <li>Commuting distance uses 50-mile standard; &quot;1.5 hours&quot; may be applied at commander discretion for onerous conditions; not automatic</li>
          <li>Evacuation rules may affect start dates</li>
          <li>FSA is not taxable income</li>
        </ul>
      </section>

      <section className="mt-10 space-y-6">
        <h2 className="text-2xl font-semibold">👥 DUAL MILITARY COUPLES - DETAILED RULES</h2>
        <p className="text-zinc-800 dark:text-zinc-200">
          If you are married to another military member: entitled to FSA even if no other dependents, if residing together immediately before separation by orders.
        </p>
        <h3 className="text-xl font-semibold">SCENARIOS:</h3>
        <ul className="list-disc pl-6 text-zinc-800 dark:text-zinc-200">
          <li>One member receives orders: that member receives FSA.</li>
          <li>Both receive orders same day: senior member receives FSA.</li>
          <li>
            Sequential orders: spouses may alternate FSA, must reestablish joint household between separations.
          </li>
          <li>
            Both separated from dependents (children): BOTH members may receive FSA simultaneously until one no longer qualifies.
          </li>
          <li>
            Same location away from dependents: both still receive FSA if separated from dependents.
          </li>
          <li>
            BAH and FSA split: one claims child for BAH, the other may claim same child for FSA.
          </li>
        </ul>
      </section>

      <section className="mt-10 space-y-6">
        <h2 className="text-2xl font-semibold">📝 SPECIAL SITUATIONS AND RULES</h2>
        <ul className="list-disc pl-6 text-zinc-800 dark:text-zinc-200">
          <li>Acquiring dependents after orders may start FSA from acquisition date</li>
          <li>Waiting for government quarters: FSA-R up to 180 days if quarters unavailable</li>
          <li>Unit ordered on exercise exceeding 30 days qualifies for FSA-T</li>
          <li>Prolonged hospitalization away from duty station may continue FSA</li>
          <li>Joint custody: child must reside with you at least 14 days/month</li>
          <li>Secondary dependents (parents) require approved dependency determination (DD Form 137)</li>
          <li>Permissive orders do not authorize FSA</li>
          <li>Immigration issues may prevent FSA-R entitlement</li>
          <li>Ship homeport changes impact FSA-S calculations</li>
          <li>Consecutive ship assignments may combine days to meet 30-day requirement</li>
          <li>Reserve Component mobilization often qualifies for FSA</li>
          <li>CONUS-to-CONUS PCS generally not FSA-R unless dependents not authorized to travel</li>
          <li>Tour election changes from accompanied to unaccompanied generally not entitled</li>
        </ul>
      </section>

      <section className="mt-10 space-y-6">
        <h2 className="text-2xl font-semibold">References</h2>
        <ul className="list-disc pl-6 text-zinc-800 dark:text-zinc-200">
          <li>
            <a className="underline" href="https://www.law.cornell.edu/uscode/text/37/427" target="_blank" rel="noopener noreferrer">37 U.S.C. § 427</a>
          </li>
          <li>
            <a className="underline" href="https://comptroller.defense.gov/Portals/45/documents/fmr/current/07a/07a_27.pdf" target="_blank" rel="noopener noreferrer">DoD FMR Vol. 7A, Ch. 27</a>
          </li>
          <li>
            <a className="underline" href="https://www.esd.whs.mil/Portals/54/Documents/DD/issuances/dodi/134024p.pdf" target="_blank" rel="noopener noreferrer">DoDI 1340.24</a>
          </li>
          <li>
            <a className="underline" href="https://www.esd.whs.mil/Portals/54/Documents/DD/forms/dd/dd1561.pdf" target="_blank" rel="noopener noreferrer">DD Form 1561 (current)</a>
          </li>
        </ul>
      </section>

      <section className="mt-10 space-y-6">
        <h2 className="text-2xl font-semibold">❓ COMMON PROBLEMS AND SOLUTIONS</h2>
        <div className="space-y-4 text-zinc-800 dark:text-zinc-200">
          <p>
            Problem: My spouse is also active duty, we have no kids, and we are both deployed to different locations. Do we both get $300?
            <br />
            Solution: No. If there are no other dependents, only one FSA is authorized for the couple. FSA offsets the cost of maintaining a single household while separated; duplicate payments may be recouped as debt.
          </p>
          <p>
            Problem: I&apos;ve been separated from my family for 45 days but no FSA on my LES
            <br />
            Solution: Complete DD Form 1561, verify DEERS enrollment, confirm orders and BAH-WITH status, contact S-1 if submitted over 60 days ago.
          </p>
          <p>
            Problem: I filled out DD Form 1561 but S-1 says I don&apos;t qualify
            <br />
            Solution: Check commuting distance, PCS dependent travel authorization, TDY permissive status, and 30+ day requirement.
          </p>
          <p>
            Problem: My spouse is also in the military and we both got FSA
            <br />
            Solution: Only one spouse receives FSA per month except when both separated from children by orders; contact finance to correct overpayment.
          </p>
          <p>
            Problem: FSA stopped when I took leave to visit family
            <br />
            Solution: FSA continues during leave; temporary reunion does not stop FSA. Contact S-1.
          </p>
          <p>
            Problem: I&apos;m stationed overseas and elected unaccompanied tour - why no FSA?
            <br />
            Solution: Voluntary unaccompanied tours generally do not qualify; exceptions require waiver or medical certification.
          </p>
          <p>
            Problem: My family visited me for 2 months - FSA still paying
            <br />
            Solution: FSA-R allows up to 3 months; FSA-S/T visits over 30 days stop FSA unless emergency.
          </p>
          <p>
            Problem: I have 3 kids but only getting $300/month FSA
            <br />
            Solution: Correct – FSA is a flat rate per member.
          </p>
          <p>
            Problem: Family lives 45 miles away but S-1 says no FSA because &quot;within commuting distance&quot;
            <br />
            Solution: Document travel time over 1.5 hours; request determination.
          </p>
          <p>
            Problem: I&apos;ve been separated 29 days - where&apos;s FSA?
            <br />
            Solution: Must exceed 30 days; begins day 31 and is retroactive.
          </p>
          <p>
            Problem: Ship returned to homeport for 3 weeks then deployed again - FSA stopped
            <br />
            Solution: Correct if interim over 30 days; otherwise FSA should continue.
          </p>
          <p>
            Problem: My ex-spouse has custody but I have the kids 50% of the time - do I get FSA?
            <br />
            Solution: With joint legal and physical custody and 14+ days/month residency, child is your dependent for FSA.
          </p>
          <p>
            Problem: TDY orders say 30 days - will I get FSA?
            <br />
            Solution: More than 30 days required; 31+ days qualifies and is retroactive.
          </p>
          <p>
            Problem: I&apos;m living in base housing with my family - why no FSA for my deployment?
            <br />
            Solution: FSA not authorized if receiving BAH-DIFF; verify BAH-WITH status.
          </p>
          <p>
            Problem: My dependent parent lives in a nursing home - can I claim FSA?
            <br />
            Solution: Sole dependent institutionalized over 1 year is not eligible for FSA.
          </p>
          <p>
            Problem: I moved my family away from my duty station for better schools - do I get FSA?
            <br />
            Solution: No; separation must be enforced by orders, not personal choice.
          </p>
          <p>
            Problem: Ship deployed 35 days, home 25 days, deployed 40 days - did FSA stop?
            <br />
            Solution: No; interim period 30 days or less does not break FSA.
          </p>
          <p>
            Problem: I&apos;m Reserve and on 2-week annual training - where&apos;s FSA?
            <br />
            Solution: Annual training does not exceed 30 days; not eligible.
          </p>
          <p>
            Problem: I got married after I received my unaccompanied tour orders - can I get FSA now?
            <br />
            Solution: May qualify from the date you acquired the dependent; submit DD Form 1561 and update DEERS.
          </p>
        </div>
      </section>
    </div>
  );
}
