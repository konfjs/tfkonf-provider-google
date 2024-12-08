import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleDataplexZoneIamBindingArgsCondition {
  description?: string;
  expression: string;
  title: string;
}

export interface GoogleDataplexZoneIamBindingArgs {
  dataplex_zone: string;
  lake: string;
  members: string[];
  role: string;
  condition?: GoogleDataplexZoneIamBindingArgsCondition;
}

export class google_dataplex_zone_iam_binding extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GoogleDataplexZoneIamBindingArgs) {
    const meta = {condition:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_dataplex_zone_iam_binding", resourceName);
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

  get members(): string {
    return `${this.resourceType}.${this.resourceName}.members`;
  }

  get project(): string {
    return `${this.resourceType}.${this.resourceName}.project`;
  }

  get role(): string {
    return `${this.resourceType}.${this.resourceName}.role`;
  }
}
