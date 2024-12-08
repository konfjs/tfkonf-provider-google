import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataGoogleClientOpenidUserinfoArgs {
}

export class data_google_client_openid_userinfo extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataGoogleClientOpenidUserinfoArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "google_client_openid_userinfo", resourceName);
  }

  get email(): string {
    return `data.${this.resourceType}.${this.resourceName}.email`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }
}
