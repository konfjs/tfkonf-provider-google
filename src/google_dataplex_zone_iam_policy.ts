import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleDataplexZoneIamPolicyArgs {
  dataplex_zone: string;
  lake: string;
  policy_data: string;
}

export class google_dataplex_zone_iam_policy extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GoogleDataplexZoneIamPolicyArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "google_dataplex_zone_iam_policy", resourceName);
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

  get policy_data(): string {
    return `${this.resourceType}.${this.resourceName}.policy_data`;
  }

  get project(): string {
    return `${this.resourceType}.${this.resourceName}.project`;
  }
}
