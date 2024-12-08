import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataGoogleDataplexAssetIamPolicyArgs {
  asset: string;
  dataplex_zone: string;
  lake: string;
}

export class data_google_dataplex_asset_iam_policy extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataGoogleDataplexAssetIamPolicyArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "google_dataplex_asset_iam_policy", resourceName);
  }

  get asset(): string {
    return `data.${this.resourceType}.${this.resourceName}.asset`;
  }

  get dataplex_zone(): string {
    return `data.${this.resourceType}.${this.resourceName}.dataplex_zone`;
  }

  get etag(): string {
    return `data.${this.resourceType}.${this.resourceName}.etag`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get lake(): string {
    return `data.${this.resourceType}.${this.resourceName}.lake`;
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
