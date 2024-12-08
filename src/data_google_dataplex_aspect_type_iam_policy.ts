import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataGoogleDataplexAspectTypeIamPolicyArgs {
  aspect_type_id: string;
}

export class data_google_dataplex_aspect_type_iam_policy extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataGoogleDataplexAspectTypeIamPolicyArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "google_dataplex_aspect_type_iam_policy", resourceName);
  }

  get aspect_type_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.aspect_type_id`;
  }

  get etag(): string {
    return `data.${this.resourceType}.${this.resourceName}.etag`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get location(): string {
    return `data.${this.resourceType}.${this.resourceName}.location`;
  }

  get policy_data(): string {
    return `data.${this.resourceType}.${this.resourceName}.policy_data`;
  }

  get project(): string {
    return `data.${this.resourceType}.${this.resourceName}.project`;
  }
}
