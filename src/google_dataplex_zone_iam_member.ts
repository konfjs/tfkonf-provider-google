import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleDataplexZoneIamMemberArgsCondition {
  description?: string;
  expression: string;
  title: string;
}

export interface GoogleDataplexZoneIamMemberArgs {
  dataplex_zone: string;
  lake: string;
  member: string;
  role: string;
  condition?: GoogleDataplexZoneIamMemberArgsCondition;
}

export class google_dataplex_zone_iam_member extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GoogleDataplexZoneIamMemberArgs) {
    const meta = {condition:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_dataplex_zone_iam_member", resourceName);
  }

  get dataplex_zone(): string {
    return `${this.resourceType}.${this.resourceName}.dataplex_zone`;
  }

  get etag(): string {
    return `${this.resourceType}.${this.resourceName}.etag`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get lake(): string {
    return `${this.resourceType}.${this.resourceName}.lake`;
  }

  get location(): string {
    return `${this.resourceType}.${this.resourceName}.location`;
  }

  get member(): string {
    return `${this.resourceType}.${this.resourceName}.member`;
  }

  get project(): string {
    return `${this.resourceType}.${this.resourceName}.project`;
  }

  get role(): string {
    return `${this.resourceType}.${this.resourceName}.role`;
  }
}
