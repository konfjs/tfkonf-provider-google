import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleAppEngineServiceNetworkSettingsArgsNetworkSettings {
  ingress_traffic_allowed?: string;
}

export interface GoogleAppEngineServiceNetworkSettingsArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleAppEngineServiceNetworkSettingsArgs {
  service: string;
  network_settings: GoogleAppEngineServiceNetworkSettingsArgsNetworkSettings;
  timeouts?: GoogleAppEngineServiceNetworkSettingsArgsTimeouts;
}

export class google_app_engine_service_network_settings extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GoogleAppEngineServiceNetworkSettingsArgs) {
    const meta = {network_settings:{isBlock:true},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_app_engine_service_network_settings", resourceName);
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get project(): string {
    return `${this.resourceType}.${this.resourceName}.project`;
  }

  get service(): string {
    return `${this.resourceType}.${this.resourceName}.service`;
  }
}
