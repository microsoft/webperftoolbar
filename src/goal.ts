/** Describes a goal. */
abstract class Goal
{
    /** The name of the goal. */
    name: string;
    /** Then number when the user should be warned the value is approaching the goal. */
    goalWarning: number;
    /** The number when the user should we warned they have passed the goal. */
    goalTarget: number;
    /** Gets the current value of the goal. */
    abstract getValue(): number;
}